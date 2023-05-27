import { useVariableContext } from "../Context/VariablesContext"



const Carrito = () => {

    //destructuramos el carrito de nuestro contexto
    const {carrito} = useVariableContext()

    //Procedemos a realizar la suma de los precios de cada articulo del carrito
    let suma = 0
    for (let i = 0; i < carrito.length; i++) {
      suma += carrito[i].price
    }

/*     carrito.forEach((elemento ,indice) => {
      console.log(`El ${elemento.product_name} se encuentra en el indice ${indice}`)  
    }) */

    const eliminarArticulo =(indiceArt)=>{
        const articuloEliminado = carrito.filter((articulo ,indice)=> {
            indice != indiceArt
        })
        console.log(articuloEliminado)
    }
    
    
  return (
    <div>
        <h2>Mi Carrito</h2>
        {
            carrito.map((articulo,indice)=>(
                <div key={indice}>
                    <h2>{articulo.product_name}  ${articulo.price}</h2>
                    <button onClick={()=>{eliminarArticulo(indice)}}>Eliminar</button>
                </div>
            ))
        }
        <h2>Total: ${suma}</h2>
    </div>
  )
}

export default Carrito