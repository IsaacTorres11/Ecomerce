//Creamos la estructura de nuestro hook personalizado 
//llamaos los hooks que nuestro hook va a usar
import { useEffect, useState } from "react"


//Nuestra funcion recibira como parameto una url el cual sera el valor por defecto
//esta url contendra la api que vamos a consumir 
function useApi (url){
    const [datosApi, setDatosApi] = useState([])
    useEffect(()=>{
        const ConsumirApi = async ()=>{
            try {
                const respuesta = await fetch(url)
                const datos = await respuesta.json()
                setDatosApi (datos)
            } catch (error) {
                console.log(error)
            }
        }
        ConsumirApi()
    },[url])

    //Esta funcion solo se ejecutara cada vez que el valor de la url cambie
    //Nuestra funcion va a regresar el estado que contiene los datos de la api en forma de arreglo
    return{
        datosApi
    }
}

export default useApi