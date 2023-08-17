import React from 'react';
import './Card.css'

const Card = (props) => {
  const styleColor = {
    backgroundColor: props.color,
  };
  return (
    <div className='card'>
      {props.nombre[0] && (

        <p>Hola {props.nombre}!</p>
      )}
      {styleColor.backgroundColor[0] && props.nombre[0] && (
        <div>
          <p>Este es tu color favorito</p>
          <div style={{height: '50px', backgroundColor: styleColor.backgroundColor }}>{props.color}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
