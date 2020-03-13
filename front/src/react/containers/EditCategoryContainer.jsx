import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  updateCategory,
  fetchCategoryPosta
} from "../../redux/action-creators/categories";

import UpdateCategory from "../components/UpdateCategory";

const EditCategoryContainer = ({
  history,
  match,
  fetchCategoryPosta,
  updateCategory,
  categoria
}) => {
  useEffect(() => {
    fetchCategoryPosta(match.params.id);
  }, []);

  const handleUpdate = e => {
    e.preventDefault();

    const name = e.target[0].value;
    const imgCategory = e.target[1].value;

    updateCategory(match.params.id, { name, imgCategory }).then(algo => {
      history.push("/admin/listCategories");
    });
  };

  return <UpdateCategory handleUpdate={handleUpdate} categoria={categoria} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    categoria: state.categories.categoria
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCategory: (id, body) => dispatch(updateCategory(id, body)),
    fetchCategoryPosta: id => dispatch(fetchCategoryPosta(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryContainer);
