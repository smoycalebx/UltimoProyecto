import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Inicio.css";
import {useEffect, useState } from 'react';
import icono from "../img/icono.png";
import ProductosPrin from "../img/ProductosPrin.png";

import Bllamados from "./Llamados/Bllamados";

// Imágenes de productos


import "bootstrap-icons/font/bootstrap-icons.css";

function FormInicio() {
  const navigate = useNavigate();

  const [productos,setProductos]= useState([])

        useEffect(() => {
        async function mostrar() {
        const datos =await Bllamados.getProductos()
          
        setProductos(datos)
        }
        mostrar();
        
      }, []);




  function Conocenos() {
    navigate("/Conocenos");

    
  }



function Vermas() {
  navigate("/carrito");
}


function Estadistica() {


  navigate("/Estadistica");
  
}


function Ruleta() {
  navigate("/Ruleta");
  

  
}


function Contactenos() {
  navigate("/Contactenos");
}



  // Datos de los productos


  return (
    <div className="divContainer">
      <div className="divIcono">
        <img  src={icono} alt="Autos" />
      </div>

      <nav>
        <button onClick={Conocenos}>Quienes somos</button>
        <button onClick={Estadistica}>Estadísticas de Ventas</button>
        <button onClick={Contactenos}>Contáctenos</button>
        <button onClick={Ruleta}>Ruleta</button>
        <input type="text" className="inputBuscar" placeholder="Buscar Productos" />
        <button>Enviar</button>
      </nav>

      <p className="micuenta">
        
      <Link  id = "miCuenta"to="/Login">Mi cuenta</Link>
      </p>
      <Link  id = "carrito"to="/ApartadoCarrito"><i className="bi bi-cart4"></i></Link>

      <h1 className="h1Productos">Productos con 30% de descuento!</h1>
      <img src={ProductosPrin} alt="Productos en descuento" />

      <div className="divContenedorImg">
        {productos.map((producto, index) => (
          <div key={index} className="productoCard">

           
            <h3>{producto.producto}</h3>

            <img src={producto.imagen} alt="" />
            <p>Precio: <strong>{producto.precio}</strong></p>
        
            <button onClick={Vermas} className="verMas">Ver más</button>
          </div>
        ))}
      </div>

      <div className="textoInformativo">
        <p>
          ⭐ <strong>Reseña de MoochisCars:</strong> Tu Mejor Opción en Repuestos y Servicios Automotrices
          <br />
          Si estás buscando repuestos automotrices de calidad, tanto nuevos como de segunda mano, MoochisCars es la mejor opción.
          <br />
          🔹 <strong>Amplia variedad de repuestos</strong> – Encuentra desde piezas de motor hasta accesorios y carrocería.
          <br />
          🔹 <strong>Disponibilidad en tiempo real</strong> – Sabrás si el producto está en stock antes de comprarlo.
          <br />
          🔹 <strong>Vista previa de productos</strong> – Observa imágenes detalladas antes de tomar una decisión.
          <br />
          🔹 <strong>Servicios de reparación y mantenimiento</strong> – Conecta con expertos en mecánica, electricidad y pintura automotriz.
          <br />
          🔹 <strong>Notificaciones automáticas</strong> – Mantente informado sobre ofertas, nuevos productos y disponibilidad.
          <br />
          <strong>Si buscas calidad, buenos precios y una plataforma confiable, ¡MoochisCars es tu mejor elección! 🚗⚙️🔥</strong>
        </p>
      </div>

      <div id="footer">
        <p>Creditos al creador de la página</p>
        <h3>Caleb Obando villegas</h3>
        <h1> <i class="bi bi-geo-alt"></i>ubicacion</h1>
        <h2><i class="bi bi-instagram"></i><i class="bi bi-facebook"></i> Redes sociales</h2>
        <h2> <i class="bi bi-alarm"></i>Horarios de atencion al clienete:
        10am a 5pm , 
        2pm a 10pm</h2>

        
        
      </div>
    </div>
  );
}

export default FormInicio;
