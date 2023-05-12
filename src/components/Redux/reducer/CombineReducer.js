import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import loginUserDetail from './UserDataReducer';





const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loginUserDetail
  });

export default rootReducer;