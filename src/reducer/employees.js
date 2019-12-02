import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_ERROR,
  GET_EMPLOYEES_BY_ID
} from "../actions/employees";

const init = {
  loading: false,
  employees: [],
  error: false
};

const employees = (state = init, action) => {
  console.log("ACTION: ", action);
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST: {
      return { ...state, loading: action.payload.loading };
    }
    case FETCH_EMPLOYEES_ERROR: {
      return { ...state, loading: action.payload.error };
    }
    case GET_EMPLOYEES_BY_ID: {
      return { ...state, employees: action.payload.employees };
    }
    default:
      return init;
  }
};

export default employees;
