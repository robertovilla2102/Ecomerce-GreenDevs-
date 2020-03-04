import React from 'react'
import { Link } from 'react-router-dom'

//importando cs

export default ({ handleInput, handleSubmit }) => (
  <div className='container'>
    <form>
      <div className="form-group">
        <label >Nombre y Apellido</label>
        <input
          type="text"
          className="form-control"
          name='userName'
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name='userEmail'
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label >Password</label>
        <input
          type='password'
          className="form-control"
          name='birthDay'
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label >Birthday</label>
        <input
          type="text"
          className="form-control"
          name='password'
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label >Address</label>
        <input
          type="text"
          className="form-control"
          name='address'
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label >img Profile</label>
        <input
          type="text"
          className="form-control"
          name='imgProfile'
          onChange={handleInput}
        />
      </div>

      <Link to='/products'>
        <button
          className="btn btn-lg btn-dark btn-block"
          type="submit"
          onClick={handleSubmit}
        >registarse
        </button>
      </Link>

    </form>
  </div>
)