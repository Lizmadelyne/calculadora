import React from 'react';
import './styles/Boton.css';
 function Boton (props) {

   //si el valor no es un numero, ni un unto, ni un igual entonces es un operador
   const esOperador = valor =>{
      return isNaN(valor) && (valor !== '.') && (valor !== '=')
   };

    return(
        <div  className={`boton-contenedor ${esOperador(props.children) ? 'operador': null}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}
        >
           {props.children}
        </div>
    )
 }
 export default Boton;