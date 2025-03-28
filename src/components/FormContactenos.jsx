import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../style/contactenos.css"
function FormContactenos() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!nombre || !email || !telefono || !mensaje) {
      Swal.fire({
        title: "Por favor, completa todos los campos",
        icon: "warning",
        draggable: true
      });
      return;
    }

    Swal.fire({
      title: "Mensaje Enviado!",
      text: "Nos pondremos en contacto contigo pronto.",
      icon: "success",
      draggable: true
    });

    // Limpiar el formulario después del envío
    setNombre('');
    setEmail('');
    setTelefono('');
    setMensaje('');
  };

  return (
    <div className="contact-form">
      <h1>Contáctenos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormContactenos;
