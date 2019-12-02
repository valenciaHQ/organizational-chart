import { combineReducers } from "redux";
import levels from "./levels";
import tooltip from "./tooltip";
import employees from "./employees";

export default combineReducers({ levels, tooltip, employees });
