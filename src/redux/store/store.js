import RootReducer from "../reducer/index.js";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const inititialstate = { };
const store = createStore(
  RootReducer,
  inititialstate,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
   
  )
);

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;
