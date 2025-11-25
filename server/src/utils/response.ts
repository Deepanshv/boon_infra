const sendResponse = (res, statusCode, message, data) => {
  res.status(statusCode).json({
    success: statusCode < 400,
    message,
    data,
  });
};

const sendError = (res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { sendResponse, sendError };
