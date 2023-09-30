import  profileReducer  from "./profileReducer";
import  premiumReducer  from "./premiumReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ profile:profileReducer, premium: premiumReducer })
export default reducers;