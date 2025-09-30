<?php
/**
 * Simple API Test Script
 * Tests the API endpoints directly
 */

echo "<h1>UET Mardan - API Test</h1>";

// Test API endpoints
$baseUrl = 'http://localhost/uet-php/php-backend/public/api/';
$endpoints = [
    'departments' => 'GET',
    'events' => 'GET',
    'news' => 'GET',
    'faculty' => 'GET',
    'admin/stats' => 'GET'
];

echo "<h2>Testing API Endpoints</h2>";

foreach ($endpoints as $endpoint => $method) {
    $url = $baseUrl . $endpoint;
    echo "<h3>Testing: $endpoint</h3>";
    echo "<p>URL: <code>$url</code></p>";
    
    $context = stream_context_create([
        'http' => [
            'method' => $method,
            'header' => 'Content-Type: application/json'
        ]
    ]);
    
    $response = @file_get_contents($url, false, $context);
    if ($response !== false) {
        $data = json_decode($response, true);
        if ($data) {
            echo "<p style='color: green;'>✅ Success!</p>";
            echo "<pre>" . json_encode($data, JSON_PRETTY_PRINT) . "</pre>";
        } else {
            echo "<p style='color: orange;'>⚠️ Response not JSON</p>";
            echo "<pre>$response</pre>";
        }
    } else {
        echo "<p style='color: red;'>❌ Failed to connect</p>";
    }
    echo "<hr>";
}

// Test admin login
echo "<h2>Testing Admin Login</h2>";
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
        echo "<p style='color: green;'>✅ Admin login successful!</p>";
        echo "<p>Token: " . substr($data['token'], 0, 20) . "...</p>";
        
        // Test authenticated endpoint
        $token = $data['token'];
        $authUrl = $baseUrl . 'auth/me';
        $authContext = stream_context_create([
            'http' => [
                'method' => 'GET',
                'header' => "Authorization: Bearer $token\r\nContent-Type: application/json"
            ]
        ]);
        
        $authResponse = @file_get_contents($authUrl, false, $authContext);
        if ($authResponse !== false) {
            $authData = json_decode($authResponse, true);
            if ($authData) {
                echo "<p style='color: green;'>✅ Authentication test successful!</p>";
                echo "<pre>" . json_encode($authData, JSON_PRETTY_PRINT) . "</pre>";
            }
        }
    } else {
        echo "<p style='color: red;'>❌ Admin login failed</p>";
        echo "<pre>$response</pre>";
    }
} else {
    echo "<p style='color: red;'>❌ Admin login endpoint not accessible</p>";
}

echo "<h2>Test Complete</h2>";
echo "<p><a href='/uet-php/php-backend/public/admin.html'>Go to Admin Login</a></p>";
echo "<p><a href='/uet-php/index.html'>Go to Main Website</a></p>";
?>
