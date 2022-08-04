import './App.css';
import Boton from './componentes/Boton';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
    <div className='freecodecamp-logo-contenedor'>
    <img 
      src={freecodecamplogo}
      className='freecodecamo-logo'
      alt= 'Logo '
    />
    <div className='contenedor-calculadora'>
    <div className='fila'>
      <Boton>1</Boton>
      <Boton>+</Boton>
    </div>
    <div className='fila'></div>
    <div className='fila'></div>
    <div className='fila'></div>
    <div className='fila'></div>

    </div>

    </div>

    </div>
  );
}

export default App;
