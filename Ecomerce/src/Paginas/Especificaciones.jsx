//Importamos usePrams para extraer el valor de la ruta dinamica
import {useParams} from "react-router-dom"

//Importamos nuestro contexto el cual esta dentro de un hook personalizado
import { useVariableContext } from "../Context/VariablesContext"

export const Especificaciones = () => {

  const articuloId = useParams()

  const {artFiltrado, comprar } =  useVariableContext()
  

  /* console.log(context.artFiltrado) */
  //le hacemos un map a datosApi el cual esta dentro de context
  const filtro = artFiltrado.filter(art => art.id === articuloId.id )

  const placeholderImage = 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

  return (
    <div>
        {
          filtro.map(elemento => (
            <div key={elemento.id}>
                <div>
                  <img src={elemento.image || placeholderImage} alt="articulo"/>
                </div>
                <div>
                  <h2>{elemento.product_name}</h2>
                  <h3>Descripcion: {elemento.description}</h3>
                  <h3>{elemento.category}</h3>
                  <h4>Sku: {elemento.sku}</h4>
                  <h3>${elemento.price}</h3>
                  <button onClick={()=>{comprar(elemento)}}>Comprar</button>
                </div>
            </div>
          ))
        } 
    </div>
  )
}

export default Especificaciones
