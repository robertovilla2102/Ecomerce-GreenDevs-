import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../redux/action-creators/categories";

//importando componentes
import HomeCategories from "../components/HomeCategories";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../containers/FooterContainer";

const Home = ({ categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <React.Fragment>
      <Header />
      {categories ? <HomeCategories categories={categories} /> : null}
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
