import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import { composeWithDevTools } from "redux-devtools-extension";

import fbConfig from "../config/fbConfig";

const configureStore = initialState => {
  const middleware = compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(fbConfig)
  );

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );
};

const store = configureStore({});

export default store;
