export const globalErrorHandler = (err, res) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  res.status(statusCode).json({
    status: status,
    message: err.message || 'Something went wrong!',
  });
};
