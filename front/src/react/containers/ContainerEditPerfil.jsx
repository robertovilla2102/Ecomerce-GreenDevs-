import React from 'react'
import { connect } from 'react-redux'
import Perfil from '../components/Perfil'
import IconProfile from '../components/IconProfile'
import PerfilEdit from '../components/PerfilEdit';
import "../css/estilosPerfil.css"

class PerfilUsuarioContainer extends React.Component {
    render() {

        const {userLogueado} = this.props
        console.log('sdsfdsfdsfsd',userLogueado)
        return (
          <div className="card profile-card-2">
            <div className="card-img-block">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Card image cap"/>
            </div>
              <PerfilEdit/>
              <IconProfile/>
          </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userLogueado: state.login.userLogueado
    };
  };

  export default connect(mapStateToProps, null)(PerfilUsuarioContainer);
