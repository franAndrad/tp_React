import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import ListaTarea from './ListaTarea';

const Formulario = () => {

let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];

const [arregloTareas,setArregloTareas] = useState(tareasLocalStorage);
const [tarea,setTarea] = useState('');

useEffect(()=>{     
    localStorage.setItem('listaTareas',JSON.stringify(arregloTareas));
},[arregloTareas])

const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTareas,tarea]);
    setTarea('');
}

const borrarTarea = (nombre) => {
    let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombre});
    setArregloTareas(arregloModificado);
}

    return (
        <div>
        <Form onSubmit={handleSubmit}>
            <div>
            <Form.Label column="lg" >Ingresa tus tareas</Form.Label>
            </div>
            <Form.Control 
            size="lg" 
            type="text"
            onChange={(e)=>setTarea(e.target.value.trimStart())}
            placeholder="Tarea 1..." className="my-2 fs-6"
            value={tarea}
            />
        </Form>
        <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTarea>
        </div>
    );
};

export default Formulario;