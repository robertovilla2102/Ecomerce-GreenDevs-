import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../redux/action-creators/categories";
import Products from "../components/Products";
import FiltroContainer from "./FiltroContainer";

const CategoryContainer = ({ productos, fetchCategory, match }) => {
  useEffect(() => {
    fetchCategory(match.params.id || 1).then(res => console.log(res));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <FiltroContainer />
        </div>
        <div className="col-md-9">
          {productos.length > 0 ? <Products productList={productos} /> : null}
        </div>
      </div>
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
