import React from 'react'
import '../style/Inicio.css'
import icono from "../img/icono.png"
import ProductosPrin from "../img/ProductosPrin.png"
import caliper from "../img/caliper.png"
import caliper2 from "../img/caliper2.png"
import caliper3 from "../img/caliper3.png"
import caliper4 from "../img/caliper4.png"


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
      
      <div id='containerProdo'>

      <div >
        <img src={caliper}  alt="" id='caliper' />

      </div>

      <div>

        <img src={caliper2} alt="" id='caliper2' />

      </div>

      <div>

        <img src={caliper3} alt="" id='caliper3' />

      </div>
      <div>

        <img src={caliper4} alt="" id='caliper4' />
        
      </div>

      </div>



      <div>
        <p className='textP'>⭐ Reseña de MoochisCars: Tu Mejor Opción en Repuestos y Servicios Automotrices
Si estás buscando repuestos automotrices de calidad, tanto nuevos como de segunda mano, MoochisCars es la mejor opción. Esta plataforma destaca por su variedad de productos, precios accesibles y una experiencia de compra sencilla y segura.

🔹 Amplia variedad de repuestos – Encuentra desde piezas de motor hasta accesorios y carrocería.
🔹 Disponibilidad en tiempo real – Sabrás si el producto está en stock antes de comprarlo.
🔹 Vista previa de productos – Observa imágenes detalladas antes de tomar una decisión.
🔹 Servicios de reparación y mantenimiento – Conecta con expertos en mecánica, electricidad y pintura automotriz.
🔹 Notificaciones automáticas – Mantente informado sobre ofertas, nuevos productos y disponibilidad.

MoochisCars no solo facilita la compra de repuestos, sino que también ayuda a profesionales del sector a ofrecer sus servicios, promoviendo empleo y dinamizando el mercado automotriz.

Si buscas calidad, buenos precios y una plataforma confiable, ¡MoochisCars es tu mejor elección! 🚗⚙️🔥

</p>



<div id='fin'><h1>brrr</h1></div>
      </div>
    </div>
    </div>
    
    
  )
}

export default FormInicio
