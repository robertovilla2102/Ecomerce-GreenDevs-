import React from 'react';

export default ({userLogueado}) => {
    return (
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input defaultValue={userLogueado.userEmail} type="email" className="form-control" id="inputEmail4"/>
    </div>
   <div className="form-group col-md-2">
      <label for="">Name</label>
      <input defaultValue={userLogueado.userName}type="text" className="form-control" id="inputZip"/>
    </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input defaultValue={userLogueado.address}type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Birthday</label>
      <input defaultValue={userLogueado.birthDay}type="text" className="form-control" id="inputCity"/>
    </div>
    
  </div>
 
  <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

    )
}