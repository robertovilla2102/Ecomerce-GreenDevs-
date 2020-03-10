import React from "react";
import "../css/adminStyle.css"


export default ({users}) =>{
  return(
    <div className="card-body pt-5">
        <img src="https://lh3.googleusercontent.com/proxy/J4KqRtIBjENy4EtMnWbxLGsoxBbWiFyGo9OA6tPpVv_KI5XmuULUQeir2uK2y6f8VJfVp3XQwObZJfXgd0RLkdCrZLAIfhqywqdNMR1RP-UaqnkGOFWhp3SEA1mx_76lAnAEdqv9iw" alt="profile-image" className="profile"/>
    <div className="container mt-5">
      <input classNAme="form-control mb-4" id="tableSearch" type="text"
        placeholder="Type something to search list items"/>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Address</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody id="myTable">
          {users.map((user, index) => (
          <tr>
            <td>{user.userName}</td>
            <td>{user.address}</td>
            <td>{user.userEmail}</td>
            <td>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitches"/>
                  <label className="custom-control-label" for="customSwitches">
                  </label>
              </div>
            </td>
            <td>
              <span className="table-remove"><button type="button"
                className="btn btn-danger btn-rounded btn-sm btn-block my-0">Delete</button></span>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  )
}
