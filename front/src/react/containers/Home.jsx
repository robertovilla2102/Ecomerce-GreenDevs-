import React from "react";

//importando componentes
import HomeCategories from "../components/HomeCategories";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../containers/FooterContainer";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeCategories />
        <AboutUs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
