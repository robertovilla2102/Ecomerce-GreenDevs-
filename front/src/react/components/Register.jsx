import React from 'react'
import { Link } from 'react-router-dom'

//importando cs

export default ({ handleInput, handleSubmit, error }) => (
  <div className='container'>
    <form className='form-signin'>
      <input
        type="text"
        className="form-control"
        name='userName'
        placeholder="Ingresa Nombre"
        onChange={handleInput}
      />

      <input
        type="email"
        className="form-control"
        name='userEmail'
        placeholder="Ingresa Email"
        onChange={handleInput}
      />

      <input
        type='text'
        className="form-control"
        placeholder="IngreseBirthday"
        name='birthDay'
        required=''
        onChange={handleInput}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Ingresa password"
        name='password'
        onChange={handleInput}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Ingresa Adress"
        name='address'
        onChange={handleInput}
      />

      <select onChange={handleInput} name='imgProfile'>
        <option value="volvo">img 1</option>
        <option value="saab">img 2</option>
        <option value="mercedes">img 3</option>
      </select>

      <button
        className="btn btn-lg btn-dark btn-block"
        type="submit"
        onClick={handleSubmit}
      >registarse
        </button>

      <hr />

      {error
        ?
        <div className="alert alert-danger" role="alert">Intenta nuevamente, alguno de los campos es incorrecto!!</div>
        : null
      }

    </form>
  </div>
)