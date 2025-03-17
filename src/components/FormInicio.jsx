import React from 'react'
import '../style/Inicio.css'
import iconoPrincipal from '../'

function FormInicio() {
  return (

    <div className='divContainer'>
        <nav>
            <button onClick={"Click"}>Productos</button>
            <button>estadisticas de Ventas</button>
            <button>Ventas de Autos</button>
            <button>Contactenos</button>
            <button>Ruleta</button>
            <input type="text" className='inputBucar' placeholder='Buscar Productos' />
        </nav>
        <div className='divProductos'><h1>Productos</h1>

        <img src="" alt="Autos" />
        </div>
      
    </div>
    
  )
}

export default FormInicio
