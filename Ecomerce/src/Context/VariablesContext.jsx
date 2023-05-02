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

//1.- Creacion del contexto, esto nos importara por defecto createContext de react
const VariableContext = createContext()

//2"Creacion del proveedor del contexto"
function VariableProvider(props){


    //////////////// Consumiendo la Api ///////////////////
    const [datosApi, setDatosApi] = useState([])
    const [usuarios, setUsuarios] = useState([])

    const urlItems ='http://localhost:3000/items'
    const urlUsers ='http://localhost:3000/users'

    useEffect(()=>{
        const ConsumirApi = async ()=>{
            try {
                const respuesta = await fetch(urlItems)
                const datos = await respuesta.json()
                setDatosApi (datos)
            } catch (error) {
                console.log(error)
            }
        }

        const ConsumirUsers = async () => {
            try {
                const respuestaUsers = await fetch(urlUsers)
                const datosUsers = await respuestaUsers.json()
                setUsuarios(datosUsers)
            } catch (error) {
                console.log(error);
            }
        }
        ConsumirApi()
        ConsumirUsers()
    },[])

    ///////////////////////// Terminamos de consumir la Api //////////////////////////

    ///////////// Estado del Formulario Busqueda //////////////////////
    const [busqueda, setBusqueda] = useState ('')
    //////////////////////////////////////////////////////////////////

    // Se crea un filtrado para la busqueda de articulos 

    const artFiltrado = datosApi.filter(articulo => {
        if (busqueda == ''){
            return datosApi
        }
        else if (articulo.product_name.toLowerCase().includes(busqueda.toLowerCase())){
            return articulo
        }
    })



    //3 Indicar al proveedor que datos vamos a compartir 
    //Estos datos seran publicos para todos los componente que esten dentro del proveedor
    // Para esto creamos unsta constate la cual va almacenar la informacion que sera de propoiedad global 
    const values ={
        artFiltrado,
        busqueda,
        setBusqueda,
        usuarios
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
    VariableProvider,
    useVariableContext
} 

//7 Ir al componente superior y envolver a los componentes que haran uso del contexto con el componente que creamos 
// <<VariableContext.Provider >