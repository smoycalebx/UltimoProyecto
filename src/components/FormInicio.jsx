import React from 'react'
import '../style/Inicio.css'
import icono from "../img/icono.png"
import ProductosPrin from "../img/ProductosPrin.png"
import { useNavigate } from 'react-router-dom'
function FormInicio() {




  const navigate = useNavigate()

  function Productos() {
navigate("/Login")
    
  }





  
  return (

      
    <div className='divContainer'>
       <div className='divIcono'>

<img src={icono} alt="Autos" />
</div>

        <nav>
            <button onClick={"Productos"}>Productos</button>
            <button>estadisticas de Ventas</button>
            <button>Ventas de Autos</button>
            <button>Contactenos</button>
            <button>Ruleta</button>
            <input type="text" className='inputBucar' placeholder='Buscar Productos' />
            <button>enviar</button>
        </nav>
        <p className='micuenta'> <a href="http://localhost:5174/Login">Mi cuenta</a></p>
        <h1 className='h1Productos'>Productos con 30% de descuento!</h1>
        <img src={ProductosPrin} alt="ProductosPrin" />
    <div>
      
    </div>
    </div>
    
    
  )
}

export default FormInicio
