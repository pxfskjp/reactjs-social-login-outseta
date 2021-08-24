import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import { firebaseReducer } from "react-redux-firebase";

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer
});

export default rootReducer;
