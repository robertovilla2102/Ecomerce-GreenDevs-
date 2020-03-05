import { RECEIVE_ONE_PRODUCT, RECIVE_ALL_PRODUCTS } from "../constants";
import axios from "axios";

const receivedProducts = products => ({
  type: RECIVE_ALL_PRODUCTS,
  products
});

const receivedProduct = product => ({
  type: RECEIVE_ONE_PRODUCT,
  product
});

//busca todos los productos en localhost:3001
export const fetchProducts = () => dispatch => {
  axios
    .get("http://localhost:3001/api/products")
    .then(products => products.data)
    .then(productos => dispatch(receivedProducts(productos)))
    .catch(err => console.error(err));
};

//busca un producto por id en localhost:3001
export const fetchProduct = id => dispatch => {
  axios
    .get(`http://localhost:3001/api/products/${id}`)
    .then(product => product.data)
    .then(product => dispatch(receivedProduct(product)))
    .catch(err => console.error(err));
};

export const fetchProductsByName = name => dispatch => {
  axios
    .get(`http://localhost:3001/api/products/search/${name}`)
    .then(res => res.data)
    .then(products => dispatch(receivedProducts(products)))
    .catch(err => console.error(err));
};
