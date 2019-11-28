import { FETCH_REQUEST, ADD_LEVEL } from "../actions/levels";

const initialState = {
  isLoading: true,
  error: null,
  data: [{ level: 0, manager: {}, employees: [] }]
};

const levels = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADD_LEVEL: {
      const newLevel = {
        level: action.payload.level,
        manager: action.payload.manager[0],
        employees: action.payload.employees
      };
      const level0 = state.data[0];
      if (level0.employees.length === 0) {
        const newData = [newLevel];
        return {
          ...state,
          isLoading: false,
          data: newData
        };
      } else {
        const oldData = state.data;
        const data = [...oldData, newLevel];
        return {
          ...state,
          isLoading: false,
          data
        };
      }
    }
    default:
      return state;
  }
};

export default levels;
