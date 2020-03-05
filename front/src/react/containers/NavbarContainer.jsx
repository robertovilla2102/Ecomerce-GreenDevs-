import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchProductsByName } from "../../redux/action-creators/productos";

// luego importar componente

//luego importar action creator

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: ""
    };
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput(e) {
    let value = e.target.value;
    this.setState({ inputSearch: value });
  }

  onSubmitSearch(e) {
    e.preventDefault();
    this.props.fetchProductsByName(this.state.inputSearch);
  }
  render() {
    return (
      <Navbar
        onSubmitSearch={this.onSubmitSearch}
        inputSearch={this.state.inputSearch}
        handlerInput={this.handlerInput}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProductsByName: name => dispatch(fetchProductsByName(name))
  };
};

export default connect(null, mapDispatchToProps)(NavbarContainer);
