import React from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../../redux/action-creators/register'

//importando components
import Register from '../components/Register'

class RegisterContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      userName: '',
      userEmail: '',
      password: '',
      birthDay: '',
      address: '',
      imgProfile: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const key = e.target.name
    const value = e.target.value
    this.setState({ [key]: value })
  }

  handleSubmit() {
    this.props.registerUser(this.state)
  }

  render() {
    return (
      <Register
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    registeredUser: state.register.userRegistrado
  }
}

const mapDispathToProps = (dispatch, ownProps) => {
  return {
    registerUser: (user) => dispatch(registerUser(user))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(RegisterContainer)