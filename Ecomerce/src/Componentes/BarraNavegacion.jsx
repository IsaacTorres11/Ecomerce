import {NavLink} from 'react-router-dom'

//importando la funcion que consume el contexto
import { useVariableContext } from '../Context/VariablesContext'
const BarraNavegacion = () => {

        
        const {busqueda,setBusqueda, autenticado, desconectado} = useVariableContext()

  /////////////// Funciones De Formulario /////////////

  //Funcion que maneja el Submit
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!busqueda.trim()){
      alert('debes ingresar un parametro de busqueda')
    }
  }

  //Funcion que maneja el Change cuando se escribe en el input
  const handleChange =(e)=>{
      setBusqueda (e.target.value)
  }

  ///////////////////////////////////////////////////
    

  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid p-3 ">
            <NavLink className="navbar-brand " to='/'>E-comerce</NavLink>
            <NavLink className="navbar-brand " to='/nosotros'>Nosotros</NavLink>

            <form className="d-flex" role="search" onSubmit={handleSubmit}>
            
            <input className="form-control me-2  " 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
            name = 'busqueda'
            value={busqueda}
            onChange={handleChange}/>
            
            <button className="btn btn-outline-success " type="submit">Search</button>
            </form>
            
            {
              autenticado === true ? (
                <>
                  <NavLink to="/perfil" > Usuario </NavLink>
                  <NavLink to="/" onClick={desconectado}> Salir </NavLink>
                  <NavLink to='/carrito'>Mi Carrito</NavLink>
                </>
              )
              :
              (
                <>
                  <NavLink to="/ingresar" > Ingresar</NavLink>
                  <NavLink to="/resgistro"> Registrarse</NavLink>
                </>
              )
            }
            
        </div>
        
    </nav>
  )
}

export default BarraNavegacion