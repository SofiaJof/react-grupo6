import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function ProductoDetail(){

    const [Producto, setProducto] = useState({})

    let { id } = useParams()

    useEffect( () => {
        fetch(`/api/products/${id}`,{
            mode: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducto(data.data)
        })
        
    }, [])

    return (
        <div className="card shadow position-top-box">
            <h3>{Producto.name}</h3>
            <br/>
            <span> Categoria:</span>
            <br/>
            <div>{Producto.category}</div>
            <br/>
            <span>Descripcion del producto: </span>
            <br/>
            <div>{Producto.description}</div>
            <br/>
            <span>Precio: </span>
            <br/>
            <div>{Producto.price}</div>
            <br/>
            <span>Personas: </span>
            <br/>
            <div>{Producto.people}</div>
            <br/>
            {/*<span>Imagen: </span>
             <br/>
            <div><img src={`api/products/images/${Producto.image}`}alt={Producto.name}/></div> 
            <div><img src={`/products/images/${Producto.image}`}alt={Producto.name}/></div>
             */}
          
        </div>
    )
}
export default ProductoDetail;