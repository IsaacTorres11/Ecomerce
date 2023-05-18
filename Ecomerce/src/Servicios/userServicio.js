import axios from "axios";

const Base_Url = 'http://localhost:3000'

const resgistroUsuarioServicio = (data) => axios.post(`${Base_Url}/register`, data)
const loginUsuarioServicio = (data) => axios.post(`${Base_Url}/login`, data)
const traeUsuario = (id)=>  axios.get (`${Base_Url}/users/${id}`)

export {
    resgistroUsuarioServicio,
    loginUsuarioServicio,
    traeUsuario
}


