import {
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_ONE_CATEGORY,
  RECEIVE_CATEGOTY_POSTA
} from "../constants";
import Axios from "axios";

const setCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

const setCategory = category => ({
  type: RECEIVE_ONE_CATEGORY,
  category
});

const buscarUna = categoriaPosta => ({
  type: RECEIVE_CATEGOTY_POSTA,
  categoriaPosta
});

export const fetchCategories = () => dispatch => {
  return Axios.get(`http://localhost:3001/api/categories`).then(res => {
    dispatch(setCategories(res.data));
    return res;
  });
};

export const fetchCategory = id => dispatch => {
  return Axios.get(
    `http://localhost:3001/api/categories/find-products/${id}`
  ).then(res => {
    dispatch(setCategory(res.data));
    return res;
  });
};

export const deleteCategories = id => dispatch => {
  return Axios.delete(`http://localhost:3001/api/categories/delete/${id}`).then(
    res => {
      dispatch(setCategories(res.data));
    }
  );
};

export const addCategories = body => dispatch => {
  return Axios.post(`http://localhost:3001/api/categories/add`, { body }).then(
    res => {
      dispatch(setCategories(res.data));
    }
  );
};

export const updateCategory = (id, body) => dispatch => {
  return Axios.put(`http://localhost:3001/api/categories/update/${id}`, {
    body
  }).then(res => {
    dispatch(setCategories(res.data));
  });
};

export const fetchCategoryPosta = id => dispatch => {
  return Axios.get(`http://localhost:3001/api/categories/${id}`).then(res => {
    dispatch(buscarUna(res.data));
  });
};
