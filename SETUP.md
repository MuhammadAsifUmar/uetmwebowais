# UET Mardan Website - Frontend & Backend Integration Setup

## Overview
This project consists of a modern university website with both frontend and backend components, connected through a comprehensive admin system.

## Project Structure
```
uet-php/
├── Frontend Files (HTML/CSS/JS)
│   ├── index.html (Main homepage)
│   ├── admin-dashboard.html (Admin interface)
│   ├── script.js (Main JavaScript)
│   └── styles.css (Main stylesheet)
├── PHP Backend
│   ├── php-backend/
│   │   ├── public/ (API endpoints)
│   │   ├── controllers/ (Business logic)
│   │   ├── config/ (Database config)
│   │   └── setup-database.php (Database setup)
└── Node.js Backend (Alternative)
    └── backend/ (Express.js server)
```

## Quick Setup Guide

### 1. Database Setup

#### Option A: Using XAMPP (Recommended)
1. Start XAMPP and ensure MySQL is running
2. Create a new database named `uet_mardan2`
3. Run the database setup script:
   ```bash
   cd php-backend
   php setup-database.php
   ```

#### Option B: Using Docker
```bash
docker run --name uet-mysql -e MYSQL_ROOT_PASSWORD=your_password -e MYSQL_DATABASE=uet_mardan2 -p 3306:3306 -d mysql:8.0
```

### 2. Backend Configuration

#### PHP Backend Setup
1. Update database configuration in `php-backend/config/config.php`:
   ```php
   'db' => [
       'host' => '127.0.0.1',
       'port' => '3306',
       'name' => 'uet_mardan2',
       'user' => 'root',
       'pass' => '', // Your MySQL password
   ]
   ```

2. Ensure PHP has required extensions:
   - PDO
   - PDO_MySQL
   - JSON
   - FileInfo

#### Node.js Backend Setup (Optional)
```bash
cd backend
npm install
npm start
```

### 3. Frontend Configuration

The frontend is already configured to connect to the PHP backend. The main configuration is in `admin-dashboard.html`:

```javascript
const API_CONFIG = {
    php: {
        base: '/uet-php/php-backend/public/api/',
        endpoints: {
            content: 'content',
            admin: 'admin',
            auth: 'auth',
            upload: 'upload'
        }
    }
};
```

### 4. Admin Access

#### Default Admin Credentials
- **Email**: admin@uetmardan.edu.pk
- **Password**: admin123

#### Access Admin Panel
1. Navigate to: `http://localhost/uet-php/php-backend/public/admin.html`
2. Login with the credentials above
3. You'll be redirected to the main admin dashboard

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user info

### Content Management
- `GET /api/content/get?key={key}` - Get content by key
- `POST /api/admin/content` - Save content (admin only)

### Data Management
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/events` - Get all events
- `GET /api/news` - Get all news
- `GET /api/faculty` - Get all faculty
- `GET /api/departments` - Get all departments

### File Upload
- `POST /api/upload/single` - Upload single file (admin only)

## Admin Dashboard Features

### 1. Dashboard Overview
- Real-time statistics
- Recent activities
- Quick actions

### 2. Content Management
- Edit page content (About, Library, Portal, etc.)
- JSON-based content editing
- Image upload support

### 3. Data Management
- Events management
- News management
- Faculty management
- Departments management

### 4. File Upload
- Image upload for content
- File management
- URL generation

### 5. Settings
- System configuration
- Feature toggles
- Maintenance mode

## Frontend Integration

### Dynamic Content Loading
The frontend automatically loads content from the admin-controlled API:

```javascript
// Example: Loading departments for homepage slider
fetch('/uet-php/php-backend/public/api/departments')
    .then(r => r.json())
    .then(json => {
        if (json.success && Array.isArray(json.data)) {
            // Update homepage slider with dynamic data
        }
    });
```

### Content Rendering
Pages like `about.html`, `library.html`, etc. can be controlled through the admin panel by editing their content keys.

## Security Features

### Authentication
- JWT-based token authentication
- Secure password hashing
- Token expiration (24 hours)

### Authorization
- Role-based access control
- Admin-only endpoints protection
- Input validation and sanitization

### CORS Configuration
- Configured for local development
- Can be customized for production

## Development Workflow

### 1. Content Updates
1. Login to admin panel
2. Navigate to Content Management
3. Select the page/content key
4. Edit JSON content
5. Save changes

### 2. Adding New Features
1. Create new API endpoints in `php-backend/public/index.php`
2. Add corresponding controller methods
3. Update admin dashboard if needed
4. Test functionality

### 3. Database Changes
1. Update `php-backend/schema.sql`
2. Run setup script again (it's safe to re-run)
3. Update controllers if needed

## Troubleshooting

### Common Issues

#### 1. Database Connection Error
- Check MySQL is running
- Verify database credentials in config
- Ensure database exists

#### 2. Admin Login Fails
- Check if admin user exists in database
- Verify password hash is correct
- Check PHP error logs

#### 3. API Endpoints Not Working
- Check file permissions
- Verify .htaccess configuration
- Check PHP error logs

#### 4. File Upload Issues
- Check upload directory permissions
- Verify file size limits
- Check PHP upload settings

### Debug Mode
Enable debug mode by setting environment variable:
```bash
export DEBUG=1
```

## Production Deployment

### 1. Security Checklist
- [ ] Change default admin password
- [ ] Update database credentials
- [ ] Configure HTTPS
- [ ] Set up proper CORS origins
- [ ] Enable error logging
- [ ] Configure file upload limits

### 2. Performance Optimization
- [ ] Enable PHP OPcache
- [ ] Configure MySQL optimization
- [ ] Set up CDN for static files
- [ ] Enable compression

### 3. Backup Strategy
- [ ] Database backup schedule
- [ ] File upload backup
- [ ] Configuration backup

## Support

For technical support or questions:
1. Check the troubleshooting section
2. Review PHP error logs
3. Verify database connectivity
4. Test API endpoints individually

## License

This project is developed for UET Mardan. All rights reserved.
