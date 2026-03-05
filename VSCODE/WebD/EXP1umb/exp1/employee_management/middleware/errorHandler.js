// Error handling middleware
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] Status: ${status}, Message: ${message}`);

  res.status(status).render('error', {
    message: message,
    status: status,
    errors: process.env.NODE_ENV === 'development' ? [err] : []
  });
};

// Not Found middleware
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404).render('error', {
    message: 'Page Not Found',
    status: 404,
    errors: []
  });
};

export {
  errorHandler,
  notFound
};
