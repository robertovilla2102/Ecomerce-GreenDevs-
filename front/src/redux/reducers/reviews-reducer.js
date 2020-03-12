import { ADD_RATING, RECEIVE_RATINGS } from "../constants";

const initialize = {
  ratings: [],
  newRating: {}
};

export default (state = initialize, action) => {
  switch (action.type) {
    case RECEIVE_RATINGS: {
      return { ...state, ratings: action.ratings };
    }

    case ADD_RATING: {
      return { ...state, newRating: action.rating };
    }

    default:
      return state;
  }
};
