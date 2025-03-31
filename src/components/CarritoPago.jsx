import React, { useState } from 'react';
import "../style/CarritoPago.css"

function CarritoPago() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');
  const [precio, setPrecio] = useState('');

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== '' && precio.trim() !== '' && !isNaN(precio)) {
      setProductos([...productos, { nombre: nuevoProducto, precio: parseFloat(precio) }]);
      setNuevoProducto('');
      setPrecio('');
    }
  };

  const eliminarProducto = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index} className="producto-item">
            {producto.nombre} - ${producto.precio.toFixed(2)}
            <button className="eliminar-btn" onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="input-group">
        <input 
          type="text" 
          value={nuevoProducto} 
          onChange={(e) => setNuevoProducto(e.target.value)}
          placeholder="Nombre del producto"
        />
        <input 
          type="number" 
          value={precio} 
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />
        <button onClick={agregarProducto} className="agregar-btn">Añadir</button>
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CarritoPago;