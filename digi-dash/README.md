# Digi-Dash - Unified Digital Dashboard

A comprehensive digital dashboard system with role-based authentication and separate applications for different user roles.

## 🏗️ Project Structure

```
digi-dash/
├── login/                          # Login & Authentication (Port 3000)
├── 5th_grade/                      # Student Dashboard (Port 5173)
├── ADMIN-DB/                       # Admin Dashboard (Port 5174)
├── schoolManagementFrontend/       # Teacher Dashboard (Port 5175)
├── Parent/                         # Parent Dashboard (Port 5176)
└── package.json                    # Root package for running all apps
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install all dependencies for all applications:**

```bash
npm run install:all
```

Or install manually for each application:

```bash
# Root dependencies
npm install

# Login app
cd login && npm install && cd ..

# Student app
cd 5th_grade && npm install && cd ..

# Admin app
cd ADMIN-DB && npm install && cd ..

# Teacher app
cd schoolManagementFrontend && npm install && cd ..

# Parent app
cd Parent && npm install && cd ..
```

### Running the Application

**Run all applications at once (Recommended):**

```bash
npm run dev
```

This will start all 5 applications concurrently:
- 🔐 Login: http://localhost:3000
- 👨‍🎓 Student: http://localhost:5173
- 👨‍💼 Admin: http://localhost:5174
- 👨‍🏫 Teacher: http://localhost:5175
- 👨‍👩‍👧 Parent: http://localhost:5176

**Run individual applications:**

```bash
# Login only
npm run dev:login

# Student only
npm run dev:student

# Admin only
npm run dev:admin

# Teacher only
npm run dev:teacher

# Parent only
npm run dev:parent
```

## 🔐 Authentication Flow

1. **Navigate to the login page:** http://localhost:3000
2. **Select your role:** Student, Teacher, Parent, or Admin
3. **Enter credentials and login**
4. **Automatic redirect:** You'll be redirected to the appropriate dashboard based on your role:
   - **Student** → http://localhost:5173 (5th_grade)
   - **Admin** → http://localhost:5174 (ADMIN-DB)
   - **Teacher** → http://localhost:5175 (schoolManagementFrontend)
   - **Parent** → http://localhost:5176 (Parent)

## 📋 Port Configuration

| Application | Port | Path |
|------------|------|------|
| Login | 3000 | `/login` |
| Student Dashboard | 5173 | `/5th_grade` |
| Admin Dashboard | 5174 | `/ADMIN-DB` |
| Teacher Dashboard | 5175 | `/schoolManagementFrontend` |
| Parent Dashboard | 5176 | `/Parent` |

## 🛠️ Technology Stack

- **Login App:** React (Create React App)
- **Student App:** React + Vite
- **Admin App:** React + Vite + TypeScript
- **Teacher App:** React + Vite
- **Parent App:** React + Vite

## 📝 Development Notes

- All applications run independently on different ports
- The login application handles authentication and redirects to the appropriate dashboard
- Each dashboard application is a separate React application with its own dependencies
- Use `concurrently` to run all applications simultaneously during development

## 🔧 Troubleshooting

**Port already in use:**
If you get a port conflict error, make sure no other applications are running on ports 3000, 5173, 5174, 5175, or 5176.

**Dependencies not installed:**
Run `npm run install:all` to install all dependencies for all applications.

**Application not redirecting:**
Make sure all applications are running. The redirect will only work if the target application is running on its designated port.

## 📦 Building for Production

To build all applications for production:

```bash
# Build login app
cd login && npm run build && cd ..

# Build student app
cd 5th_grade && npm run build && cd ..

# Build admin app
cd ADMIN-DB && npm run build && cd ..

# Build teacher app
cd schoolManagementFrontend && npm run build && cd ..

# Build parent app
cd Parent && npm run build && cd ..
```

## 🤝 Contributing

1. Make changes in the appropriate application directory
2. Test locally using `npm run dev`
3. Ensure all applications work together
4. Submit your changes

## 📄 License

This project is private and proprietary.
