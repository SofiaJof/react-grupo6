import React from "react";

 function UsuariosRow(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.usuario.id}</td>
                <td>{props.usuario.name}</td> 
                <td>{props.usuario.lastName}</td>
                <td>{props.usuario.email}</td>
                <td>{props.usuario.birthdate}</td>
                
            </tr>
        </React.Fragment>
    )
}

export default UsuariosRow;