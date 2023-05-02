import { useState } from "react"
import { useVariableContext } from "../Context/VariablesContext"
const Ingresar = () => {

    const [usuario,setUsuario] = useState('')    

    const {usuarios} =  useVariableContext()
    console.log(usuarios)

////////// Funciones de manejo de formulario ////////////

const handleSubmit = (e) => {
    e.preventDefault()
}

const handleChange = (e) => {
    setUsuario(e.target.value)
}

  return (
    <div className="ingresar">
        <h2>Ingresa</h2>
        <form onSubmit={handleSubmit}>

            <input type="text" 
            placeholder="Correo o Usuario"
            name='usuario'/>

            <input type="password"  
            placeholder="contraseña"
            name='password'/>
            
            <button>Ingresar</button>
        </form>

    </div>
  )
}

export default Ingresar