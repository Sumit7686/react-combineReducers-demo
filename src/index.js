import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import nameReducer from "./Reducers/NameReducer";
import wishReducer from "./Reducers/WishReducer";

const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  masterReducer,
  {name: "Sumit", wish: ["eat", "Cricket"]},
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
