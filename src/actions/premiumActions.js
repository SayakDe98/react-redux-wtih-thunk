import { GET_USER_TYPE, NORMAL_USER, PREMIUM_USER } from "../utils/constants";

export const getUserType = () => ({ type: GET_USER_TYPE })
export const premiumUser = (premium) => ({ type: PREMIUM_USER, payload: premium })
export const normalUser = () => ({ type: NORMAL_USER })