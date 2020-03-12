import { ADD_RATING, RECEIVE_RATINGS, RECEIVE_RATING } from "../constants";
import Axios from "axios";

const setRating = rating => ({
  type: ADD_RATING,
  rating
});

const receiveRatings = ratings => ({
  type: RECEIVE_RATINGS,
  ratings
});

const ratingGeneral = rating => ({
  type: RECEIVE_RATING,
  rating
});

export const fetchRatingById = id => dispatch => {
  Axios.get(`/api/rating/all-ratings/${id}`)
    .then(res => dispatch(ratingGeneral(res.data)))
    .catch(err => err);
};

export const fetchAllRatings = dispatch => {
  return Axios.get("/api/ratings/all-ratings")
    .then(res => {
      dispatch(receiveRatings(res.data));
      return res;
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
