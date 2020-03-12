import React from "react";
import { connect } from "react-redux";
import Perfil from "../components/Perfil";
import IconProfile from "../components/IconProfile";

import Footer from "../components/Footer";
import "../css/estilosPerfil.css";

class PerfilUsuarioContainer extends React.Component {
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
            <Perfil userLogueado={userLogueado} />
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

export default connect(mapStateToProps, null)(PerfilUsuarioContainer);
