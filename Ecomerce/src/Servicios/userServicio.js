import axios from "axios";

const Base_Url = 'http://localhost:3000'
const token = window.localStorage.getItem('token')


const resgistroUsuarioServicio = (data) => axios.post(`${Base_Url}/register`, data)

const crearArticulo = (data)=> axios.post(`${Base_Url}/items`, data, {
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}
})

const loginUsuarioServicio = (data) => axios.post(`${Base_Url}/login`, data)
const traeUsuario = (id)=>  axios.get (`${Base_Url}/users/${id}`)

export {
    resgistroUsuarioServicio,
    loginUsuarioServicio,
    traeUsuario,
    crearArticulo
}


