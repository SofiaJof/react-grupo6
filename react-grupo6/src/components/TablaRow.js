import React from "react";
import { Link } from 'react-router-dom'

function TablaRow(props){
    
    return (
        <React.Fragment>
        <tr>
            <td>{props.producto.name}</td>
            <td>{props.producto.price}</td>
            <td>{props.producto.description}</td>
            {/* <td>1</td> */}
            <td><Link to={`/products/${props.producto.id}`}>detalle</Link></td>
            
        </tr>
        </React.Fragment>
    )
}
export default TablaRow;