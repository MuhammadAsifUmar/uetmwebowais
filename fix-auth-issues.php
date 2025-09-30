<?php
/**
 * Fix Authentication Issues Script
 * Comprehensive fix for auth endpoint problems
 */

echo "<h1>UET Mardan - Fix Authentication Issues</h1>";

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Step 1: Test and fix database connection
echo "<h2>Step 1: Database Connection & Admin User</h2>";
try {
    require_once __DIR__ . '/php-backend/config/db.php';
    $db = Database::getConnection();
    echo "<p style='color: green;'>✅ Database connection successful</p>";
    
    // Check if admin user exists
    $stmt = $db->prepare('SELECT id, name, email, role FROM users WHERE email = ?');
    $stmt->execute(['admin@uetmardan.edu.pk']);
    $user = $stmt->fetch();
    
    if ($user) {
        echo "<p style='color: green;'>✅ Admin user exists: {$user['name']} (ID: {$user['id']})</p>";
    } else {
        echo "<p style='color: orange;'>⚠️ Admin user not found, creating...</p>";
        
        $passwordHash = password_hash('admin123', PASSWORD_DEFAULT);
        $stmt = $db->prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)');
        $stmt->execute(['System Administrator', 'admin@uetmardan.edu.pk', $passwordHash, 'admin']);
        
        echo "<p style='color: green;'>✅ Admin user created successfully</p>";
        echo "<p><strong>Login Credentials:</strong></p>";
        echo "<ul>";
        echo "<li>Email: admin@uetmardan.edu.pk</li>";
        echo "<li>Password: admin123</li>";
        echo "</ul>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Database error: " . $e->getMessage() . "</p>";
    exit;
}

// Step 2: Test auth/login endpoint
echo "<h2>Step 2: Testing Auth Login Endpoint</h2>";
$loginUrl = 'http://localhost/uet-php/php-backend/public/api/auth/login';
$loginData = json_encode([
    'email' => 'admin@uetmardan.edu.pk',
    'password' => 'admin123'
]);

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/json',
        'content' => $loginData
    ]
]);

$response = @file_get_contents($loginUrl, false, $context);
if ($response !== false) {
    $data = json_decode($response, true);
    if ($data && isset($data['token'])) {
        echo "<p style='color: green;'>✅ Login endpoint working!</p>";
        echo "<p>Token received: " . substr($data['token'], 0, 20) . "...</p>";
        
        // Test auth/me with the token
        echo "<h2>Step 3: Testing Auth/Me Endpoint</h2>";
        $meUrl = 'http://localhost/uet-php/php-backend/public/api/auth/me';
        $meContext = stream_context_create([
            'http' => [
                'method' => 'GET',
                'header' => "Authorization: Bearer {$data['token']}\r\nContent-Type: application/json"
            ]
        ]);
        
        $meResponse = @file_get_contents($meUrl, false, $meContext);
        if ($meResponse !== false) {
            $meData = json_decode($meResponse, true);
            if ($meData && isset($meData['user'])) {
                echo "<p style='color: green;'>✅ Auth/me endpoint working!</p>";
                echo "<p>User: " . json_encode($meData['user']) . "</p>";
            } else {
                echo "<p style='color: orange;'>⚠️ Auth/me response not valid JSON</p>";
                echo "<p>Response: " . htmlspecialchars($meResponse) . "</p>";
            }
        } else {
            echo "<p style='color: red;'>❌ Auth/me endpoint failed</p>";
            $error = error_get_last();
            if ($error) {
                echo "<p>Error: " . $error['message'] . "</p>";
            }
        }
        
        // Test admin/stats with the token
        echo "<h2>Step 4: Testing Admin/Stats Endpoint</h2>";
        $statsUrl = 'http://localhost/uet-php/php-backend/public/api/admin/stats';
        $statsContext = stream_context_create([
            'http' => [
                'method' => 'GET',
                'header' => "Authorization: Bearer {$data['token']}\r\nContent-Type: application/json"
            ]
        ]);
        
        $statsResponse = @file_get_contents($statsUrl, false, $statsContext);
        if ($statsResponse !== false) {
            $statsData = json_decode($statsResponse, true);
            if ($statsData) {
                echo "<p style='color: green;'>✅ Admin/stats endpoint working!</p>";
                echo "<p>Stats: " . json_encode($statsData) . "</p>";
            } else {
                echo "<p style='color: orange;'>⚠️ Admin/stats response not valid JSON</p>";
                echo "<p>Response: " . htmlspecialchars($statsResponse) . "</p>";
            }
        } else {
            echo "<p style='color: red;'>❌ Admin/stats endpoint failed</p>";
            $error = error_get_last();
            if ($error) {
                echo "<p>Error: " . $error['message'] . "</p>";
            }
        }
        
    } else {
        echo "<p style='color: red;'>❌ Login failed</p>";
        echo "<p>Response: " . htmlspecialchars($response) . "</p>";
    }
} else {
    echo "<p style='color: red;'>❌ Login endpoint not accessible</p>";
    $error = error_get_last();
    if ($error) {
        echo "<p>Error: " . $error['message'] . "</p>";
    }
}

// Step 5: Test admin login page
echo "<h2>Step 5: Admin Login Page Test</h2>";
echo "<p>Testing admin login page accessibility...</p>";

$adminPageUrl = 'http://localhost/uet-php/php-backend/public/admin.html';
$adminPageContext = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => 'Content-Type: text/html'
    ]
]);

$adminPageResponse = @file_get_contents($adminPageUrl, false, $adminPageContext);
if ($adminPageResponse !== false) {
    echo "<p style='color: green;'>✅ Admin login page accessible</p>";
} else {
    echo "<p style='color: red;'>❌ Admin login page not accessible</p>";
    $error = error_get_last();
    if ($error) {
        echo "<p>Error: " . $error['message'] . "</p>";
    }
}

echo "<h2>Summary</h2>";
echo "<p><strong>Correct URLs to use:</strong></p>";
echo "<ul>";
echo "<li><strong>Admin Login:</strong> <a href='http://localhost/uet-php/php-backend/public/admin.html' target='_blank'>http://localhost/uet-php/php-backend/public/admin.html</a></li>";
echo "<li><strong>Admin Dashboard:</strong> <a href='http://localhost/uet-php/admin-dashboard.html' target='_blank'>http://localhost/uet-php/admin-dashboard.html</a></li>";
echo "<li><strong>Main Website:</strong> <a href='http://localhost/uet-php/index.html' target='_blank'>http://localhost/uet-php/index.html</a></li>";
echo "</ul>";

echo "<p><strong>Login Credentials:</strong></p>";
echo "<ul>";
echo "<li>Email: <code>admin@uetmardan.edu.pk</code></li>";
echo "<li>Password: <code>admin123</code></li>";
echo "</ul>";

echo "<h2>Next Steps</h2>";
echo "<ol>";
echo "<li>Go to the admin login page using the correct URL above</li>";
echo "<li>Login with the credentials provided</li>";
echo "<li>You should be redirected to the admin dashboard</li>";
echo "<li>If you still have issues, check the browser console for errors</li>";
echo "</ol>";

echo "<p><a href='/uet-php/test-connection.php'>Back to Connection Test</a></p>";
?>
