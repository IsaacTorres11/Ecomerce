import { traeUsuario } from "../Servicios/userServicio"
import { useVariableContext } from "../Context/VariablesContext"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Perfil = () => {

const [infoUsuario, setInfoUsuario] = useState({})
const {usarioPayload} = useVariableContext()

useEffect(()=>{
  const infoUser = async()=>{
    try {
      const respuesta = await traeUsuario(usarioPayload.id)
      if (respuesta.status === 200) {
        setInfoUsuario(respuesta.data)
      }
    } catch (error) {
      console.log('Ocurrio un error ', error)
    }
  }
  infoUser()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

console.log(infoUsuario)
const imageAdmin = 'https://th.bing.com/th/id/OIP.ezuAHg1252penfhEIJKZdAAAAA?pid=ImgDet&w=256&h=256&rs=1'


  return (
    <div>
      
      <div>
        <img src={imageAdmin} alt="" />
      </div>
    
        <h2>Perfil</h2>
        {
          infoUsuario?.role && <p>Role User: {infoUsuario.role}</p>
        }

        {
          infoUsuario.role === 'ADMIN' ? 
          (
            <NavLink to='/crear-articulo'>Crear Articulo</NavLink>
          )
          :
          (
            <NavLink to='/carrito'>Mi Carrito</NavLink>
          )
        }

        {
          infoUsuario?.first_name && <p>First Name: {infoUsuario.first_name}</p>
        }
        {
          infoUsuario?.last_name && <p>First Name: {infoUsuario.last_name}</p>
        }
        {
          infoUsuario?.gender && <p>First Name: {infoUsuario.gender}</p>
        }
        {
          infoUsuario?.email && <p>First Name: {infoUsuario.email}</p>
        }

        

    </div>
  )
}

export default Perfil