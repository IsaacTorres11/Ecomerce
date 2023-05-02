//importamos nuestro provider
import { VariableProvider } from "./Context/VariablesContext"

//importamos Routes y Route de Router dom
import { Routes, Route } from "react-router-dom"

//Importamos los componentes a usar
import BarraNavegacion from "./Componentes/BarraNavegacion"
import Inicio from "./Componentes/Inicio"
import Especificaciones from "./Paginas/Especificaciones"
import Ingresar from "./Componentes/Ingresar"


function App() {
  return (
    <>  
    <VariableProvider>
      
      <BarraNavegacion/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/articulo/:id" element={<Especificaciones/>} />
        <Route path="/ingresar" element={<Ingresar />}/>
      </Routes>
      
    </VariableProvider>
        

        
    </>
  )
}

export default App
