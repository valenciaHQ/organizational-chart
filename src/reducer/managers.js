import { ADD_MANAGER } from "../actions/managers";

const managers = (managers = [0], action) => {
  switch (action.type) {
    case ADD_MANAGER: {
      const newManager = managers[managers.length - 1] + 1;
      return [...managers, newManager];
    }
    default:
      return managers;
  }
};

export default managers;
