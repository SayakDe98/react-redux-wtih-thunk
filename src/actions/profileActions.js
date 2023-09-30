import { GET_USER, LOGIN_USER, LOGOUT_USER } from "../utils/constants";

export const getProfile = () => ({ type: GET_USER });
export const loginUser = ({ id, name, role }) => ({ type: LOGIN_USER, payload: { id, name, role }})
export const logoutUser = () => ({ type: LOGOUT_USER });