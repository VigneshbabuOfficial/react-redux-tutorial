import { createStore } from "redux";
import cakeReducer from "./cake/CakeReducer";

const store = createStore(cakeReducer);
console.log("sore is called");

export default store;
