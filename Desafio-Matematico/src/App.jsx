import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

function App() {

  return (
    <>
     <div className='container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/nado.jpeg" width={250}/>
      <Card.Body>
        <Card.Title><h2>Desafío Matematico</h2></Card.Title>
        <Button variant="primary">Play</Button>
      </Card.Body>
    </Card>
     </div>
    </>
  )
}

export default App
