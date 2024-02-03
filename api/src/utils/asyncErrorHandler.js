/**
 * Wraps an asynchronous route handler or middleware function to automatically catch any
 * thrown errors and forward them to Express's next error handling middleware. This eliminates
 * the need for repetitive try-catch blocks in asynchronous Express routes and middleware.
 *
 * @param {Function} fn - The asynchronous route handler or middleware function to wrap.
 * This function should accept Express's `req`, `res`, and `next` parameters.
 *
 * @returns {Function} A new function that wraps the original asynchronous function `fn`.
 * This wrapper function is fully compatible with Express's middleware and route handler
 * signature, taking `req`, `res`, and `next` parameters. It ensures that any errors thrown
 * (either synchronously or asynchronously) within `fn` are caught and passed to Express's
 * error handling mechanism via the `next` function.
 *
 * @example
 * // Example of using asyncErrorHandler with an asynchronous route handler
 * router.get('/example-route', asyncErrorHandler(async (req, res, next) => {
 *   const data = await someAsyncOperation();
 *   res.json(data);
 * }));
 * or just wrap the controller in this function : asyncErrorHandler(controller)
 */
export const asyncErrorHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
