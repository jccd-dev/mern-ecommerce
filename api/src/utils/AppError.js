/**
 * AppError extends the native JavaScript Error class to provide custom error handling
 * tailored to the application's needs. It adds additional properties such as a status code
 * and custom data to the standard error, allowing for more detailed error information to be
 * conveyed. This class also includes static methods for generating specific types of errors
 * commonly encountered in a web application context, such as validation, authentication,
 * and authorization errors.
 */
class AppError extends Error {
  /**
   * Constructs a new AppError instance with a message, status code, and additional data.
   *
   * @param {string} message - A human-readable description of the error.
   * @param {number} status - The HTTP status code that corresponds to the error.
   * @param {Object} [data={}] - Additional data providing more context about the error. This
   *                             could include details about validation errors or any other
   *                             relevant information.
   */
  constructor(message, status, data = {}) {
    super(message); // Initializes the base Error class with the provided message
    this.status = status; // HTTP status code appropriate for the error
    this.data = data; // Additional error details or context [details or errors]
  }

  /**
   * Creates a new AppError instance representing a validation error. This type of error
   * typically occurs when user input does not meet certain criteria defined by the
   * application or API.
   *
   * @param {Object} data - Detailed information about the validation errors.
   * @returns {AppError} An instance of AppError configured as a validation error.
   */
  static validationError(data) {
    return new AppError("Validation Error", 422, data);
  }

  /**
   * Creates a new AppError instance representing an authentication error. This error
   * indicates that a user's authentication attempt has failed due to invalid credentials
   * or other authentication-related issues.
   *
   * @param {Object} data - Additional information about the authentication failure.
   * @returns {AppError} An instance of AppError configured as an authentication error.
   */
  static authenticationError(data) {
    return new AppError("Authentication Error", 401, data);
  }

  /**
   * Creates a new AppError instance representing an authorization error. This error occurs
   * when an authenticated user attempts to perform an action they are not permitted to do.
   *
   * @param {Object} data - Additional information about the authorization failure.
   * @returns {AppError} An instance of AppError configured as an authorization error.
   */
  static authorizationError(data) {
    return new AppError("Authorization Error", 403, data);
  }

  //more addtional ..... if needed
}

export default AppError;
