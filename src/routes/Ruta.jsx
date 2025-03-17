import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Inicio from '../pages/Inicio';


function Ruta() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/Inicio" element={<Inicio/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Ruta


