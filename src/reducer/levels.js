import { ADD_LEVEL } from "../actions/levels";

const initialState = {
  isLoading: false,
  error: null,
  data: [{ level: 0, manager: {}, employees: [] }]
};

const levels = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_LEVEL: {
      const newLevel = {
        level: action.payload.level,
        manager: action.payload.manager,
        employees: action.payload.employees
      };
      if (state.data.length === 1) {
        const newData = [newLevel];
        return {
          ...state,
          data: newData
        };
      } else {
        const newData = [...state.data, newData];
        return {
          ...state,
          data: newData
        };
      }
    }
    default:
      return state;
  }
};

export default levels;
