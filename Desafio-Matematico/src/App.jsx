import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import React, { useState } from 'react';
import SumaResta from './components/SumaResta';

function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  const VerificarClick = () => {
    setIsPlaying(true); 
  };

  return (
    <>
    {isPlaying ? (
        <SumaResta />
      ) : (
     <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/nado.jpeg" width={250}/>
      <Card.Body>
        <Card.Title><h2>Desafío Matematico</h2></Card.Title>
        <Button variant="primary" onClick={VerificarClick}>Play</Button>
      </Card.Body>
    </Card>
     </div>
      )}
      </>
  )
}

export default App
