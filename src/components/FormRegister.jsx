import React, { useState } from "react";
import Allamados from "./Llamados/Allamados";
import Swal from "sweetalert2";

function FormRegister() {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Cedula, setCedula] = useState("");
  const [Contraseña, setContraseña] = useState("");




  const Click = async () => {
    if (!Nombre || !Apellido || !Cedula || !Contraseña) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No has llenado los campos!",
      });
      return;
    }

    // Llamada a la función para registrar usuario
    await Allamados.postUsers(Nombre, Apellido, Cedula.toString(), Contraseña);
    limpiarCampos()


  };
  
  const limpiarCampos = () => {
    setNombre("");
    setApellido("");
    setCedula("");
    setContraseña("");
  };


  return (
    <div>
      <h1>Registro</h1>
      <label>Nombre:</label>
      <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Apellido:</label>
      <input type="text" value={Apellido} onChange={(e) => setApellido(e.target.value)} />

      <label>Cédula:</label>
      <input type="number" value={Cedula} onChange={(e) => setCedula(e.target.value)} />

      <label>Contraseña:</label>
      <input type="password" value={Contraseña} onChange={(e) => setContraseña(e.target.value)} />

      <button onClick={Click}>Registrarme</button>
    </div>
  );
}

export default FormRegister;
