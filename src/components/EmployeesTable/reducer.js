import ACTIONS from "./actions";

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_IN_PROGRESS:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload
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
