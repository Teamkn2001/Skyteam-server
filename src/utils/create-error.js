const createError = (statusCode, message) => {
  // console.log(statusCode, message);
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
};

module.exports = createError;
