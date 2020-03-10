import React from "react";
import UserLista from "../components/UserLista";
import IconProfile from "../components/IconProfile";
import Footer from "../components/Footer";
import {withRouter} from "react-router"
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/action-creators/allusers";

class UserListaContainer extends React.Component{
  componentWillMount(){
    this.props.fetchUsers()
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
            <UserLista users={users}/>
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
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(UserListaContainer)
);
