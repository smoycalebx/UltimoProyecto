import React, { useEffect, useState } from 'react'
import Bllamados from './Llamados/Bllamados';

function FormAdmin() {
  const [info,setInfo]=useState([])
  const [producto,setProducto] = useState("");
  const[cantidad,setCantidad] = useState("");
  const[precio,setPrecio]=useState("");






  useEffect(() => {
    async function mostrar() {
      const datos = await Bllamados.getUsers()




      setInfo(datos)
    
    }
    mostrar();
    }, []);


    function Click() {
        Bllamados.postUsers(producto,cantidad,precio);
      
    }



  



  return (
    <div>
      <h1>Parte de administradores</h1>
      <ul>
        <li>1= Caleb Villegas</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>

      </ul>

    <div><input type="text" value={producto} onChange={(e) => setProducto (e.target.value)} placeholder='producto'/> 
    <br />
    <input type="text" value={cantidad} onChange={(e) => setCantidad (e.target.value)} placeholder='Cantidad del stock' />
    <br />
    <input type="text" value={precio} onChange={(e) => setPrecio (e.target.value)} placeholder='Precio' />
    <br />




    <button onClick={Click}>mostrar productos</button>

    </div>

      <br />


      <div id='conteiner'>
        <table>
          <thead>
            <tr>
          <th>Producto:</th>
          <th>Cantidad:</th>
          <th>Precio:</th>
            </tr>
          </thead>
          <tbody>
          {info.map((producto, index) => (
        <tr key={index}>
            <td>{producto.producto}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio}</td>
        </tr>
            ))}
          </tbody>
        </table>



      </div>

    </div>
    
  )
}

export default FormAdmin
