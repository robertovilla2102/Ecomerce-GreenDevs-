import { ADD_RATING, RECEIVE_RATINGS, RECEIVE_RATING } from "../constants";

const initialize = {
  ratings: [],
  newRating: {},
  ratingGeneral: null
};

export default (state = initialize, action) => {
  switch (action.type) {
    case RECEIVE_RATINGS: {
      return { ...state, ratings: action.ratings };
    }

    case ADD_RATING: {
      return { ...state, newRating: action.rating };
    }

    case RECEIVE_RATING: {
      return { ...state, ratingGeneral: action.rating };
    }

    default:
      return state;
  }
};
