import { FETCH_REQUEST, FETCH_ERROR, GET_EMPLOYEE } from "../actions/employee";

const init = {
  loading: false,
  employee: {},
  error: false
};

const tooltip = (state = init, action) => {
  switch (action.type) {
    case FETCH_REQUEST: {
      return { ...state, loading: action.payload.loading };
    }
    case FETCH_ERROR: {
      return { ...state, loading: action.payload.error };
    }
    case GET_EMPLOYEE: {
      return { ...state, employee: action.payload.employee };
    }
    default:
      return init;
  }
};

export default tooltip;
