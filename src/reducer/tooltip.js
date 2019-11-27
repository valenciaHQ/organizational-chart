import { HIDE } from "../actions/tooltip";

const tooltip = (init = true, action) => {
  switch (action.type) {
    case HIDE: {
      return false;
    }
    default:
      return init;
  }
};

export default tooltip;
