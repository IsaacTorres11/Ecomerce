import { useNavigate } from 'react-router-dom'
import useFormulario from '../Hooks/useFormulario'
import {loginUsuarioServicio} from '../Servicios/userServicio'
import logo from '../assets/react.svg'
import '../Estilos/formulario.css'

import { useVariableContext } from '../Context/VariablesContext'

const Ingresar = () => {

    const {conectado} = useVariableContext()

    //useNavigate nos permite navagar a otra ruta 
    const navigate = useNavigate()

    const enviarDatos = async (data)=>{
        try {
            const respuesta = await loginUsuarioServicio(data)
            if (respuesta.status === 200){
                //La funcion ingresar viene del context y sirve para guardar el token en el localstorage
                conectado(respuesta.data.token)
                //Este dato permanece aun si el navegador se cierra y vuelve a abrir
                //window.localStorage.setItem('token', repsuesta.data.token)
                //console.log(respuesta.data.token)
                navigate('/perfil') 
            } 
        } 
        catch (error) {
            console.log( 'se produjo un error ', error.message)
        }
    }
    
    const {input,  handleSubmit , handleChange} = useFormulario(enviarDatos, {
        email: '',
        password: ''
    })



    return (
    <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Ingresar</h1>

            <div className="form-floating">
            <input type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
            name='email'
            value={input.email}
            onChange={handleChange}/>
            <label htmlFor="floatingInput">Email</label>
            </div>
            
            <div className="form-floating">
            <input type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password"
            name='password'
            value={input.password}
            onChange={handleChange}/>
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
    </main>
    )
}

export default Ingresar