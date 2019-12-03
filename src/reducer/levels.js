import { FETCH_REQUEST, INIT_LEVEL, GET_EMPLOYEES } from "../actions/levels";

const initLevel = {
  loadingManager: false,
  loadingEmployees: false,
  error: null
};

const initialState = {
  data: new Map().set(0, initLevel)
};

const levels = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST: {
      const levels = state.data;
      const oldLevel = levels.get(action.payload.level);
      levels.set(action.payload.level, {
        ...oldLevel,
        loadingManager: action.payload.loadingManager,
        loadingEmployees: action.payload.loadingEmployees,
        error: null
      });
      return {
        ...state
      };
    }
    case INIT_LEVEL: {
      const levels = state.data;
      if (action.payload.level === 0) {
        levels.set(action.payload.level, {
          loadingManager: false,
          loadingEmployees: false,
          error: null,
          employees: action.payload.employees[0],
          manager: {}
        });
        return {
          ...state,
          isLoading: false
        };
      } else {
        levels.set(action.payload.level, {
          loadingManager: false,
          loadingEmployees: false,
          error: null,
          manager: action.payload.manager
        });
        return {
          ...state,
          isLoading: false
        };
      }
    }
    case GET_EMPLOYEES: {
      const levels = state.data;
      const oldLevel = levels.get(action.payload.level);
      levels.set(action.payload.level, {
        ...oldLevel,
        loadingManager: false,
        loadingEmployees: false,
        error: null,
        employees: action.payload.employees
      });
      return {
        ...state,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default levels;
