/* import React from 'react'

export default ({ onSubmitCarrito, addCantidad, removeCantidad, cantidad, handleSubmitComprar }) => {
  console.log(cantidad);

  return (
    <React.Fragment>


      <button
        style={{ marginLeft: "20px" }}
        className="btn btn-success"
        type='submit'
        onClick={handleSubmitComprar}
      >Comprar
    </button>

      <button
        style={{
          marginLeft: "10px"
        }}
        type="submit"
        className="btn btn-outline-success"
        onClick={onSubmitCarrito}
      >Agregar a carrito
    </button>

      <div className='d-flex' style={{ marginTop: '10px', marginLeft: '21px' }}>
        <button
          onClick={removeCantidad}
          className="btn btn-secondary">-</button>

        <input type="text" name="input" value={cantidad} style={{ width: '50px', margin: '3px', textAlign: "center" }} className="form-control" />

        <button
          onClick={addCantidad}
          className="btn btn-secondary">+</button>
      </div>

    </React.Fragment>
  )
}
 */