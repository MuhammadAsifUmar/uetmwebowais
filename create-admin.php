<?php
/**
 * Create Admin User Script
 * Manually creates the admin user and sets up the database
 */

echo "<h1>UET Mardan - Create Admin User</h1>";

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
        echo "<p style='color: green;'>✅ Admin user already exists</p>";
        echo "<p>User ID: {$user['id']}</p>";
        echo "<p>Name: {$user['name']}</p>";
        echo "<p>Email: {$user['email']}</p>";
        echo "<p>Role: {$user['role']}</p>";
    } else {
        echo "<p>Creating admin user...</p>";
        
        // Create admin user
        $passwordHash = password_hash('admin123', PASSWORD_DEFAULT);
        $stmt = $db->prepare('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)');
        $stmt->execute(['System Administrator', 'admin@uetmardan.edu.pk', $passwordHash, 'admin']);
        
        echo "<p style='color: green;'>✅ Admin user created successfully</p>";
        echo "<p>Email: admin@uetmardan.edu.pk</p>";
        echo "<p>Password: admin123</p>";
    }
    
    // Insert sample data if tables are empty
    echo "<h2>Checking Sample Data</h2>";
    
    // Check departments
    $stmt = $db->query("SELECT COUNT(*) as count FROM departments");
    $deptCount = $stmt->fetch()['count'];
    echo "<p>Departments: $deptCount records</p>";
    
    if ($deptCount == 0) {
        echo "<p>Inserting sample departments...</p>";
        $departments = [
            ['slug' => 'civil-engineering', 'name' => 'Civil Engineering', 'description' => 'Building the infrastructure of tomorrow'],
            ['slug' => 'electrical-engineering', 'name' => 'Electrical Engineering', 'description' => 'Powering innovation and technology'],
            ['slug' => 'mechanical-engineering', 'name' => 'Mechanical Engineering', 'description' => 'Designing mechanical systems and solutions'],
            ['slug' => 'computer-science', 'name' => 'Computer Science', 'description' => 'Advancing computing and software development'],
            ['slug' => 'software-engineering', 'name' => 'Software Engineering', 'description' => 'Creating robust software solutions'],
            ['slug' => 'ai-engineering', 'name' => 'AI Engineering', 'description' => 'Pioneering artificial intelligence and machine learning'],
            ['slug' => 'telecommunications', 'name' => 'Telecommunications', 'description' => 'Connecting the world through communication technology']
        ];
        
        foreach ($departments as $dept) {
            $stmt = $db->prepare('INSERT INTO departments (slug, name, description, is_featured) VALUES (?, ?, ?, ?)');
            $stmt->execute([$dept['slug'], $dept['name'], $dept['description'], 1]);
        }
        echo "<p style='color: green;'>✅ Sample departments inserted</p>";
    }
    
    // Check events
    $stmt = $db->query("SELECT COUNT(*) as count FROM events");
    $eventCount = $stmt->fetch()['count'];
    echo "<p>Events: $eventCount records</p>";
    
    if ($eventCount == 0) {
        echo "<p>Inserting sample events...</p>";
        $events = [
            [
                'title' => 'Engineering Career Fair 2024',
                'description' => 'Meet top employers and explore career opportunities in engineering',
                'category' => 'Career',
                'date' => '2024-03-15',
                'time' => '10:00:00',
                'location' => 'Main Auditorium',
                'organizer' => 'Career Services',
                'is_featured' => 1
            ],
            [
                'title' => 'Technical Workshop: AI in Engineering',
                'description' => 'Hands-on workshop on implementing AI solutions in engineering projects',
                'category' => 'Workshop',
                'date' => '2024-03-20',
                'time' => '14:00:00',
                'location' => 'Computer Lab 3',
                'organizer' => 'AI Engineering Department',
                'is_featured' => 1
            ]
        ];
        
        foreach ($events as $event) {
            $stmt = $db->prepare('INSERT INTO events (title, description, category, date, time, location, organizer, is_featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
            $stmt->execute([$event['title'], $event['description'], $event['category'], $event['date'], $event['time'], $event['location'], $event['organizer'], $event['is_featured']]);
        }
        echo "<p style='color: green;'>✅ Sample events inserted</p>";
    }
    
    // Check news
    $stmt = $db->query("SELECT COUNT(*) as count FROM news");
    $newsCount = $stmt->fetch()['count'];
    echo "<p>News: $newsCount records</p>";
    
    if ($newsCount == 0) {
        echo "<p>Inserting sample news...</p>";
        $news = [
            [
                'title' => 'UET Mardan Ranks Top in Engineering Education',
                'excerpt' => 'Our university has been recognized for excellence in engineering education',
                'content' => 'UET Mardan has achieved remarkable success in the latest university rankings, securing top positions in engineering education. This recognition reflects our commitment to academic excellence and innovative teaching methods.',
                'category' => 'Achievement',
                'author' => 'University Communications',
                'date' => '2024-02-15',
                'is_featured' => 1
            ]
        ];
        
        foreach ($news as $item) {
            $stmt = $db->prepare('INSERT INTO news (title, excerpt, content, category, author, date, is_featured) VALUES (?, ?, ?, ?, ?, ?, ?)');
            $stmt->execute([$item['title'], $item['excerpt'], $item['content'], $item['category'], $item['author'], $item['date'], $item['is_featured']]);
        }
        echo "<p style='color: green;'>✅ Sample news inserted</p>";
    }
    
    // Check faculty
    $stmt = $db->query("SELECT COUNT(*) as count FROM faculty");
    $facultyCount = $stmt->fetch()['count'];
    echo "<p>Faculty: $facultyCount records</p>";
    
    if ($facultyCount == 0) {
        echo "<p>Inserting sample faculty...</p>";
        $faculty = [
            [
                'name' => 'Dr. Ahmed Khan',
                'designation' => 'Professor',
                'department' => 'Computer Science',
                'email' => 'ahmed.khan@uetmardan.edu.pk',
                'phone' => '+92-300-1234567',
                'bio' => 'Dr. Ahmed Khan is a distinguished professor with over 15 years of experience in computer science and software engineering.'
            ],
            [
                'name' => 'Dr. Fatima Ali',
                'designation' => 'Associate Professor',
                'department' => 'Electrical Engineering',
                'email' => 'fatima.ali@uetmardan.edu.pk',
                'phone' => '+92-300-2345678',
                'bio' => 'Dr. Fatima Ali specializes in power systems and renewable energy technologies.'
            ]
        ];
        
        foreach ($faculty as $member) {
            $stmt = $db->prepare('INSERT INTO faculty (name, designation, department, email, phone, bio) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->execute([$member['name'], $member['designation'], $member['department'], $member['email'], $member['phone'], $member['bio']]);
        }
        echo "<p style='color: green;'>✅ Sample faculty inserted</p>";
    }
    
    echo "<h2>Setup Complete!</h2>";
    echo "<p style='color: green;'>✅ Database is now properly configured with admin user and sample data.</p>";
    
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Error: " . $e->getMessage() . "</p>";
}

echo "<h2>Next Steps</h2>";
echo "<ul>";
echo "<li><a href='/uet-php/test-connection.php'>Run Connection Test</a></li>";
echo "<li><a href='/uet-php/php-backend/public/admin.html'>Go to Admin Login</a></li>";
echo "<li><a href='/uet-php/debug-api.php'>Debug API</a></li>";
echo "</ul>";
?>
