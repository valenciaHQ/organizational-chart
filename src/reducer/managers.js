import { ADD_MANAGER } from "../actions/managers";

const managers = (managers = [0], action) => {
  console.log("ACTION: ", action);
  switch (action.type) {
    case ADD_MANAGER:
      return managers.push(action.payload);
    default:
      return managers;
  }
};

export default managers;
