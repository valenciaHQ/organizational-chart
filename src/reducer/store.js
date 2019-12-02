import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./index";

const store = createStore(reducer, applyMiddleware(thunk));
console.log("STORE: ", store);
export default store;
