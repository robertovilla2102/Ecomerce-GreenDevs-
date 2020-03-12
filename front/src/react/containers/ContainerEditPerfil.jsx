import React from "react";
import { connect } from "react-redux";

import IconProfile from "../components/IconProfile";
import PerfilEdit from "../components/PerfilEdit";
import Footer from "../containers/FooterContainer";
import "../css/estilosPerfil.css";
import { editPerfil } from "../../redux/action-creators/editarUsuario";

class PerfilUsuarioContainer extends React.Component {
  constructor({ userLogueado }) {
    super();
    this.state = {
      userEmail: userLogueado.userEmail,
      userName: userLogueado.userName,
      address: userLogueado.address,
      birthDay: userLogueado.birthDay
    };
    this.onChange = this.onChange.bind(this);
    this.mandarFormulario = this.mandarFormulario.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  mandarFormulario(e) {
    e.preventDefault();
    let user = {
      userName: this.state.userName,
      userEmail: this.state.userEmail,
      birthDay: this.state.birthDay,
      address: this.state.address
    }

    this.props.editPerfil(user)
      .then(res => this.props.history.push("/home"));
  }

  render() {
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
            <PerfilEdit
              onChange={this.onChange}
              userEmail={this.state.userEmail}
              userName={this.state.userName}
              birthDay={this.state.birthDay}
              address={this.state.address}
              mandarFormulario={this.mandarFormulario}
            />
            <IconProfile />
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

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    editPerfil: user => dispatch(editPerfil(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(PerfilUsuarioContainer);
