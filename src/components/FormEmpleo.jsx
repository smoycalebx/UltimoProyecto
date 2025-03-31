import React, { useState } from 'react';
import Swal from 'sweetalert2';

function FormEmpleo() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    habilidades: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¡Postulación enviada!',
      text: 'Nos pondremos en contacto contigo pronto.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setFormData({ nombre: '', correo: '', telefono: '', habilidades: '' });
  };

  return (
    <div className="">
      <h1 className="">Postulación de Empleo</h1>
      <form onSubmit={handleSubmit} className="">
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} className="border p-2 rounded" required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} className="border p-2 rounded" required />
        <textarea name="habilidades" placeholder="Describe tus habilidades" value={formData.habilidades} onChange={handleChange} className="border p-2 rounded" required />
        <button type="submit" className="">Enviar Postulación</button>


        <p>Lugar basado en donde puedas describir tus habilidades y tus desempeños laborales y así darle seguimiento tu nueva aportunidad laboral.</p>
        <h3>Nota: Unicamente se le prindaran la información laboral a las mejores postulaciones , buena suerte!</h3>
      </form>
    </div>
  );
}

export default FormEmpleo;
