import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import Boton from './componentes/Boton.js'
import Contador from './componentes/Contador'
import { useState } from 'react';


function App() {
  const[numClics, setNumClics]= useState (0);
  

  const manejarClic =()=>{
    setNumClics(numClics + 1);
  };

  const reiniciarClic =()=>{
    setNumClics(0);
  };

  return (
    <div className="App">
      
      <div className="freeCodeCamp-logo-contenedor">
        
        <img 
          className='freeCodeCampLogo'
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'
        />
        
        <div className='contenedor-principal'>
          <Contador 
            numClics={numClics}
          /> 
          
          <Boton
            texto='Click'
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />

          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarClic}
            />

          
        </div>

        


        





      </div>
      
    </div>
  );
}

export default App;
