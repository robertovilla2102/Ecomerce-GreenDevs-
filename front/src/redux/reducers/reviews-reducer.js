import { ADD_RATING, RECEIVE_RATINGS } from "../constants";

const initialize = {
  ratings: []
};

export default (state = initialize, action) => {
  switch (action.type) {
    case RECEIVE_RATINGS: {
      return { ...state, ratings: action.ratings };
    }
    default:
      return state;
  }
};
