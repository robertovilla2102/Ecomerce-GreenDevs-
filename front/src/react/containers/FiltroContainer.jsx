import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Filtro from "../components/Filtro";
import {
  fetchCategories,
  fetchCategory
} from "../../redux/action-creators/categories";
import { fetchProducts } from "../../redux/action-creators/productos";
import { connect } from "react-redux";

const FiltroContainers = ({
  fetchCategories,
  fetchCategory,
  categories,
  history,
  fetchProducts
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceErr, setPriceErr] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const onChange = e => {
    let val = e.target.value;
    if (!isNaN(val[0])) {
      switch (e.target.name) {
        case "minPrice": {
          setMinPrice(e.target.value);
        }
        case "maxPrice": {
          setMaxPrice(e.target.value);
        }
      }
      setPriceErr(false);
    } else {
      console.log("NO ES UN NUMERO");

      setPriceErr(true);
    }
  };

  const filterByCategories = (e, id) => {
    e.preventDefault();
    fetchCategory(id).then(() => history.push(`/products/categories/${id}`));
  };

  const filterByAlfabet = (e, order) => {
    e.preventDefault();
    fetchProducts({ alfabet: order }).then(() =>
      history.push(`/products/filter/price/${order}/1`)
    );
  };

  const filterByPrice = e => {
    e.preventDefault();
    let queries = {
      min: minPrice,
      max: maxPrice
    };
    fetchProducts(queries).then(() =>
      history.push(`/products/filter/alfabet/${minPrice}&${maxPrice}/1`)
    );
  };
  return (
    <Filtro
      priceErr={priceErr}
      onChange={onChange}
      filterByPrice={filterByPrice}
      categories={categories}
      filterByCategories={filterByCategories}
      filterByAlfabet={filterByAlfabet}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCategory: id => dispatch(fetchCategory(id)),
    fetchProducts: queries => dispatch(fetchProducts(queries))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FiltroContainers)
);
