import { useNavigate } from 'react-router-dom'
import logo from '../assets/react.svg'
import '../Estilos/formulario.css'
import useFormulario from '../Hooks/useFormulario'
import {resgistroUsuarioServicio} from '../Servicios/userServicio'


const Registro = () => {
//Navigate nos permite navegar hacia el login
const navigate = useNavigate()

const enviarDatos = async (data)=>{
    try {
        const respuesta = await resgistroUsuarioServicio(data)
        if (respuesta.status === 201){
            navigate('/ingresar')
        } 
    } 
    catch (error) {
        console.log( 'se produjo un error ', error.message)
    }
}

const {input,  handleSubmit , handleChange} = useFormulario( enviarDatos, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
})



    

  return (
    <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Registro</h1>

            <div className="form-floating">
            <input type="text" 
            className="form-control" 
            id="first_name" 
            placeholder="Jhon"
            name='first_name'
            value= {input.first_name}
            onChange={handleChange}/>

            <label htmlFor="first_name">Nombre</label>
            </div>

            <div className="form-floating">
            <input type="text" 
            className="form-control" 
            id="last_name" 
            placeholder="Apellido"
            name='last_name'
            value= {input.last_name}
            onChange={handleChange}/>

            <label htmlFor="last_name">Apellido</label>
            </div>

            <div className="form-floating">
            <select className="form-select"
            id="gender"
            name="gender"
            value= {input.gender}
            onChange={handleChange}>
                <option value="">Seleccionar ...</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>

            <label htmlFor="gender">Genero</label>
            </div>


            <div className="form-floating">
            <input type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
            name='email'
            value= {input.email}
            onChange={handleChange}/>

            <label htmlFor="floatingInput">Email </label>
            </div>

            <div className="form-floating">
            <input type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password"
            name='password'
            value= {input.password}
            onChange={handleChange}/>
           
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Resgistrarse</button>
            
        </form>
    </main>
  )
}

export default Registro