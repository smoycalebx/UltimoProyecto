import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const estasautenticado = !!localStorage.getItem("nombre");

  if (estasautenticado) {
    return element;
  } else {
    return <Navigate to="/Login" />;
  }
};

export default PrivateRoute;
