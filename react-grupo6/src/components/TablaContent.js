import { useState, useEffect } from "react";
import React from 'react'
import TablaRow from "./TablaRow";


function TablaContent(){
    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        fetch('/api/products',{
            mode: 'no-cors',
            headers:{
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProductos(data.data.productos)
        })
        // .catch(err => console.log(err))

    },[])
    return (
        <React.Fragment>
            {
                productos.map((producto)=>{
                    return (
                        <TablaRow producto={producto} key={producto.id} />                      
                        )
                })
            }
        </React.Fragment>
    )
}
export default TablaContent;