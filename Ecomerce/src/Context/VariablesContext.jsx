/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/*  context tiene que ver con el manejo de estados globales en react
Es decir poder compartir la misma informacion entre diferentes niveles de componentes

Para usar constx es necesario seguir la siguiente serie de pasos.

1- Crearemos el contexto
2- Crear un proveedor del contexto
3- Indicar al proveedor que datos vamos a compartir 
*/

import { createContext, useState, useEffect, useContext} from "react";

//importamos la libreria para decoficar los tokens
import jwt_decode from "jwt-decode";
import Carrito from "../Componentes/Carrito";

//1.- Creacion del contexto, esto nos importara por defecto createContext de react
const VariableContext = createContext()

//2"Creacion del proveedor del contexto"
function VariableProvider(props){

 ////////////////////////// Guardando el token en el localStorage y funciones de conectado y Desconectado ////////////////////   
    //se crea un estado para validar si el usuario esta autenticado el cual iniciara como falso
    const [autenticado, setAutenticado] = useState(false)
    //Creamos un estado para guardar el token decodificado del usuario
    const [usarioPayload, setUsuarioPayload] = useState(null)

    const conectado = (token)=> {
        window.localStorage.setItem ('token', token)
        const decodificado = jwt_decode(token)
        setUsuarioPayload(decodificado)
        setAutenticado(true)
    }

    const desconectado =()=>{
        //borammos el token del localstorage por medio de la clave que se le asigna token
        window.localStorage.removeItem('token')
        setUsuarioPayload (null)
        setAutenticado (false)
    }

    // Si el usuario cierra la pestaña o el navegador y no ha cerrado su sesion, 
    // el token se decodificara automaticamente al abrir nuevamente la aplicacion 
    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if (token){
            const decodificado = jwt_decode(token)
            setUsuarioPayload(decodificado)
            setAutenticado(true)
        }
    },[])

/////////////////////// Se finaliza la parte del token en el localStorage //////////////////

////////////////////////// Consumiendo la Api en los articulos///////////////////
    const [datosApi, setDatosApi] = useState([])
    const url ='http://localhost:3000'

    useEffect(()=>{
        const ConsumirApi = async ()=>{
            try {
                const respuesta = await fetch(`${url}/items`)
                const datos = await respuesta.json()
                setDatosApi (datos)
            } catch (error) {
                console.log(error)
            }
        }


        
        ConsumirApi()
    },[])
///////////////////////// Terminamos de consumir la Api //////////////////////////



///////////// Estado del Formulario Busqueda para el componente barra de navegacion //////////////////////
    const [busqueda, setBusqueda] = useState ('')

    // Se crea un filtrado para la busqueda de articulos 

    const artFiltrado = datosApi.filter(articulo => {
        if (busqueda == ''){
            return datosApi
        }
        else if (articulo.product_name.toLowerCase().includes(busqueda.toLowerCase())){
            return articulo
        }
    })

/////////////////////  Se finaliza con la funcionalidad de busqueda de articulos ///////////////////

////////////////////////// Se incia con el carrito de compras ////////////////////////////////

    const [carrito, setCarrito] = useState([])

    // se crea la funcion comprar
    const comprar = (articulo) =>{
        setCarrito([...carrito, articulo])
    }

       





    //3 Indicar al proveedor que datos vamos a compartir 
    //Estos datos seran publicos para todos los componente que esten dentro del proveedor
    // Para esto creamos unsta constate la cual va almacenar la informacion que sera de propoiedad global 
    const values ={
        //Estos son los valores que se comparten para la busqueda de los articulos 
        artFiltrado,
        busqueda,
        setBusqueda,
        // estos son los valores que se comparten para la validacion de conexion del usuario
        autenticado,
        usarioPayload,
        conectado,
        desconectado,
        //estos son los valores para el carrito
        comprar,
        carrito
    }

    //4 Retonamos una funcion con los valores qwue seran globales en este caso Values
    //siempre se llamara value el prop del provider con la data 
    //Value es un objeto que indica que datos son globales 
    return (
        <VariableContext.Provider value={values} > 
            {props.children}
        </VariableContext.Provider>
    )
}

//5 Procedemos a crear el consumidor del contexto 
//Para consumir el contexto debemos crear un hok perosnalizado 
//Brindamos el accemos a la informacion del contexto 
const useVariableContext =()=>{
    const context = useContext(VariableContext)
    return context
}

//6 Exportamos el contexto y provider
export {
    VariableContext, 
    VariableProvider,
    useVariableContext
} 

//7 Ir al componente superior y envolver a los componentes que haran uso del contexto con el componente que creamos 
// <<VariableContext.Provider >