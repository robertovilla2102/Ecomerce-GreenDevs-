import React from 'react'
import { Link, Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Bienvenido a la nada</h1>
            </React.Fragment>
        )
    }
}

export default connect(null, null)(Main) 