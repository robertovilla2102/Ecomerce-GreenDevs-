import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Products from "../components/Products";
import Pagination from "../components/Paginacion";
import FiltroContainer from "./FiltroContainer";

//importando action-creators

const ProductSearchContainer = ({ productos, match, history }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(match.params.page || 1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirtsPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirtsPost, indexOfLastPost);

  useEffect(() => {
    setPosts(productos);
  }, [productos]);

  const onSubmitCarrito = (e, id) => {
    e.preventDefault();
    createCarrito(id, {
      cantidad: 1,
      user: usuario
    });
  };

  const onChangePage = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    history.push(`/products/product/${match.params.name}/${page}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <FiltroContainer />
        </div>
        <div className="col-md-9">
          {productos ? (
            <div className="container">
              <div className="row">
                <Products
                  productList={currentPosts}
                  onSubmitCarrito={onSubmitCarrito}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 mx-auto">
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={posts.length}
                      onChangePage={onChangePage}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    productos: state.productos.productsSearch
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    createCarrito: (productID, body) => dispatch(createCarrito(productID, body))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(ProductSearchContainer)
);
