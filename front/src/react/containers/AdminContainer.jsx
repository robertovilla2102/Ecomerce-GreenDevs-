import React, { useState } from 'react'
import { connect } from 'react-redux'

import AdminPanel from '../components/AdminPanel'

const AdminContainer = ({ }) => {
  return (
    <AdminPanel />
  )
}

/* const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispathToProps = (dispatch, ownProps) => {
  return {

  }; 
}; */

export default connect(null, null)(AdminContainer);
