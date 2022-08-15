import React, {useState,useEffect} from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import ListaColores from './ListaColores';

const Formulario = () => {
    
    let nombresColorLocalStorage = JSON.parse(localStorage.getItem('listaColoresNombre')) || [];
    let hexColorLocalStorage = JSON.parse(localStorage.getItem('listaColoresHex')) || [];

    const [arregloNombreColores,setArregloNombreColores] = useState( nombresColorLocalStorage);
    const [nombreColor,setNombreColor] = useState('');
    const [arregloColoresHex,setArregloColoresHex] = useState(hexColorLocalStorage);
    const [colorHex,setColorHex] = useState('#000000');
    
    useEffect(()=>{
        localStorage.setItem('listaColoresNombre',JSON.stringify(arregloNombreColores));
        localStorage.setItem('listaColoresHex',JSON.stringify(arregloColoresHex));
    },[arregloNombreColores],[arregloColoresHex])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setArregloNombreColores([...arregloNombreColores,nombreColor])
        setArregloColoresHex([...arregloColoresHex,colorHex]);
        setNombreColor('');
        setColorHex('#000000');
    }
    
    const borrarColor = (color,hex) => {
        let arregloModificadoNombreColores = arregloNombreColores.filter((valor)=>{return valor !== color});
        let arregloModificadoColoresHex = arregloColoresHex.filter((valor)=>{return valor !== hex});
        setArregloNombreColores(arregloModificadoNombreColores);
        setArregloColoresHex(arregloModificadoColoresHex);
    }
    
    return (
    <div className='container'>
        <Form onSubmit={handleSubmit}>
            <Card border="dark" className=''>
                <Card.Header className='fs-5 text-start'>Administrar Colores</Card.Header>
                <Card.Body className='d-flex align-items-center my-4'>
                    <input 
                    type="color" 
                    className='me-3 form-control form-control-color'
                    value={colorHex}
                    onChange={(e)=>{setColorHex(e.target.value.trimStart())}}
                    required
                    />
                    <Form.Control 
                    size='lg'
                    type="text" placeholder='Ingrese nombre del color'
                    onChange={(e)=>{setNombreColor(e.target.value.trimStart())}}
                    value={nombreColor}
                    required
                    />
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button type='submit'>Guardar</Button>
                </Card.Footer>
            </Card>
        </Form>
        <br />
        <ListaColores arregloNombreColores={arregloNombreColores} arregloColoresHex={arregloColoresHex} borrarColor={borrarColor}></ListaColores>
    </div>
    );
};

export default Formulario;