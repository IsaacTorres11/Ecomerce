import axios from "axios";

const Base_Url = 'http://localhost:3000'

//Si existe un token mandalo en la peticion 
axios.interceptors.request.use((config)=>{
    const token = window.localStorage.getItem('token')
    if (token){
        config.headers.Authorization = token `Barrer ${token}` 
    }
    return config
}, (error) =>{
    return Promise.reject(error)
}
)


const traeUnProducto  = (id) => axios.post(`${Base_Url}/items/${id}`)
const traeProductos = () => axios.post(`${Base_Url}/items`)

export {
    traeUnProducto,
    traeProductos
}