import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center text-center m-5">
        <Card border="dark" className='w-50'>
          <Card.Header className='fs-3 '>Bienvenido</Card.Header>
          <Card.Body>
            <Formulario></Formulario>
          </Card.Body>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default App;
