import { RECEIVE_ALL_CATEGORIES, RECEIVE_ONE_CATEGORY } from "../constants";
import Axios from "axios";

const setCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

const setCategory = category => ({
  type: RECEIVE_ONE_CATEGORY,
  category
});

export const fetchCategories = () => dispatch => {
  Axios.get(`http://localhost:3001/api/categories`).then(res =>
    dispatch(setCategories(res.data))
  );
};

export const fetchCategory = id => dispatch => {
  Axios.get(`http://localhost:3001/api/categories/${id}`).then(res =>
    dispatch(setCategory(res.data))
  );
};
