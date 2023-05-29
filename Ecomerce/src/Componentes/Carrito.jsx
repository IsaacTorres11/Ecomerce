import { useEffect, useState } from "react"
import { useVariableContext } from "../Context/VariablesContext"



const Carrito = () => {

    //destructuramos el carrito de nuestro contexto
    const {carrito, setCarrito} = useVariableContext()

    const [suma, setSuma] =useState(0)
    //Procedemos a realizar la suma de los precios de cada articulo del carrito
    useEffect(()=>{
        let sumaTotal = 0
        for (let i = 0; i < carrito.length; i++) {
            sumaTotal += carrito[i].price
    }
    setSuma(sumaTotal)
    },[carrito])
    

    const eliminarArticulo =(id)=>{
        const articuloEliminado = carrito.filter(articulo => articulo.id != id)       
        setCarrito(articuloEliminado)
    } 
    
    
  return (
    <div>
        <h2>Mi Carrito</h2>
        {
            carrito.map((articulo,indice)=>(
                <div key={indice}>
                    <h2>{articulo.product_name}  ${articulo.price}</h2>
                    <button onClick={()=>{eliminarArticulo(articulo.id)}}>Eliminar</button>
                </div>
            ))
        }
        <h2>Total: ${suma}</h2>
    </div>
  )
}

export default Carrito