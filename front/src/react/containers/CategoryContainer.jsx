import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../redux/action-creators/categories";
import Products from "../components/Products";

const CategoryContainer = ({ productos, fetchCategory, match }) => {
  console.log(match);

  useEffect(() => {
    fetchCategory(match.params.id);
  }, []);

  return (
    <div className="container">
      <Products productList={productos} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    productos: state.categories.selectedCategory
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategory: category => dispatch(fetchCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
