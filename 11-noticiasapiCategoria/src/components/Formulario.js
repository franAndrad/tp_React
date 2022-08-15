import React , {useState} from 'react';
import { Form } from 'react-bootstrap';
import ListaNoticias from './ListaNoticias';
import Select from 'react-select';

const Formulario = () => {   

    const [arregloBusqueda,setArregloBusqueda] = useState([]);
    console.log(arregloBusqueda);

    const consultarAPI = async(e) => {
        const respuesta = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=6143153b8d194e92aaba35bea940974d');
        const dato = await respuesta.json();
        let arregloCategoriasBuscadas = dato.sources.filter((noticias)=>{return noticias.category === e.value});
        setArregloBusqueda(arregloCategoriasBuscadas);
    }
    
    const opciones = [
        {value: 'general' , label: 'general'},
        {value: 'science' , label: 'ciencia'},
        {value: 'technology' , label: 'tecnologia'},
    ];
    
    return (
        <div className='container '>
            <div className='mx-5 border '>
            <div className='border p-3'>
            <Form.Group className="row">
                <div className='col-12 col-md-4 col-lg-3 d-md-flex align-items-center justify-content-center'>
                    <Form.Label className=''>Buscar por categoria</Form.Label>
                </div>
                <div className='col-12 col-md-8 col-lg-9'>
                    <Select 
                    onChange={(e)=>{consultarAPI(e);}} options={opciones} defaultValue='general' />
                </div>
            </Form.Group>
                    </div>
            <ListaNoticias arregloBusqueda={arregloBusqueda}></ListaNoticias>
            </div>
        </div>
    );
};

export default Formulario;