import React from "react";
import { connect } from "react-redux";
import FormularioPassword from "../components/FormularioPassword";
import IconProfile from "../components/IconProfile";

import Footer from "../components/Footer";
import "../css/estilosPerfil.css";

class FormPasswordContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      inputType: "password"
    };
    this.myFunction = this.myFunction.bind(this);
  }
  myFunction() {
    let input = this.state.inputType;
    if (input === "password") {
      this.setState({ inputType: "text" });
    } else {
      this.setState({ inputType: "password" });
    }
  }
  render() {
    const { userLogueado } = this.props;
    console.log("sdsfdsfdsfsd", userLogueado);
    return (
      <div>
        <div className="container-fluid mt-3 mb-3">
          <div className="card profile-card-2">
            <div className="card-img-block">
              <img
                className="img-fluid"
                src="/imagenes/Fondos/fondofranja.png"
                alt="Card image cap"
              />
            </div>
            <FormularioPassword
              inputType={this.state.inputType}
              myFunction={this.myFunction}
            />
            <div className="mt-4">
              <IconProfile />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    userLogueado: state.login.userLogueado
  };
};

export default connect(mapStateToProps, null)(FormPasswordContainer);
