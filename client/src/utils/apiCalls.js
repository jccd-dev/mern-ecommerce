import { loginFailiure, loginStart, loginSuccess } from "../redux/userSlice";
import { publicRequest } from "./requestMethod";

/**
 * Asynchronously performs a user login operation.
 *
 * This function dispatches actions related to the login process, including the start of login,
 * successful login, and failure to login. It uses the `publicRequest` module to send a POST request
 * to the "auth/login" endpoint with the user's credentials. On successful login, the response data
 * is dispatched using the `loginSuccess` action. In case of an error during the login process,
 * the `loginFailiure` action is dispatched.
 *
 * @param {Function} dispatch - The dispatch function used to emit actions to the Redux store.
 * @param {Object} user - The user credentials object. This should contain properties necessary
 *                        for authentication, such as username and password.
 *
 * @returns {Promise<void>} A promise that resolves when the login operation is complete.
 *                          Does not return any value upon resolution.
 */
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    const errorMessage = error.response.data.errors;
    console.log(errorMessage);
    dispatch(loginFailiure(errorMessage));
  }
};
