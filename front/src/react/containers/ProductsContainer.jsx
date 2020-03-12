import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

//importando components
import Products from "../components/Products";
import Pagination from "../components/Paginacion";
import FiltroContainer from "./FiltroContainer";

//importando action-creators
import { fetchProducts } from "../../redux/action-creators/productos";
import { createCarrito } from "../../redux/action-creators/carrito";

const ProductContainer = ({
  fetchProducts,
  lista,
  usuario,
  createCarrito,
  match,
  history
}) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(match.params.page || 1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirtsPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirtsPost, indexOfLastPost);

  useEffect(() => {
    fetchProducts().then(productos => setPosts(productos));
  }, []);

  const onSubmitCarrito = (e, id) => {
    e.preventDefault();
    createCarrito(id, {
      cantidad: 1,
      userId: usuario
    });
  };

  const onChangePage = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    history.push(`/products/page/${page}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <FiltroContainer />
        </div>
        <div className="col-md-9">
          {lista ? (
            <div className="container">
              <div className="row">
                <Products
                  onSubmitCarrito={onSubmitCarrito}
                  productList={currentPosts}
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
    lista: state.productos.list,
    usuario: state.login.userLogueado.id
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    createCarrito: (productID, body) => dispatch(createCarrito(productID, body))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(ProductContainer)
);
