import React from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../../redux/action-creators/register'

//importando components
import Register from '../components/Register'

class RegisterContainer extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props);

    this.state = {
      userName: '',
      userEmail: '',
      password: '',
      birthDay: '',
      address: '',
      imgProfile: '',
      error: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    const key = e.target.name
    const value = e.target.value
    this.setState({ [key]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.registerUser(this.state)
      .then(error => {
        error
          ? this.setState({ error: true })
          : this.props.history.push('/product')

      })
  }

  render() {
    return (
      <Register
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
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