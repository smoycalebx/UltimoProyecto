    import React,{useEffect, useState } from 'react';
    import Allamados from './Llamados/Allamados';
    import Swal from 'sweetalert2';
    import { useNavigate } from 'react-router-dom';

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

        const Usuarios = Formulario.filter(users => users.nombre === Nombre && users.apellido=== Apellido && users.contraseña===Contraseña);
        console.log(Usuarios[0].rol);
        


        if (Usuarios.length !== 0) {
            limpiarCampos()

            if (Usuarios[0].rol === "admin") {
                navigate("../Admin");
            }

            else 
                {navigate("../Login")

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
        <p>Buscas trabajo? <a href="http://localhost:5174/Empleo">Postulate aquí</a></p>
        <label>Nombre:</label>
        <input type="text" value={Nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Apellido:</label>
        <input type="text" value={Apellido} onChange={(e) => setApellido(e.target.value)} />

        <label>Cédula:</label>
        <input type="number" value={Cedula} onChange={(e) => setCedula(e.target.value)} />

        <label>Crear Contraseña:</label>
        <input type="password" value={Contraseña} onChange={(e) => setContraseña(e.target.value)} />

        <div className='divButton'>
            <button onClick={Click}>Enviar</button>
        </div>

        <div className='divRest'>
            
                </div>
                <p>Ya tienes cuenta? <a href="http://localhost:5174/Register">Crear cuenta</a></p>


        </div>


        
        
    );
    }

    export default FormInicio;
