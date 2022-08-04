import './App.css';
import Boton from './componentes/Boton';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';

function App() {
   const [input, setinput] = useState('Hola');
   const agregarInput = val => {
        setinput(input + val);

   };



  return (
    <div className="App">
    <div className='freecodecamp-logo-contenedor'>
    <img 
      src={freecodecamplogo}
      className='freecodecamo-logo'
      alt= 'Logo '
    />
    <div className='contenedor-calculadora'>
    <Pantalla input={input} />
    <div className='fila'>
      <Boton manejarClic={agregarInput}>1</Boton>
      <Boton manejarClic={agregarInput}>2</Boton>
      <Boton manejarClic={agregarInput}>3</Boton>
      <Boton manejarClic={agregarInput}>+</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic={agregarInput}>4</Boton>
      <Boton manejarClic={agregarInput}>5</Boton>
      <Boton manejarClic={agregarInput}>6</Boton>
      <Boton manejarClic={agregarInput}>-</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic={agregarInput}>7</Boton>
      <Boton manejarClic={agregarInput}>8</Boton>
      <Boton manejarClic={agregarInput}>9</Boton>
      <Boton manejarClic={agregarInput}>*</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic={agregarInput}>=</Boton>
      <Boton manejarClic={agregarInput}>0</Boton>
      <Boton manejarClic={agregarInput}>.</Boton>
      <Boton manejarClic={agregarInput}>/</Boton>
    </div>

    <div className='fila'>
      <BotonClear>Clear</BotonClear>
    </div>

    </div>

    </div>

    </div>
  );
}

export default App;
