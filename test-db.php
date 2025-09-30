<?php
/**
 * Simple Database Test Script
 */

echo "<h1>UET Mardan - Database Test</h1>";

try {
    // Test database connection
    require_once __DIR__ . '/php-backend/config/db.php';
    $db = Database::getConnection();
    echo "<p style='color: green;'>✅ Database connection successful</p>";
    
    // Check if admin user exists
    $stmt = $db->prepare('SELECT id, name, email, role FROM users WHERE email = ?');
    $stmt->execute(['admin@uetmardan.edu.pk']);
    $user = $stmt->fetch();
    
    if ($user) {
        echo "<p style='color: green;'>✅ Admin user exists</p>";
        echo "<p>User ID: {$user['id']}</p>";
        echo "<p>Name: {$user['name']}</p>";
        echo "<p>Email: {$user['email']}</p>";
        echo "<p>Role: {$user['role']}</p>";
    } else {
        echo "<p style='color: red;'>❌ Admin user not found</p>";
        
        // Create admin user
        echo "<p>Creating admin user...</p>";
        $passwordHash = password_hash('admin123', PASSWORD_DEFAULT);
        $stmt = $db->prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)');
        $stmt->execute(['System Administrator', 'admin@uetmardan.edu.pk', $passwordHash, 'admin']);
        echo "<p style='color: green;'>✅ Admin user created successfully</p>";
    }
    
    // Check sample data
    $tables = ['departments', 'events', 'news', 'faculty'];
    foreach ($tables as $table) {
        $stmt = $db->query("SELECT COUNT(*) as count FROM $table");
        $count = $stmt->fetch()['count'];
        echo "<p>Table '$table': $count records</p>";
    }
    
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Database error: " . $e->getMessage() . "</p>";
}

echo "<h2>Test Complete</h2>";
echo "<p><a href='/uet-php/test-connection.php'>Back to Connection Test</a></p>";
?>
