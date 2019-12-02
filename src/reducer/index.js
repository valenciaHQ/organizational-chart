import { combineReducers } from "redux";
import levels from "./levels";
import tooltip from "./tooltip";
import employee from "./employee";

export default combineReducers({ levels, tooltip, employee });
