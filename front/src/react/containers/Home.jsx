import React from "react";

//importando componentes
import HomeCategories from '../components/HomeCategories'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeCategories />
        <AboutUs />
      </React.Fragment>
    )
  }
}

export default Home;
