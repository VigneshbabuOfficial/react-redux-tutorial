import { createStore } from "redux";
import { rootReducer } from "./RootReducer";

const store = createStore(rootReducer);
console.log("store is called");

export default store;
