import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';

function SumaResta(){

    const [intento, setIntento] = useState(1);

    const VerificarClick= () =>{
        setIntento(prevIntento => prevIntento + 1);
    };

    return(
        <>
     <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/nado.jpeg" width={250}/>
      <Card.Body>
        <Card.Title><h2>Aqui va el ejercicio</h2></Card.Title>
        <Button variant="primary" onClick={VerificarClick}>Verificar Resultado</Button>
        <Button variant="primary">Siguiente Desafío</Button>
        <Card.Text>
          <h6>Puntuación:</h6>
          <h6>Intento: {intento}</h6>
        </Card.Text>

      </Card.Body>
    </Card>
     </div>
    </>
    )
}

export default SumaResta;