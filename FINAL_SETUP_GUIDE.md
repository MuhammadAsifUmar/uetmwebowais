# UET Mardan - Final Setup Guide

## Current Status ✅

Based on your test results, the system is mostly working:

- ✅ **Database Connection**: Working perfectly
- ✅ **Database Tables**: All tables exist and are properly structured
- ✅ **Public API Endpoints**: Working (departments, events, news, faculty)
- ✅ **File Upload Directory**: Properly configured
- ✅ **Frontend Files**: All present and accessible
- ✅ **Configuration**: Properly set up

## Issues to Resolve ❌

The following endpoints are failing:
- ❌ `auth/me` - Admin authentication endpoint
- ❌ `admin/stats` - Admin statistics endpoint  
- ❌ `auth/login` - Admin login endpoint

## Step-by-Step Resolution

### Step 1: Create Admin User and Sample Data

1. **Visit the admin creation script:**
   ```
   http://localhost/uet-php/create-admin.php
   ```

2. **This will:**
   - Create the admin user if it doesn't exist
   - Insert sample data for departments, events, news, and faculty
   - Verify database connectivity

### Step 2: Debug API Issues

1. **Run the API debug script:**
   ```
   http://localhost/uet-php/debug-api.php
   ```

2. **This will:**
   - Test all API endpoints with detailed error reporting
   - Show exactly what's failing and why
   - Provide response details for troubleshooting

### Step 3: Test Route Matching

1. **Check route debugging:**
   ```
   http://localhost/uet-php/php-backend/public/test-route.php
   ```

2. **This will:**
   - Show how routes are being matched
   - Display request information
   - Help identify routing issues

### Step 4: Verify Database Setup

1. **Run database test:**
   ```
   http://localhost/uet-php/test-db.php
   ```

2. **This will:**
   - Verify admin user exists
   - Check sample data
   - Confirm database connectivity

## Expected Results After Fixes

After running these scripts, you should see:

- ✅ All API endpoints working
- ✅ Admin authentication successful
- ✅ Admin login working
- ✅ Proper redirects after login
- ✅ Admin dashboard accessible

## Admin Access Information

**Login URL:** `http://localhost/uet-php/php-backend/public/admin.html`

**Credentials:**
- **Email:** admin@uetmardan.edu.pk
- **Password:** admin123

## Testing Checklist

Run these tests in order:

1. **Database Setup:** `http://localhost/uet-php/create-admin.php`
2. **API Debug:** `http://localhost/uet-php/debug-api.php`
3. **Route Debug:** `http://localhost/uet-php/php-backend/public/test-route.php`
4. **Connection Test:** `http://localhost/uet-php/test-connection.php`
5. **Admin Login:** `http://localhost/uet-php/php-backend/public/admin.html`

## Troubleshooting Common Issues

### If API endpoints still fail:

1. **Check XAMPP:**
   - Ensure Apache is running
   - Ensure MySQL is running
   - Check Apache error logs

2. **Check File Permissions:**
   - Ensure PHP files are readable
   - Check upload directory permissions

3. **Check Database:**
   - Verify database exists: `uet_mardan2`
   - Check user permissions
   - Verify tables exist

### If admin login fails:

1. **Verify admin user exists:**
   - Run `create-admin.php` script
   - Check database directly

2. **Check password:**
   - Default password: `admin123`
   - Password is hashed in database

3. **Check API connectivity:**
   - Run debug scripts
   - Check browser console for errors

## Final Verification

Once all scripts run successfully:

1. **Admin Login:** Should redirect to dashboard
2. **Admin Dashboard:** Should show statistics and data
3. **Content Management:** Should allow editing content
4. **File Upload:** Should work for images
5. **Frontend Integration:** Should load dynamic content

## Support Files Created

- `create-admin.php` - Creates admin user and sample data
- `debug-api.php` - Detailed API debugging
- `test-db.php` - Database connectivity test
- `test-route.php` - Route matching debug
- `test-connection.php` - Comprehensive connection test
- `test-api.php` - Simple API testing

## Next Steps After Setup

1. **Test admin functionality**
2. **Add real content through admin panel**
3. **Customize website content**
4. **Test file uploads**
5. **Verify frontend-backend integration**

## Production Considerations

Before going live:

1. **Change default admin password**
2. **Configure proper CORS settings**
3. **Set up HTTPS**
4. **Configure proper file upload limits**
5. **Set up database backups**
6. **Configure error logging**

---

**Note:** All paths have been corrected to include the `/uet-php/` project directory. The system should now work correctly with your XAMPP setup.
