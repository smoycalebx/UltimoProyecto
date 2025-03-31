    import React,{useEffect, useState } from 'react';
    import Allamados from './Llamados/Allamados';
    import Swal from 'sweetalert2';
    import { Link, useNavigate } from 'react-router-dom';

    function FormInicio() {
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Cedula, setCedula] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const [Formulario, setFormulario] = useState([]);



    const navigate = useNavigate()




        useEffect(() => {
        async function mostrar() {
          const datos =await Allamados.getUsers()
          
          setFormulario(datos)
        }
        mostrar();
        
      }, []);
    


    

    const Click = async () => {
        if (!Nombre || !Apellido || !Cedula || !Contraseña) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No has llenado los campos!",
              });
              return;
            }

        const Usuarios = Formulario.filter(users => users.nombre === Nombre && users.apellido=== Apellido && users.contraseña===Contraseña);
        console.log(Usuarios[0].rol);
        
           localStorage.setItem("nombre","token")

        if (Usuarios.length !== 0) {
            limpiarCampos()

            if (Usuarios[0].rol === "admin") {
                
                navigate("/Admin");
            }

            else {
                navigate("/Inicio")


            }



            
        } else {
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
              });
            
        }



        limpiarCampos()
        setFormulario()
        
    };



     const limpiarCampos = () => {
        setNombre('');
        setApellido('');
        setCedula('');
        setContraseña('');
    };

    return (
        <div>

        <h1>Login</h1>
        <p>Buscas trabajo?<Link to="/Empleo">postulate aquí</Link></p>
        <label>Nombre:</label>
        <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Apellido:</label>
        <input type="text" value={Apellido} onChange={(e) => setApellido(e.target.value)} />

        <label>Cédula:</label>
        <input type="number" value={Cedula} onChange={(e) => setCedula(e.target.value)} />

        <label>Contraseña:</label>
        <input type="password" value={Contraseña} onChange={(e) => setContraseña(e.target.value)} />

        <div className='divButton'>
            <button onClick={Click}>Enviar</button>
        </div>

        <div className=''>
            
                </div>
                <p>Ya tienes cuenta? <Link to="/Register">Crear cuenta aquí</Link></p>


        </div>


        
        
    );
    }

    export default FormInicio;
