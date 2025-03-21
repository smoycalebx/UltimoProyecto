import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Empleo from '../pages/Empleo';
import Admin from '../pages/Admin';
import Pago from '../pages/Pago';


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







                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Ruta


