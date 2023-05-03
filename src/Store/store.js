import { applyMiddleware, compose, legacy_createStore } from "redux";
import { routerMiddleware } from "connected-react-router";

import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import combineReducer from "../components/Redux/reducer/CombineReducer";



export const history = createBrowserHistory();
const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default legacy_createStore(
    combineReducer(history),
  initialState,
  composedEnhancers
);