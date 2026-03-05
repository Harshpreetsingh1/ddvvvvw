import dotenv from 'dotenv';
import express from 'express';

// The path package provides utilities for working with file and directory paths. It helps to handle file paths in a way that is consistent across different operating systems (Windows, macOS, Linux). In this code, we use it to construct paths to the views and public directories, ensuring that our application can find these resources regardless of where it's run.
import path from 'path';

// What is this fileURLToPath stuff? It's for getting the current directory path in ES modules. We use fileURLToPath and path.dirname to achieve this.
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import employeeRoutes from './routes/employeeRoutes.js';

// ES Modules don't have __dirname and __filename like CommonJS. To get the current file's directory, we use fileURLToPath to convert the module URL to a file path, and then path.dirname to get the directory name. This allows us to construct paths to our views and public directories correctly.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Connect to MongoDB
connectDB();

// Set EJS as the templating engine and specify the views directory
// EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It allows you to embed JavaScript code within your HTML templates, making it easy to create dynamic web pages. In this code, we set EJS as the view engine, which means that when we render views, it will look for .ejs files in the specified views directory and use them to generate HTML responses.
app.set('view engine', 'ejs');
// Set the views directory to the "views" folder in the current directory. This is where our EJS templates will be located. By using path.join(__dirname, 'views'), we ensure that the path is constructed correctly regardless of the operating system.
app.set('views', path.join(__dirname, 'views'));

// Middleware

// The express.static middleware serves static files such as CSS, JavaScript, and images from the specified directory. In this case, we serve static files from the "public" directory. This allows us to include stylesheets and client-side scripts in our EJS templates by referencing them with relative paths. By using path.join(__dirname, 'public'), we ensure that the path to the public directory is constructed correctly on any operating system.
app.use(express.static(path.join(__dirname, 'public')));

// The express.urlencoded middleware is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. It parses URL-encoded data (from HTML forms) and makes it available as an object. The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex form data. The express.json middleware is used to parse incoming JSON payloads and also makes it available under req.body. This is essential for handling API requests that send JSON data.
// Layman language: These middlewares help us read data sent from forms (like when you submit a form to create or update a employee) and also handle JSON data if we were to build an API. They make it easy to access the data in our route handlers without having to manually parse it.
app.use(express.urlencoded({ extended: true }));

// This middleware allows us to handle JSON data sent in the body of requests. It's particularly useful if we were to build an API or if we want to send JSON data from the client side using JavaScript (e.g., with fetch or Axios). By using express.json(), we can easily access the JSON data in our route handlers through req.body.
app.use(express.json());

/**
 * METHOD OVERRIDE MIDDLEWARE
 * Allows HTML forms to use PUT and DELETE methods
 * Forms send POST with ?_method=PUT or ?_method=DELETE
 */
// This middleware checks if the incoming request has a query parameter named _method. If it does, it overrides the HTTP method of the request with the value of that parameter (converted to uppercase). This is a common technique to allow HTML forms, which only support GET and POST methods, to simulate PUT and DELETE requests. For example, when we want to update a employee, we can submit a form with method="POST" and include ?_method=PUT in the action URL. This middleware will then treat that request as a PUT request in our route handlers.
app.use((req, res, next) => {
  if (req.query._method) {
    req.method = req.query._method.toUpperCase();
  }
  next();
});

// Routes
// The app.get('/') route is the root route of our application. When a user visits the base URL (e.g., http://localhost:3000/), this route will be triggered. Instead of rendering a view directly, we redirect the user to the /employees route, which is where we display the list of employees. This keeps our root URL clean and directs users to the main functionality of our application right away.
app.get('/', (req, res) => {
  res.redirect('/employees');
});

// Employee routes
// We use app.use('/employees', employeeRoutes) to mount the employeeRoutes router on the /employees path. This means that any routes defined in employeeRoutes will be prefixed with /employees. For example, if we have a route defined as router.get('/', getAllEmployees) in employeeRoutes, it will be accessible at /employees/. This helps to organize our routes and keep related routes together in separate files.
app.use('/employees', employeeRoutes);

// 404 handler
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Employee Management System Started`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
