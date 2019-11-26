import ACTIONS from "./actions";

export default (state, action) => {
  console.log("ACTION: ", action);
  switch (action.type) {
    case ACTIONS.FETCH_IN_PROGRESS:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.MANAGER_DATA:
      return {
        ...state,
        manager: action.payload
      };
    case ACTIONS.EMPLOYEES_MANAGED_BY:
      return {
        ...state,
        employees: action.payload
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
