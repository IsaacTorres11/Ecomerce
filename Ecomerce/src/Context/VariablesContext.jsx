/*  context tiene que ver con el manejo de estados globales en react
Es decir poder compartir la misma informacion entre diferentes niveles de componentes

Para usar constx es necesario seguir la siguiente serie de pasos.

1- Crearemos el contexto
2- Crear un proveedor del contexto
*/

import { createContext, useState, useEffect} from "react";

//1.- Creacion del contexto, esto nos importara por defecto createContext de react
const VariableContext = createContext()

//2"Creacion del proveedor del contexto"
function VariableProvider(props){

    const [datosApi, setDatosApi] = useState([])
    const [articuloSeleccionado, setArticuloSeleccionado] = useState({})
    const url ='http://localhost:3000/items'

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
    },[])

    //3 Indicar al proveedor que datos vamos a compartir 
    //Estos datos seran publicos para todos los componente que esten dentro del proveedor
    const values ={
        datosApi,
        articuloSeleccionado,
        setArticuloSeleccionado
    }

}