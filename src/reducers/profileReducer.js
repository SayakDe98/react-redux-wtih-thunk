import { GET_USER, LOGIN_USER, LOGOUT_USER  } from "../utils/constants"
export const initialState = {
    name: '',
    id: null,
    role: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER: 
        return {
            ...state,
        }
        case LOGIN_USER: 
        return {
            ...state,
            name: action.payload.name,
            id: action.payload.id,
            role: action.payload.role
        }
        case LOGOUT_USER:
            return initialState
        default:
            return state;
    }
}

export default profileReducer;