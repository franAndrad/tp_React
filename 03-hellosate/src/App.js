import React,{useEffect,useState} from "react";
import {Button} from "react-bootstrap";
import Titulo from "./components/Titulo";

function App() {
  
  const [cambio,setCambio] = useState('');
  const agregarCambios = () =>{
    setCambio('(from changed state)');
  }
  
  return (
    <div className="App">
      <Titulo titulo='my friend' msj={cambio}></Titulo>
      <Button onClick={()=>{agregarCambios()}}>Click me</Button>
    </div>
  );
}

export default App;
