import { GET_USER_TYPE, NORMAL_USER, PREMIUM_USER } from "../utils/constants"

export const initialState = {
    premium: false
}

const premiumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_TYPE: 
        return {
            ...state
        }
      case PREMIUM_USER:
        return {
          ...state,
          premium: action.payload,
        };
        case NORMAL_USER: 
        return initialState
      default:
        return state;
    }

}

export default premiumReducer