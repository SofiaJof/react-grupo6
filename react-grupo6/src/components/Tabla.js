import React from "react";
import TablaContent from "./TablaContent";

function Tabla({tituloTabla}){
    return (
        <React.Fragment>
            <div className="card shadow position-top-box fit">
            <h3>Productos</h3>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Detalle</th>
                </tr>
                </thead>
                <tbody>
                    <TablaContent />
                </tbody>    
            </table>
        </div>
        </React.Fragment>
    )
}
export default Tabla;