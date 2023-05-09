import {Link} from "react-router-dom"
import { useVariableContext } from "../Context/VariablesContext"

export const Inicio = () => {

    const {artFiltrado} = useVariableContext()

    const placeholderImage = 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

  return (
    <div className="contenedor-articulos ">
        
        {
            artFiltrado.map(articulo=>(
                <div className="articulo" key={articulo.id}>
                    <Link to={`/articulo/${articulo.id}`}>
                        <div className="image-art">
                            <img src={articulo.image || placeholderImage} alt="articulo" />
                        </div>
                        <div className="info-art">
                            <h2>{articulo?.product_name}</h2>
                            <p>{articulo?.description}</p>
                            <p> ${articulo?.price}</p>
                        </div>
                    </Link>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Inicio