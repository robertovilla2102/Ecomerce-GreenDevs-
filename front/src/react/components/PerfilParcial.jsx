import React from "react";


export default ({userLogueado}) => {
    return (
    
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={userLogueado.imgProfile}className="card-img" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 style={{fontFamily:"georgia",fontStyle:"italic", fontSize: "24px"}} className="card-title">Name : {userLogueado.userName}</h5>
        <p style={{fontFamily:"georgia",fontStyle:"italic", fontSize: "16px"}} className="card-text">Address : {userLogueado.address}</p>
        <p style={{fontFamily:"georgia",fontStyle:"italic", fontSize: "16px"}} className="card-text">Email : {userLogueado.userEmail}</p>
        {userLogueado.birthDay.length > 2 ? <p style={{fontFamily:"georgia",fontStyle:"italic", fontSize: "20px"}} className="card-text">{userLogueado.birthDay}</p> : null}
        <p className="card-text"><small className="text-muted">Usuario unido</small></p>
        <p></p>
      </div>
    </div>
  </div>
</div>

)}