import React from 'react';
import { useState, useEffect } from 'react'
import ContentTotales from './ContentTotales'


function ContenTop(){

    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    
    

    useEffect( () => {
        fetch('/api/users',{
            mode: 'no-cors'
        })
        .then(response => response.json())
        .then(data => {
            setUsuarios(data.data)
           
        })
        .catch(error => console.error(error))

    }, [])

    useEffect( () => {
        fetch('/api/products',{
            mode: 'no-cors',
            body: JSON.stringify(),
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(data => {
            setProductos(data.data)
            
        })
        .catch(error => console.error(error))

    }, [])

    useEffect( () => {
        fetch('/api/categorias',{
            mode: 'no-cors',
            body: JSON.stringify(),
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(data => {
            setCategorias(data.data)
            
        })
    }, [])
    

    return (
        <React.Fragment>
            {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> */}
        {/*<!-- ContenTop -->*/}
        <div className="content-text" >
						<span> Dashboard </span>
					</div>
            <div className="row padded-h">
                <ContentTotales titulo='Usuarios' total={usuarios.total}/>

                <ContentTotales titulo='Productos' total={productos.count}/>

                <ContentTotales titulo='Categorias' total={categorias.count}/>    

                
                {/* <UltimoCreado titulo='Usuario' ultimo={usuarios.data.slice(-1)[0].email}/>
                
                               
                <UltimoCreado titulo='Producto' ultimo={productos.data.slice(-1)[0].title}/> */}
                
            </div>
        </React.Fragment>
    )
}
export default ContenTop;