//Importamos usePrams para extraer el valor de la ruta dinamica
import {useParams} from "react-router-dom"

//Importamos nuestro contexto el cual esta dentro de un hook personalizado
import { useVariableContext } from "../Context/VariablesContext"

export const Especificaciones = () => {

  const articuloId = useParams()

  const context =  useVariableContext()

  //le hacemos un map a datosApi el cual esta dentro de context
  const filtro = context.datosApi.filter(art => art.id === articuloId.id )


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
