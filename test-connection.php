<?php
/**
 * Connection Test Script
 * Tests the connection between frontend and backend
 */

echo "<h1>UET Mardan - Connection Test</h1>";

// Test 1: Database Connection
echo "<h2>1. Database Connection Test</h2>";
try {
    require_once __DIR__ . '/php-backend/config/db.php';
    $db = Database::getConnection();
    echo "✅ Database connection successful<br>";
    
    // Test if tables exist
    $tables = ['users', 'events', 'news', 'faculty', 'departments'];
    foreach ($tables as $table) {
        $stmt = $db->query("SHOW TABLES LIKE '$table'");
        if ($stmt->rowCount() > 0) {
            echo "✅ Table '$table' exists<br>";
        } else {
            echo "❌ Table '$table' missing<br>";
        }
    }
} catch (Exception $e) {
    echo "❌ Database connection failed: " . $e->getMessage() . "<br>";
}

// Test 2: API Endpoints (with auth where needed)
echo "<h2>2. API Endpoints Test</h2>";
$baseUrl = 'http://' . $_SERVER['HTTP_HOST'] . '/uet-php/php-backend/public/api/';

// First try to login to get a token
$loginUrl = $baseUrl . 'auth/login';
$loginData = json_encode(['email' => 'admin@uetmardan.edu.pk', 'password' => 'admin123']);
$loginCtx = stream_context_create(['http' => ['method' => 'POST', 'header' => 'Content-Type: application/json', 'content' => $loginData]]);
$loginResp = @file_get_contents($loginUrl, false, $loginCtx);
$token = null;
if ($loginResp !== false) {
    $loginJson = json_decode($loginResp, true);
    $wrapped = ($loginJson && isset($loginJson['data'])) ? $loginJson['data'] : $loginJson;
    if ($wrapped && isset($wrapped['token'])) {
        $token = $wrapped['token'];
        echo "✅ auth/login - Working (token obtained)<br>";
    } else {
        echo "❌ auth/login - Failed to get token<br>";
        echo "<small>Response: " . htmlspecialchars(substr($loginResp, 0, 300)) . "...</small><br>";
    }
} else {
    echo "❌ auth/login - Endpoint not accessible<br>";
}

$tests = [
    ['endpoint' => 'auth/me', 'method' => 'GET', 'auth' => true],
    ['endpoint' => 'admin/stats', 'method' => 'GET', 'auth' => true],
    ['endpoint' => 'departments', 'method' => 'GET', 'auth' => false],
    ['endpoint' => 'events', 'method' => 'GET', 'auth' => false],
    ['endpoint' => 'news', 'method' => 'GET', 'auth' => false],
    ['endpoint' => 'faculty', 'method' => 'GET', 'auth' => false],
];

foreach ($tests as $t) {
    $url = $baseUrl . $t['endpoint'];
    echo "<p>Testing: <code>$url</code></p>";
    $headers = ['Content-Type: application/json'];
    if ($t['auth'] && $token) { $headers[] = 'Authorization: Bearer ' . $token; }
    $ctx = stream_context_create(['http' => ['method' => $t['method'], 'header' => implode("\r\n", $headers)]]);
    $resp = @file_get_contents($url, false, $ctx);
    if ($resp !== false) {
        $json = json_decode($resp, true);
        if ($json) {
            echo "✅ {$t['endpoint']} - Working<br>";
        } else {
            echo "⚠️ {$t['endpoint']} - Response not JSON<br>";
            echo "<small>Response: " . htmlspecialchars(substr($resp, 0, 200)) . "...</small><br>";
        }
    } else {
        echo "❌ {$t['endpoint']} - Failed" . ($t['auth'] && !$token ? ' (no token)' : '') . "<br>";
        $err = error_get_last();
        if ($err) { echo "<small>Error: " . $err['message'] . "</small><br>"; }
    }
}

// Test 3: Admin Authentication
echo "<h2>3. Admin Authentication Test</h2>";
$loginUrl = $baseUrl . 'auth/login';
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
        echo "✅ Admin login successful<br>";
        echo "Token: " . substr($data['token'], 0, 20) . "...<br>";
    } else {
        echo "❌ Admin login failed<br>";
    }
} else {
    echo "❌ Admin login endpoint not accessible<br>";
}

// Test 4: File Upload Directory
echo "<h2>4. File Upload Test</h2>";
$uploadDir = __DIR__ . '/php-backend/public/uploads';
if (is_dir($uploadDir)) {
    echo "✅ Upload directory exists<br>";
    if (is_writable($uploadDir)) {
        echo "✅ Upload directory is writable<br>";
    } else {
        echo "❌ Upload directory not writable<br>";
    }
} else {
    echo "❌ Upload directory missing<br>";
}

// Test 5: Frontend Files
echo "<h2>5. Frontend Files Test</h2>";
$frontendFiles = [
    'index.html',
    'admin-dashboard.html',
    'script.js',
    'styles.css'
];

foreach ($frontendFiles as $file) {
    if (file_exists(__DIR__ . '/' . $file)) {
        echo "✅ $file exists<br>";
    } else {
        echo "❌ $file missing<br>";
    }
}

// Test 6: Configuration
echo "<h2>6. Configuration Test</h2>";
$configFile = __DIR__ . '/php-backend/config/config.php';
if (file_exists($configFile)) {
    echo "✅ Configuration file exists<br>";
    $config = include $configFile;
    if (isset($config['db'])) {
        echo "✅ Database configuration found<br>";
    } else {
        echo "❌ Database configuration missing<br>";
    }
} else {
    echo "❌ Configuration file missing<br>";
}

echo "<h2>Test Summary</h2>";
echo "<p>If you see mostly ✅ marks, your setup is working correctly!</p>";
echo "<p><strong>Next Steps:</strong></p>";
echo "<ul>";
echo "<li>Access admin panel: <a href='/uet-php/php-backend/public/admin.html' target='_blank'>Admin Login</a></li>";
echo "<li>View main website: <a href='/uet-php/index.html' target='_blank'>Homepage</a></li>";
echo "<li>Access admin dashboard: <a href='/uet-php/admin-dashboard.html' target='_blank'>Admin Dashboard</a></li>";
echo "<li>Debug API: <a href='/uet-php/debug-api.php' target='_blank'>API Debug</a></li>";
echo "<li>Test Database: <a href='/uet-php/test-db.php' target='_blank'>Database Test</a></li>";
echo "<li>Route Debug: <a href='/uet-php/php-backend/public/test-route.php' target='_blank'>Route Debug</a></li>";
echo "</ul>";

echo "<p><strong>Default Admin Credentials:</strong></p>";
echo "<ul>";
echo "<li>Email: admin@uetmardan.edu.pk</li>";
echo "<li>Password: admin123</li>";
echo "</ul>";
?>
