//importamos Routes y Route de Router dom
import { Routes, Route } from "react-router-dom"

//Importamos los componentes a usar
import BarraNavegacion from "./Componentes/BarraNavegacion"
import Inicio from "./Componentes/Inicio"
import Especificaciones from "./Paginas/Especificaciones"


function App() {

  

  return (
    <>  
        <BarraNavegacion/>

        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/articulo/:id" element={<Especificaciones/>} />
        </Routes>

        
    </>
  )
}

export default App
