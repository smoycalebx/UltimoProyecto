import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Cllamados from "../components/Llamados/Cllamados";
import "../style/carrito.css"
function FormCarrito() {
  const [nombre, setNombre] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [fecha, setFecha] = useState('');
  const [cvv, setCvv] = useState('');
  const [carrito, setCarrito] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Pago exitoso!",
      icon: "success",
      draggable: true
    });
  };

  const agregar = async () => {
    if (!nombre || !tarjeta || !fecha || !cvv) {
      Swal.fire({
        title: "Por favor, llena todos los campos",
        icon: "warning",
        draggable: true
      });
      return;
    }

    const nuevoItem = { nombre, tarjeta, fecha, cvv };

    try {
      await Cllamados.postUsers(nuevoItem);
      setCarrito([...carrito, nuevoItem]);
      Swal.fire({
        title: "Producto agregado al carrito!",
        icon: "success",
        draggable: true
      });
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      Swal.fire({
        title: "Error al agregar el producto",
        icon: "error",
        draggable: true
      });
    }
  };

  return (
    <div className="form-container">
      <h3>¡Apartado de cobro!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre en la tarjeta:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Número de tarjeta:</label>
          <input type="text" value={tarjeta} onChange={(e) => setTarjeta(e.target.value)} required />
        </div>
        <div>
          <label>Fecha de expiración:</label>
          <input type="text" placeholder="MM/YY" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        </div>
        <div className="button-container">
          <button type="button" className="button-add" onClick={agregar}>Agregar al carrito</button>
          <button type="submit" className="button-pay">Pagar</button>
        </div>
      </form>
    </div>
  );
}

export default FormCarrito;
