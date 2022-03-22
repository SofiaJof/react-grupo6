import React from 'react';
import { useState, useEffect } from 'react';
import UsuariosRow from './UsuariosRow';



function Usuarios() {
    const [usuarios, setUsuarios] = useState([])

    useEffect( () => {
        fetch('/api/users',{
            mode: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
              }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                 setUsuarios(data.data.usuarios)
            })
        .catch(error => console.error(error))

    }, [])


    return (
        // <React.Fragment>
        <div className="card shadow position-top-box fit">
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Fecha de nacimiento</th>
                    </tr>
                </thead>
               
                <tbody>                   
                {usuarios.length > 0 && usuarios.map((usuario) => {
                        return(
                         <UsuariosRow

                         usuario={usuario} key={usuario.id} 
                         />   
                         
                        )}
                )
             }
                
                 </tbody>
               
            </table>  
        </div>
        // </React.Fragment>
    )
 }

export default Usuarios