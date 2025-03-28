import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Empleo from '../pages/Empleo';
import Admin from '../pages/Admin';
import Pago from '../pages/Pago';
import Carrito from '../pages/Carrito';
import Ruleta from '../pages/Ruleta';
import Estadistica from '../pages/Estadistica';
import Contactenos from '../pages/Contactenos';
import Conocenos from '../pages/Conocenos';


function Ruta() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/Inicio" element={<Inicio/>}/>
                            <Route path="/Login" element={<Login/>}/>
                            <Route path="/Register" element={<Register/>}/>
                            <Route path="/Empleo" element={<Empleo/>}/>
                            <Route path="/Admin" element={<Admin/>}/>
                            <Route path="/Pago" element={<Pago/>}/>
                            <Route path="/Carrito" element={<Carrito/>}/>
                            <Route path="/Ruleta" element={<Ruleta/>}/>
                            <Route path="/Estadistica" element={<Estadistica/>}/>
                            <Route path="/Contactenos" element={<Contactenos/>}/>
                            <Route path="/Conocenos" element={<Conocenos/>}/>













                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Ruta


