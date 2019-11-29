import { FETCH_REQUEST, FILL_LEVEL } from "../actions/levels";

const initLevel = {
  isLoading: true,
  error: null
};

const initialState = {
  data: new Map().set(0, initLevel)
};

const levels = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST: {
      const levels = state.data;
      levels.set(action.payload, {
        isLoading: true,
        error: null
      });
      return {
        ...state
      };
    }
    case FILL_LEVEL: {
      const newLevel = {
        level: action.payload.level,
        manager: action.payload.manager[0],
        employees: action.payload.employees
      };
      const levels = state.data;
      if (newLevel.level === 0) {
        levels.set(newLevel.level, {
          isLoading: false,
          isLastLevel: true,
          error: null,
          employees: newLevel.employees[0],
          manager: {}
        });
        return {
          ...state,
          isLoading: false
        };
      } else {
        const isLastLevel = newLevel.level === state.data.size - 1;
        levels.set(newLevel.level, {
          isLoading: false,
          error: null,
          employees: newLevel.employees,
          manager: newLevel.manager,
          isLastLevel
        });
        return {
          ...state,
          isLoading: false
        };
      }
    }
    default:
      return state;
  }
};

export default levels;
