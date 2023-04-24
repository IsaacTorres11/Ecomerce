import {Link} from "react-router-dom"
import useApi from "../Hooks/useApi"
export const Inicio = () => {

    const url ='http://localhost:3000/items'

    const {datosApi}= useApi(url)

  return (
    <div className="contenedor-articulos ">
        {
            datosApi.map(articulo=>(
                <div className="articulo" key={articulo.id}>
                    <Link to={`/articulo/${articulo.id}`}>
                        <div className="image-art">
                            <img src={articulo?.image} alt="articulo" />
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