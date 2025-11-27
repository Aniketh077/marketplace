# 🍃 MongoDB Installation Guide - Windows

Complete guide to install and run MongoDB on Windows for the Eco Marketplace project.

---

## ⚡ Quick Installation Steps

### Step 1: Download MongoDB

1. Go to MongoDB Download Center:
   ```
   https://www.mongodb.com/try/download/community
   ```

2. Select:
   - **Version**: Latest (7.0 or higher)
   - **Platform**: Windows
   - **Package**: MSI

3. Click **Download** button

---

### Step 2: Install MongoDB

1. **Run the downloaded `.msi` file**

2. **Installation Type**: Choose **Complete**

3. **Service Configuration**:
   - ✅ Check "Install MongoDB as a Service"
   - ✅ Check "Run service as Network Service user"
   - Data Directory: `C:\Program Files\MongoDB\Server\7.0\data\`
   - Log Directory: `C:\Program Files\MongoDB\Server\7.0\log\`

4. **MongoDB Compass**:
   - ✅ Check "Install MongoDB Compass" (GUI tool - optional but helpful)

5. Click **Install** and wait for completion

6. Click **Finish**

---

### Step 3: Add MongoDB to System PATH (Important!)

1. **Open System Environment Variables**:
   - Press `Win + X` → Select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"

2. **Edit PATH**:
   - Under "System variables", find and select "Path"
   - Click "Edit"
   - Click "New"
   - Add: `C:\Program Files\MongoDB\Server\7.0\bin`
   - Click "OK" on all windows

3. **Restart Command Prompt/PowerShell** (important!)

---

### Step 4: Verify Installation

Open **new** PowerShell/Command Prompt and run:

```bash
mongod --version
```

You should see:
```
db version v7.0.x
Build Info: {
    "version": "7.0.x",
    ...
}
```

---

### Step 5: Start MongoDB Service

#### **Method 1: As Windows Service (Recommended)**

MongoDB should start automatically after installation. To verify:

```bash
# Check if MongoDB service is running
sc query MongoDB

# Start MongoDB service (if stopped)
net start MongoDB

# Stop MongoDB service (if needed)
net stop MongoDB
```

#### **Method 2: Manual Start (Alternative)**

If service method doesn't work:

```bash
# Create data directory if it doesn't exist
mkdir C:\data\db

# Start MongoDB manually
mongod --dbpath="C:\data\db"
```

Keep this terminal open while using the application.

---

### Step 6: Test MongoDB Connection

Open **new** terminal and run:

```bash
mongosh
```

You should see:
```
Current Mongosh Log ID: ...
Connecting to: mongodb://127.0.0.1:27017/
Using MongoDB: 7.0.x
...
test>
```

Type `exit` to exit the MongoDB shell.

✅ **MongoDB is now installed and running!**

---

## 🚀 Start Your Eco Marketplace Server

Now that MongoDB is running, start your backend server:

### Step 1: Navigate to Server Directory

```bash
cd C:\Users\LENOVO\Desktop\ecodispose-app-final-production\eco-marketplace\ecomar4\project\project\server
```

### Step 2: Verify `.env` File Exists

Check that `.env` file exists with these settings:

```env
MONGODB_URI=mongodb://localhost:27017/eco-marketplace
JWT_SECRET=eco-marketplace-super-secret-jwt-key-change-in-production
ADMIN_EMAIL=admin@ecomarketplace.com
ADMIN_PASSWORD=Admin@123456
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:5000
```

If it doesn't exist, create it with the content above.

### Step 3: Install Dependencies (First Time Only)

```bash
npm install
```

### Step 4: Start the Server

```bash
npm run dev
```

You should see:
```
[nodemon] starting `node server.js`
MongoDB Connected
Admin user created successfully
Server is running on port 5000
```

✅ **Server is running!**

---

## 🎨 Start Frontend

Open **another** terminal:

```bash
cd C:\Users\LENOVO\Desktop\ecodispose-app-final-production\eco-marketplace\ecomar4\project\project\ecotrade

npm run dev
```

Open browser: `http://localhost:5173`

---

## 🛠️ MongoDB Compass (GUI Tool)

If you installed MongoDB Compass, you can visually manage your database:

1. **Open MongoDB Compass**
2. **Connection String**: `mongodb://localhost:27017`
3. Click **Connect**
4. You'll see your `eco-marketplace` database
5. Browse collections: `users`, `industries`, `materials`, `sellerrequests`, etc.

---

## 🔍 Troubleshooting

### ❌ Issue: "mongod: command not found"

**Solution:**
1. MongoDB not added to PATH
2. Follow Step 3 above to add to PATH
3. Restart terminal
4. Try again

### ❌ Issue: "MongoDB service failed to start"

**Solution 1 - Check if port is in use:**
```bash
netstat -ano | findstr :27017
```

If something is using port 27017, kill it:
```bash
taskkill /PID <PID_NUMBER> /F
```

**Solution 2 - Manual start:**
```bash
mkdir C:\data\db
mongod --dbpath="C:\data\db"
```

### ❌ Issue: Server shows "MongooseError: Operation `users.findOne()` buffering timed out"

**Solution:**
- MongoDB is not running
- Start MongoDB service: `net start MongoDB`
- Or start manually: `mongod --dbpath="C:\data\db"`

### ❌ Issue: "ECONNREFUSED 127.0.0.1:27017"

**Solution:**
- MongoDB service is not running
- Start it: `net start MongoDB`
- Check if running: `sc query MongoDB`

### ❌ Issue: Server won't start - "Admin credentials not found"

**Solution:**
- `.env` file is missing or incomplete
- Create/update `.env` file in server directory
- Must have `ADMIN_EMAIL` and `ADMIN_PASSWORD`

---

## 📋 Quick Command Reference

```bash
# Start MongoDB Service
net start MongoDB

# Stop MongoDB Service
net stop MongoDB

# Check MongoDB Status
sc query MongoDB

# Start MongoDB Shell
mongosh

# Check MongoDB Version
mongod --version

# View MongoDB Logs
Get-Content "C:\Program Files\MongoDB\Server\7.0\log\mongod.log" -Tail 50
```

---

## 🗄️ Database Structure

Once server is running, MongoDB will automatically create:

**Database**: `eco-marketplace`

**Collections**:
- `users` - User accounts (including admin)
- `industries` - Industry categories
- `materials` - PCR materials
- `buyerrequests` - Material purchase requests
- `sellerrequests` - Seller registration applications
- `contactmessages` - Contact form submissions

---

## 🔐 Default Admin Credentials

After server starts successfully, you can login at:

```
URL: http://localhost:5173/admin-login

Email: admin@ecomarketplace.com
Password: Admin@123456
```

---

## 📊 Verify Everything is Working

### Backend Health Check:
```bash
curl http://localhost:5000/api/materials
```

Should return JSON array of materials.

### Frontend Check:
- Open: `http://localhost:5173`
- You should see the homepage without errors
- No "ERR_CONNECTION_REFUSED" in console

### Admin Check:
- Go to: `http://localhost:5173/admin-login`
- Login with admin credentials
- Should redirect to admin dashboard

---

## 🔄 Daily Startup Routine

Every time you restart your computer or work on the project:

**Terminal 1 - Start MongoDB (if not auto-starting):**
```bash
net start MongoDB
# Or manual: mongod --dbpath="C:\data\db"
```

**Terminal 2 - Start Backend:**
```bash
cd C:\Users\LENOVO\Desktop\ecodispose-app-final-production\eco-marketplace\ecomar4\project\project\server
npm run dev
```

**Terminal 3 - Start Frontend:**
```bash
cd C:\Users\LENOVO\Desktop\ecodispose-app-final-production\eco-marketplace\ecomar4\project\project\ecotrade
npm run dev
```

---

## ✅ Success Checklist

- [ ] MongoDB downloaded and installed
- [ ] MongoDB added to PATH
- [ ] MongoDB service running (check with `sc query MongoDB`)
- [ ] Can run `mongod --version` successfully
- [ ] `.env` file exists in server directory
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] No "ERR_CONNECTION_REFUSED" errors in browser console
- [ ] Can login to admin panel

---

## 🆘 Still Having Issues?

If you're stuck:

1. **Check MongoDB is running:**
   ```bash
   mongosh
   ```
   Should connect without errors

2. **Check server logs** in terminal where you ran `npm run dev`

3. **Check browser console** (F12) for frontend errors

4. **Restart everything:**
   ```bash
   # Stop MongoDB
   net stop MongoDB

   # Start MongoDB
   net start MongoDB

   # Restart server (Ctrl+C then npm run dev)
   # Restart frontend (Ctrl+C then npm run dev)
   ```

---

## 🎉 You're All Set!

Once MongoDB is running and you see "MongoDB Connected" in your server logs, your Eco Marketplace application is fully operational with MongoDB as the database!

**Next Steps:**
1. Login to admin panel
2. Add industries
3. Add materials
4. Test seller request forms
5. View analytics

Happy coding! 🚀
