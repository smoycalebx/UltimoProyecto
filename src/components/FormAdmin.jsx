import React, { useEffect, useState } from 'react';
import Bllamados from './Llamados/Bllamados';
import "../style/Admin.css";

function FormAdmin() {
  const [info, setInfo] = useState([]);
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [Img, setImg] = useState();

  const nombreUsuario = localStorage.getItem("nombre")

  useEffect(() => {
    async function mostrar() {
      const datos = await Bllamados.getProductos();
      setInfo(datos);
    }
    mostrar();
  }, []);

  const agreImg = (e) => {
    const guardarImgs = new FileReader();
    guardarImgs.addEventListener("load", () => {
      setImg(guardarImgs.result);
    });
    guardarImgs.readAsDataURL(e.target.files[0]); 
  };

  function Click() {
    Bllamados.postProductos(producto, cantidad, precio,Img).then(() => {
      setProducto("");
      setCantidad("");
      setPrecio("");
      actualizarLista();
    });
  }

  async function eliminar(id) {
    await Bllamados.deleteProductos(id);
    actualizarLista();
  }

  async function editar(id) {
    const nuevoProducto = prompt("Ingrese el nuevo nombre del producto:", producto);
    const nuevaCantidad = prompt("Ingrese la nueva cantidad:", cantidad);
    const nuevoPrecio = prompt("Ingrese el nuevo precio:", precio);
    
    if (nuevoProducto && nuevaCantidad && nuevoPrecio) {
      await Bllamados.updateProductos(id, {
        producto: nuevoProducto,
        cantidad: nuevaCantidad,
        precio: nuevoPrecio,
      });
      actualizarLista();
    }
  }

  async function actualizarLista() {
    const datos = await Bllamados.getProductos();
    setInfo(datos);
  }

  return (
    <div>
      <h1>Parte de administradores</h1>

       <h3>{nombreUsuario}</h3>
      <div>
        <input type="text" value={producto} onChange={(e) => setProducto(e.target.value)} placeholder='Producto' />
        <br />
        <input type="text" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder='Cantidad del stock' />
        <br />
        <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder='Precio' />
        <br />
        <input type="file" onChange={agreImg} />
        <button onClick={Click}>Agregar Producto</button>
      </div>

      <br />

      <div id='conteiner'>
        <table id='tabla'>
          <thead>
            <tr>
              <th>Producto:</th>
              <th>Cantidad:</th>
              <th>Precio:</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {info.map((producto, index) => (
              <tr key={index}>
                <td>{producto.producto}
                <img src={producto.imagen} alt="" />
                </td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
            
                <td>
                  <button onClick={() => eliminar(producto.id)}>Eliminar</button>
                  <button onClick={() => editar(producto.id)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormAdmin;