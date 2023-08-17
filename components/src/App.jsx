import Card from "./Card";
import React, { useState } from 'react';
import './App.css'

function App() {
  const [inputNombre, setInputNombre] = useState('');
  const [inputColor, setInputColor] = useState('');

  const [nombre, setNombre] = useState([]);
  const [color, setColor] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputNombreChange = (event) => {
    setInputNombre('')
    setInputColor('')
    setInputNombre(event.target.value);
  };
  const handleInputColorChange = (event) => {
    setInputColor(event.target.value);
  };

  const handleChange = () => {
    setNombre('');
    setColor('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputNombre && inputNombre.trim() !== '' && inputNombre.length >= 3 && inputColor && inputColor.trim() !== '' && inputColor.length >= 6) {
      setNombre([...nombre, inputNombre]);
      setColor([...color, inputColor]);
  
      setInputNombre('');
      setInputColor('');
      setErrorMessage('')
      
    }
    else{
      
      setInputNombre('');
      setInputColor('');
      setErrorMessage('Por favor chequea que la información sea correcta')
    }
   
  };

  return (
    <div className="class-form">
      <h1>Elige un color</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputNombre}
          onChange={handleInputNombreChange}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          value={inputColor}
          onChange={handleInputColorChange}
          placeholder="Ingresa tu color favorito (formato HEX)"
        />
        <button onClick={() => handleChange()} type="submit">Enviar</button>
      </form>
      
      <p style={{color:'red'}}>{errorMessage}</p>

      <Card nombre={nombre} color={color}/>
    </div>
  );
}

export default App;
