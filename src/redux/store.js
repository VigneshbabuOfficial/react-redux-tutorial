import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./RootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store is called");

export default store;
