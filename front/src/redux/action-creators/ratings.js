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
    .then(res => {
      dispatch(receiveRatings(res.data));
      return ratings;
    })
    .catch(err => err);
};

export const fetchValoracion = id => dispatch => {
  return Axios.get(`/http://localhost:3001/api/rating/valoracion/${id}`).then(
    res => {
      dispatch(setRating(res.data));
      return res;
    }
  );
};

export const addNewReview = (review, id) => dispatch => {
  return Axios.post(`http://localhost:3001/api/rating/add-rating/${id}`, {
    review
  })
    .then(res => {
      dispatch(setRating(res.data));
      return res;
    })
    .catch(err => err);
};
