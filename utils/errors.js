class ExpressError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message) {
    super(message || "Bad request", 400);
  }
}
class NotFoundError extends ExpressError {
  constructor(message) {
    super(message || "Not found", 404);
  }
}
module.exports = {ExpressError,BadRequestError, NotFoundError}