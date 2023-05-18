import { traeUsuario } from "../Servicios/userServicio"
import { useVariableContext } from "../Context/VariablesContext"
import { useEffect, useState } from "react"


const Perfil = () => {

const [infoUsuario, setInfoUsuario] = useState({})
const {usarioPayload} = useVariableContext()

useEffect(()=>{
  const infoUser =async()=>{
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

  return (
    <div>
        <h2>Perfil</h2>
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