
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
export const Especificaciones = () => {

  const articuloId = useParams()

  const [articulo,setArticulo] = useState ([])
  
  const url ='http://localhost:3000/items'


  useEffect(()=>{
    const apiArt = async()=>{
      try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        setArticulo(datos)
      } catch (error) {
        console.log(error)
      }
    }
    apiArt()
  },[])

  const filtro = articulo.filter(art => art.id === articuloId.id )


  return (
    <div>
        {
          filtro.map(elemento => (
            <div key={elemento.id}>
                <div>
                  <img src={elemento.image}/>
                </div>
                <div>
                  <h2>{elemento.product_name}</h2>
                  <h3>Descripcion: {elemento.description}</h3>
                  <h3>{elemento.category}</h3>
                  <h4>Sku: {elemento.sku}</h4>
                  <h3>${elemento.price}</h3>
                  <button>Comprar</button>
                </div>
            </div>
          ))
        }
    </div>
  )
}

export default Especificaciones
