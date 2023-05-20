import logo from '../assets/react.svg'
import useFormulario from '../Hooks/useFormulario'
import {crearArticulo} from '../Servicios/userServicio'
import { useNavigate } from 'react-router-dom'

const CrearArtiuclo = () => {

    const navigate = useNavigate()

const enviarDatos = async(data)=>{
    
    try {
        const respuesta = await crearArticulo(data)
        if(respuesta.status === 200){
            navigate('/')
        }
    } catch (error) {
        console.log(error)
    }
}

const {input,  handleSubmit , handleChange} = useFormulario( enviarDatos, {
    product_name: '',
    description: '',
    price: '',
    category: ''
})



  return (
    <div className="crearArt">
        <form onSubmit= {handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h2 className="h3 mb-3 fw-normal">Crear Articulo</h2>

            <div className="form-floating">
            <input type="text" 
            className="form-control" 
            id="product_name" 
            placeholder="Article"
            name='product_name'
            value= {input.product_name}
            onChange= {handleChange}/>

            <label htmlFor="product_name">Nombre De Articulo</label>
            </div>

            <div className="form-floating">
            <input type="text" 
            className="form-control" 
            id="description" 
            placeholder="Description" 
            name='description'
            value= {input.description}
            onChange={handleChange}/>

            <label htmlFor="description">Descripcion</label>
            </div>


            <div className="form-floating">
            <input type="number" 
            className="form-control" 
            id="price" 
            placeholder="100.00"
            name='price'
            value= {input.price}
            onChange={handleChange}/>

            <label htmlFor="price">Precio </label>
            </div>

            <div className="form-floating">
            <input type="text" 
            className="form-control" 
            id="category" 
            placeholder="category"
            name='category'
            value= {input.category}
            onChange= {handleChange}/>
           
            <label htmlFor="category">Categoria</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Crear</button>
            
        </form>
    </div>
  )
}

export default CrearArtiuclo