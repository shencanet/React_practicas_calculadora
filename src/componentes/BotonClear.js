import React from "react";
import './Botonclear.css';

const BotonClear = (props) => (
    <div className='Boton-clear' onClick={props.manejarClear}>
      {props.children}
    </div>
  );
  
  export default BotonClear;