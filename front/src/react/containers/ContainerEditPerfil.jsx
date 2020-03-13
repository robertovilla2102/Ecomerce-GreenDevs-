import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import IconProfile from "../components/IconProfile";
import PerfilEdit from "../components/PerfilEdit";
import Footer from "../containers/FooterContainer";
import "../css/estilosPerfil.css";
import { editPerfil, userIsLogin } from "../../redux/action-creators/login";

const PerfilUsuarioContainer = ({
  userLogueado,
  editPerfil,
  history,
  userIsLogin
}) => {
  const [userEmail, setUserEmail] = useState(userLogueado.userEmail);
  const [userName, setUserName] = useState(userLogueado.userName);
  const [userAddress, setUserAddress] = useState(userLogueado.userAddress);
  const [userBirthDay, setUserBirthDay] = useState(userLogueado.userBirthDay);
  useEffect(() => {
    userIsLogin();
  }, []);

  const mandarFormulario = e => {
    e.preventDefault();
    let user = {
      userName: userName,
      userEmail: userEmail,
      birthDay: userBirthDay,
      address: userAddress
    };

    editPerfil(user).then(res => history.push("/home"));
  };

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
            setUserEmail={setUserEmail}
            setUserName={setUserName}
            setUserAddress={setUserAddress}
            setUserBirthDay={setUserBirthDay}
            userLogueado={userLogueado}
            mandarFormulario={mandarFormulario}
          />
          <IconProfile />
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    userLogueado: state.login.userLogueado
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    editPerfil: user => dispatch(editPerfil(user)),
    userIsLogin: () => dispatch(userIsLogin())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(PerfilUsuarioContainer)
);
