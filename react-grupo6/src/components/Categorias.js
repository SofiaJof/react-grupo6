import React, {useEffect, useState } from "react";

function Categorias() {
    const [categorias, setCategorias] = useState([])

    useEffect( () => {
        fetch('/api/categorias',{
            mode: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
             setCategorias(data.data.categorias)
        })
        
    }, [])
    
    return (
        <div className="card shadow position-top-box fit">
            <h3>Categorias</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Total productos por categoría</th>
                    </tr>
                </thead>
                <tbody>
                    { categorias.map((categoria,i) => 
                        <tr key={i}>
                            <td>{categoria.categoria.id}</td>
                            <td>{categoria.categoria.category}</td> 
                            <td>{categoria.totalProductos}</td> 
                        </tr>
                    )}
                </tbody>
            </table>              
        </div>
    )
}

export default Categorias;