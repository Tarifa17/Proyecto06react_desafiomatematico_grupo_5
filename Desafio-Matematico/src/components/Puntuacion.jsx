import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Puntuacion ({ puntos }) {
    return (
      <div>
        <h2>¡Juego terminado!</h2>
        <h3>Puntuación final: {puntos}</h3>
      </div>
    );
  };

  export default Puntuacion;


