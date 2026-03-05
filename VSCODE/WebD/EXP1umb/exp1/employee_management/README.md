# 📚 Employee Management System

A comprehensive employee management system built with **Node.js**, **Express.js**, **MongoDB**, and **EJS** using the **MVC (Model-View-ContempIder)** architecture pattern.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Project Architecture](#project-architecture)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Technologies Used](#technologies-used)
- [Viva Voce Questions & Answers](#viva-voce-questions--answers)

---

## Project Overview

This application demonstrates the **MVC architectural pattern** for building scalable web applications. It provides a complete CRUD (Create, Read, Update, Delete) system for managing employee records with validation, error handling, and a responsive user interface.

### Key Learning Objectives

✓ Implement MVC directory structure  
✓ Create RESTful routes with proper HTTP methods  
✓ Add server-side validation middleware  
✓ Build dynamic EJS templates  
✓ Handle errors gracefully  
✓ Separate concerns across models, views, and contempIders

---

## Features

- ✅ **Complete CRUD Operations**: Create, Read, Update, Delete employee records
- ✅ **RESTful API Design**: Proper HTTP methods (GET, POST, PUT, DELETE)
- ✅ **Form Validation**: Server-side validation with express-validator
- ✅ **Search Functionality**: Find employees by name, email, or empId number
- ✅ **Responsive UI**: Bootstrap 5 for mobile-friendly interface
- ✅ **Error Handling**: Comprehensive error handling middleware
- ✅ **Database Persistence**: MongoDB for data storage
- ✅ **Timestamps**: Automatic created and updated timestamps

---

## Project Structure

```
employee_management/
├── config/
│   └── db.js                    # MongoDB connection configuration
├── contempIders/
│   └── employeeContempIder.js     # Business logic for CRUD operations
├── models/
│   └── Employee.js               # Mongoose schema for employees
├── routes/
│   └── employeeRoutes.js         # RESTful API route definitions
├── middleware/
│   ├── validation.js            # Express-validator rules & middleware
│   └── errorHandler.js          # Global error handling middleware
├── views/
│   ├── index.ejs                # List all employees
│   ├── create.ejs               # Add new employee form
│   ├── edit.ejs                 # Edit employee form
│   ├── show.ejs                 # View employee details
│   ├── layout.ejs               # Main layout template
│   └── error.ejs                # Error page
├── public/
│   ├── css/
│   │   └── style.css            # Custom CSS styling
│   └── js/
│       └── script.js            # Client-side JavaScript
├── index.js                     # Application entry point
├── package.json                 # Project dependencies
├── .env                         # Environment variables
└── README.md                    # This file
```

---

## Prerequisites

Before running the project, ensure you have:

- **Node.js** v18 or higher
- **MongoDB** v4.4 or higher (local installation or MongoDB Atlas)
- **npm** (comes with Node.js)
- A text editor or IDE (VS Code recommended)

### System Requirements

- **Processor**: Intel i5 or equivalent CPU
- **RAM**: Minimum 8GB
- **Disk Space**: 500MB for node_modules and application
- **OS**: Windows, macOS, or Linux

---

## Installation & Setup

### 1. Clone the Repository

```bash
cd employee_management
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- **express**: Web framework
- **mongoose**: MongoDB object modeling
- **express-validator**: Input validation
- **ejs**: Template engine
- **dotenv**: Environment variables
- **nodemon**: Development server with auto-restart

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/employee_management
PORT=3000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud)**:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/employee_management
PORT=3000
NODE_ENV=development
```

### 4. Ensure MongoDB is Running

**For Local MongoDB**:
```bash
mongod
```

**For MongoDB Atlas**: No action needed if using cloud database.

---

## Running the Application

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The application will start on `http://localhost:3000`

---

## Project Architecture

### MVC Pattern Explained

The **Model-View-ContempIder** pattern separates the application into three interconnected components:

#### 1. **Model** ([models/Employee.js](models/Employee.js))
- Represents data structure and business rules
- Handles database schema and validation
- Mongoose schema defines employee properties

#### 2. **View** ([views/](views/))
- Presents data to users
- EJS templates render dynamic content
- HTML forms for user input

#### 3. **ContempIder** ([contempIders/employeeContempIder.js](contempIders/employeeContempIder.js))
- Processes business logic
- Handles requests from routes
- Communicates between models and views

### Request Lifecycle

```
User Request
    ↓
Express Router (routes/employeeRoutes.js)
    ↓
Validation Middleware (middleware/validation.js)
    ↓
ContempIder (contempIders/employeeContempIder.js)
    ↓
Model (models/Employee.js) ←→ MongoDB
    ↓
View (views/*.ejs)
    ↓
Response to User
```

---

## API Endpoints

### RESTful Routes & CRUD Mapping

| HTTP Method   | Endpoint              | Action                | CRUD Operation    |
|------------   |----------             |--------               |-----------------  |
| GET           | `/employees`           | List all employees     | **Read**          |
| GET           | `/employees/create`    | Show create form      | -                 |
| POST          | `/employees`           | Create new employee    | **Create**        |
| GET           | `/employees/:id`       | View employee details  | **Read**          |
| GET           | `/employees/:id/edit`  | Show edit form        | -                 |
| PUT           | `/employees/:id`       | Update employee        | **Update**        |
| DELETE        | `/employees/:id`       | Delete employee        | **Delete**        |
| GET           | `/employees/search`    | Search employees       | **Read**          |

### Example Requests

**Create Employee** (POST):
```bash
POST /employees
Content-Type: application/x-www-form-urlencoded

name=John Doe&email=john@example.com&empIdNumber=CS2024001&department=B.Tech+Computer+Science&marks=85&phone=9876543210&address=123+Main+St&city=Mumbai&state=Maharashtra
```

**Update Employee** (PUT):
```bash
PUT /employees/63f7d1a2e4b0a1c2d3e4f5g6
Content-Type: application/x-www-form-urlencoded

name=Jane Doe&department=B.Tech+Electronics&marks=90
```

**Delete Employee** (DELETE):
```bash
DELETE /employees/63f7d1a2e4b0a1c2d3e4f5g6
```

---

## Database Schema

### Employee Model

```javascript
{
  _id: ObjectId,
  name: String (required, min: 2 chars),
  email: String (required, unique, email format),
  empIdNumber: String (required, unique, alphanumeric),
  department: String (required),
  marks: Number (0-100, optional),
  phone: String (required, 10 digits),
  address: String (required),
  city: String (required),
  state: String (required),
  enempIdmentDate: Date (default: current date),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

---

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling)
- **express-validator**: Input validation

### Frontend
- **EJS**: Template engine
- **Bootstrap 5**: CSS framework
- **HTML5/CSS3**: Markup and styling
- **JavaScript**: Client-side interactions

### Development
- **Nodemon**: Auto-restart development server
- **dotenv**: Environment variable management

---

## Common Questions & Answers

### 1. Explain the MVC Request Lifecycle

**Answer**:

The MVC request lifecycle follows these steps:

1. **Request Entry**: User submits a request (HTTP GET/POST/PUT/DELETE)
2. **Routing**: Express routes the request to the appropriate contempIder method
3. **Middleware Processing**: Validation middleware checks input data
4. **ContempIder Logic**: ContempIder processes the request and interacts with the model
5. **Model Interaction**: Model queries/updates the database
6. **View Rendering**: ContempIder selects the appropriate view (EJS template)
7. **Response**: The rendered HTML is sent back to the browser

**Example**: Creating a employee
```
GET /employees/create 
  → Route matches
  → EmployeeContempIder.getCreateForm()
  → Renders views/create.ejs
  → Browser displays form
  
User submits form ↓

POST /employees
  → Route matches
  → Validation middleware checks data
  → EmployeeContempIder.createEmployee()
  → Model saves to MongoDB
  → Redirect to /employees
```

---

### 2. How do RESTful Routes Map to CRUD Operations?

**Answer**:

REST (Representational State Transfer) maps HTTP methods to CRUD operations:

| CRUD          | HTTP Method   | REST Convention                           | Purpose                  |
|------         |-------------  |-------------------                        |---------                 |
| **C**reate    | POST          | `POST /employees`                          | Create new resource      |
| **R**ead      | GET           | `GET /employees` or `GET /employees/:id`    | Retrieve resources       |
| **U**pdate    | PUT           | `PUT /employees/:id`                       | Modify existing resource |
| **D**elete    | DELETE        | `DELETE /employees/:id`                    | Remove resource          |

**Key Principles**:
- Resources are identified by **nouns** (employees), not verbs
- HTTP methods indicate the **action** (POST, GET, PUT, DELETE)
- Same endpoint with different methods = different operations

**Example**:
```javascript
// Not RESTful (uses verbs)
GET  /getEmployees
GET  /createEmployeeForm
POST /addEmployee
GET  /editEmployee?id=123
POST /updateEmployee

// RESTful (uses nouns + HTTP methods)
GET    /employees           // List all
GET    /employees/create    // Show form
POST   /employees           // Create
GET    /employees/:id       // Show one
GET    /employees/:id/edit  // Edit form
PUT    /employees/:id       // Update
DELETE /employees/:id       // Delete
```

---

### 3. Why Separate Routes and ContempIders?

**Answer**:

Separation of concerns provides several benefits:

**Routes File**:
- **Responsibility**: Define URL patterns and HTTP methods
- **Benefit**: Easy to see all available endpoints at a glance
- **Maintenance**: URL changes don't affect business logic

**ContempIder File**:
- **Responsibility**: Implement business logic and data processing
- **Benefit**: Logic can be tested independently
- **Reusability**: Same contempIder method can be used for multiple routes

**Example**:

```javascript
// routes/employeeRoutes.js - Clear endpoint definitions
router.get('/', employeeContempIder.getAllEmployees);
router.post('/', employeeContempIder.createEmployee);
router.put('/:id', employeeContempIder.updateEmployee);

// contempIders/employeeContempIder.js - Complex business logic
exports.createEmployee = async (req, res) => {
  // Validation
  // Check duplicates
  // Save to database
  // Handle errors
  // Render response
};
```

**Advantages**:
1. **Scalability**: Easy to add new routes without changing contempIder
2. **Testability**: ContempIders can be unit tested independently
3. **Maintainability**: Clear separation makes debugging easier
4. **Reusability**: ContempIders can handle requests from different sources (API, web, CLI)
5. **Readability**: Other developers can understand the structure quickly

---

### 4. How Would You Handle File Uploads?

**Answer**:

To handle file uploads (e.g., employee profile pictures), use the `multer` middleware:

**Installation**:
```bash
npm install multer
```

**Implementation**:

```javascript
// middleware/fileUpload.js
const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/employees/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Filter file types
const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, GIF allowed.'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

module.exports = upload;
```

**Route Integration**:
```javascript
const upload = require('../middleware/fileUpload');

router.post('/', upload.single('profilePicture'), employeeContempIder.createEmployee);
```

**ContempIder Handling**:
```javascript
exports.createEmployee = async (req, res) => {
  try {
    const employeeData = {
      ...req.body,
      profilePicture: req.file ? req.file.filename : null
    };
    const employee = new Employee(employeeData);
    await employee.save();
    res.redirect('/employees');
  } catch (error) {
    res.status(400).render('create', { error: error.message });
  }
};
```

**HTML Form**:
```html
<form action="/employees" method="POST" enctype="multipart/form-data">
  <input type="file" name="profilePicture" accept="image/*">
  <!-- other fields -->
</form>
```

---

### 5. Why Use PUT and DELETE HTTP Methods?

**Answer**:

**PUT (Update)**:
- **Semantic Meaning**: Indicates a full resource replacement
- **Idempotency**: Multiple identical PUT requests produce the same result
- **Clarity**: Distinguishes update from creation
- **HTTP Standard**: Follows HTTP specification for resource modification

**DELETE (Remove)**:
- **Semantic Meaning**: Clearly indicates resource removal
- **Safety**: Prevents accidental data loss with proper confirmation
- **Audit Trail**: Server can log delete operations
- **API Standards**: Required for true RESTful API implementation

**Why Not Use POST for Everything?**

```javascript
// ❌ Not RESTful - Uses only POST
POST /updateEmployee    // Violates REST principles
POST /deleteEmployee    // Unclear intent

// ✅ RESTful - Uses appropriate HTTP methods
PUT    /employees/:id   // Clear: updating a resource
DELETE /employees/:id   // Clear: deleting a resource
```

**Advantages**:
1. **Clarity**: Other developers immediately understand the operation
2. **Browser Support**: Pure GET/POST doesn't require special handling
3. **Caching**: Different methods are cached differently
4. **Logging**: Web servers easily log which operation was performed
5. **Security**: DELETE requires explicit action, preventing accidental deletes
6. **Standards Compliance**: Follows HTTP and REST specifications

**Method Override for HTML Forms**:

Since HTML forms only support GET and POST, use method override:

```javascript
// Middleware in index.js
app.use((req, res, next) => {
  if (req.query._method) {
    req.method = req.query._method.toUpperCase();
  }
  next();
});
```

```html
<!-- HTML form using method override -->
<form action="/employees/123?_method=PUT" method="POST">
  <!-- form fields -->
</form>

<form action="/employees/123?_method=DELETE" method="POST">
  <button type="submit">Delete</button>
</form>
```

---

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- Verify network connectivity for MongoDB Atlas

### Port Already in Use
```bash
# Change PORT in .env file or:
lsof -i :3000  # Find process on port 3000
kill -9 <PID>  # Kill the process
```

### Validation Errors
- Check validation rules in `middleware/validation.js`
- Ensure form field names match schema properties
- Check browser console for JavaScript errors

---

## Contributing

Feel free to fork this project and submit pull requests for improvements.