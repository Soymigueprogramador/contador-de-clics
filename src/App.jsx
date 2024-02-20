import { useState } from 'react' 
import Boton from './components/boton/Boton.jsx'
import Contador from './components/contador/Contador.jsx'
import './App.css'

const App = () => {
  const [ numClics, setNumClics ] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics +1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <>
      <div className='contenedor-general'>
        <h1> Contador de clics </h1>
        <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
      </div>
    </>
  )
}

export default App