import { createStore } from "redux";
import myReducer from "../reduxEx/myReducer";

const store = createStore(myReducer);

export default store;