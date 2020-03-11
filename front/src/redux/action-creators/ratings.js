import { ADD_RATING, RECEIVE_RATINGS } from "../constants";
import Axios from "axios";

const setRating = rating => ({
  type: ADD_RATING,
  rating
});

const receiveRatings = ratings => ({
  type: RECEIVE_RATINGS,
  ratings
});

export const fetchAllRatings = dispatch => {
  return Axios.get("/api/rating/ratings/all-ratings")
    .then(res => res.data)
    .then(ratings => {
      dispatch(receiveRatings(ratings));
      return ratings;
    })
    .catch(err => err);
};

export const addNewReview = review => {
  return Axios.post("/api/rating/add-rating", { review })
    .then(res => res.data)
    .catch(err => err);
};
