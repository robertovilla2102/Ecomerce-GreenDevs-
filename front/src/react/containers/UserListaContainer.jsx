import React from "react";
import UserLista from "../components/UserLista";
import IconProfile from "../components/IconProfile";
import Footer from "../components/Footer";
import {withRouter} from "react-router"
import { connect } from "react-redux";
import { fetchUsers,deleteUsers,quitarAdministrador,asignarAdministrador } from "../../redux/action-creators/allusers";

class UserListaContainer extends React.Component{
  constructor(props){
    super(props);
    this.borrarUsers=this.borrarUsers.bind(this)
    this.hacerAdmin=this.hacerAdmin.bind(this)
    this.quitarAdmin=this.quitarAdmin.bind(this)
  }

  componentWillMount(){
    this.props.fetchUsers()
  }

  borrarUsers(e,id){
    e.preventDefault()
    this.props.deleteUsers(id)
  }

  hacerAdmin(e,id){
    e.preventDefault()
    this.props.asignarAdministrador(id)
  }

  quitarAdmin(e,id){
    e.preventDefault()
    this.props.quitarAdministrador(id)
  }

  render(){
    const {users}=this.props
    return(
      <div>
      <div className="container-fluid mt-3 mb-3">
        <div className="card profile-card-2">
          <div className="card-img-block">
              <img className="img-fluid" src="https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Card image cap"/>
          </div>
            <UserLista users={users} borrarUsers={this.borrarUsers} hacerAdmin={this.hacerAdmin} quitarAdmin={this.quitarAdmin}/>
            <IconProfile/>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users:state.usuarios.users
  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUsers:(id) => dispatch (deleteUsers(id)),
    quitarAdministrador:(id) => dispatch (quitarAdministrador(id)),
    asignarAdministrador:(id) => dispatch (asignarAdministrador(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(UserListaContainer)
);
