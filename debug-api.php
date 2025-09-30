<?php
/**
 * Debug API Script
 * Tests API endpoints with detailed error reporting
 */

echo "<h1>UET Mardan - API Debug</h1>";

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Test API endpoints with detailed debugging
$baseUrl = 'http://localhost/uet-php/php-backend/public/api/';
$endpoints = [
    'auth/login' => ['method' => 'POST', 'data' => ['email' => 'admin@uetmardan.edu.pk', 'password' => 'admin123']],
    'auth/me' => ['method' => 'GET', 'data' => null],
    'admin/stats' => ['method' => 'GET', 'data' => null],
    'departments' => ['method' => 'GET', 'data' => null]
];

foreach ($endpoints as $endpoint => $config) {
    echo "<h3>Testing: $endpoint</h3>";
    echo "<p>URL: <code>$baseUrl$endpoint</code></p>";
    echo "<p>Method: <code>{$config['method']}</code></p>";
    
    $url = $baseUrl . $endpoint;
    $context = stream_context_create([
        'http' => [
            'method' => $config['method'],
            'header' => 'Content-Type: application/json',
            'content' => $config['data'] ? json_encode($config['data']) : null
        ]
    ]);
    
    $response = @file_get_contents($url, false, $context);
    
    if ($response === false) {
        echo "<p style='color: red;'>❌ Failed to connect</p>";
        $error = error_get_last();
        if ($error) {
            echo "<p>Error: " . $error['message'] . "</p>";
        }
    } else {
        echo "<p style='color: green;'>✅ Response received</p>";
        echo "<p>Response length: " . strlen($response) . " characters</p>";
        
        $data = json_decode($response, true);
        if ($data) {
            echo "<p style='color: green;'>✅ Valid JSON response</p>";
            echo "<pre>" . json_encode($data, JSON_PRETTY_PRINT) . "</pre>";
        } else {
            echo "<p style='color: orange;'>⚠️ Response not JSON</p>";
            echo "<pre>" . htmlspecialchars($response) . "</pre>";
        }
    }
    echo "<hr>";
}

// Test direct file access
echo "<h2>Testing Direct File Access</h2>";
$files = [
    'php-backend/public/index.php',
    'php-backend/controllers/AuthController.php',
    'php-backend/controllers/AdminController.php'
];

foreach ($files as $file) {
    if (file_exists($file)) {
        echo "<p style='color: green;'>✅ $file exists</p>";
    } else {
        echo "<p style='color: red;'>❌ $file missing</p>";
    }
}

// Test database connection
echo "<h2>Testing Database Connection</h2>";
try {
    require_once __DIR__ . '/php-backend/config/db.php';
    $db = Database::getConnection();
    echo "<p style='color: green;'>✅ Database connection successful</p>";
    
    // Test admin user
    $stmt = $db->prepare('SELECT id, name, email FROM users WHERE email = ?');
    $stmt->execute(['admin@uetmardan.edu.pk']);
    $user = $stmt->fetch();
    
    if ($user) {
        echo "<p style='color: green;'>✅ Admin user found: {$user['name']}</p>";
    } else {
        echo "<p style='color: red;'>❌ Admin user not found</p>";
    }
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Database error: " . $e->getMessage() . "</p>";
}

echo "<h2>Debug Complete</h2>";
echo "<p><a href='/uet-php/test-connection.php'>Back to Connection Test</a></p>";
?>
