import React from 'react'
import { connect } from 'react-redux'
import Perfil from '../components/Perfil'
import EditarPerfil from '../components/EditarPerfil';

class PerfilUsuarioContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            editP: false,
            editPass: false,
            carrito: false,
            comprasPerf: false,
        }
    }
    // me va a renderisar el componente formulario para que puedo editar mi perfil, cuando le doy click al boton
    editPerfil(){
   this.setState({editP: true,  
    editPass: false,
    carrito: false,
    comprasPerf: false,

})
    }
    // me va a renderisar el componente para cambiar la contrasena, cuando le doy click al boton
    editPassword(){
        this.state.editPass = true
    }
    // me va a renderisar el componente de mi carrito, cuando le doy click al boton
    miCarrito(){
        this.state.carrito = true
    }
    // me va a renderisar el componente de mis compras, cuando le doy click al boton
    comprasPerfil(){
        this.state.comprasPerf = true
    }
    render() {
        
        const {userLogueado} = this.props
        console.log('sdsfdsfdsfsd',userLogueado)
        return (
            <div className="container">
                      
            <Perfil userLogueado={userLogueado}/>
            <button onClick ={(e) => {e.preventDefault(), this.editPerfil()}} type="submit" className="btn btn-outline-primary">Edit Perfil</button>
            <button onClick ={(e) => {e.preventDefault(), this.editPassword()}} type="submit" className="btn btn-outline-primary">Edit Password</button>
            <button onClick ={(e) => {e.preventDefault(), this.miCarrito()}} type="submit" className="btn btn-outline-primary">Mi carrito</button>
            <button onClick ={(e) => {e.preventDefault(), this.comprasPerfil()}}type="submit" className="btn btn-outline-primary">Compras</button>
            {this.state.editP ? <EditarPerfil userLogueado={userLogueado}/> :null}
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
  
