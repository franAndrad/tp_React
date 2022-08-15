import React , {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaNoticias from './ListaNoticias';
import Select from 'react-select';

const Formulario = () => {   

    const categorias = [
        {value: 'general' , label: 'General'},
        {value: 'science' , label: 'Ciencia'},
        {value: 'technology' , label: 'Tecnologia'},
        {value: 'health', label: 'Salud'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'sports', label: 'Deporte'},
        {value: 'business', label: 'Negocios'},
    ];
    const paises = [
        {value: 'ar' , label: 'Argentina'},
        {value: 'at' , label: 'Austria'},
        {value: 'au', label: 'Australia'},
        {value: 'bg', label: 'Bulgaria'},
        {value: 'br', label: 'Brasil'},
        {value: 'ca', label: 'Canada'},
        {value: 'cn', label: 'China'},
        {value: 'co', label: 'Colombia'},
        {value: 'cu', label: 'Cuba'},
        {value: 'de', label: 'Alemania'},
        {value: 'fr', label: 'Francia'},
        {value: 'us', label: 'Estados Unidos'}
    ];
    
    const [arregloBusqueda,setArregloBusqueda] = useState([]);
    const [categoria,setCategoria] = useState(categorias[0].value);
    const [pais,setPais] = useState(paises[0].value);

    const consultarAPI = async() => {
        const respuesta = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=6143153b8d194e92aaba35bea940974d');
        const dato = await respuesta.json();
        let arregloCategoriasBuscadas = dato.sources.filter((noticias)=>{return noticias.category === categoria && noticias.country === pais});
        setArregloBusqueda(arregloCategoriasBuscadas);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        consultarAPI();
    }
    
    return (
        <div className='container '>
            <div className='mx-5 border '>
                <div className='border p-3'>
                <Form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-12 col-md-4 col-lg-3 d-md-flex align-items-center justify-content-center'>
                                <Form.Label className=''>Seleccione la categoria</Form.Label>
                            </div>
                            <div className='col-12 col-md-8 col-lg-9'>
                                <Select 
                                    onChange={(e)=>{setCategoria(e.value);}} options={categorias} defaultValue={categorias[0]}/>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12 col-md-4 col-lg-3 d-md-flex align-items-center justify-content-center'>
                                <Form.Label className=''>Seleccione el pais</Form.Label>
                            </div>
                            <div className='col-12 col-md-8 col-lg-9'>
                                <Select 
                                    onChange={(e)=>{setPais(e.value);}} options={paises} defaultValue={paises[0]}/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className=' my-4' type="submit">Buscar</Button>
                        </div>
                    </Form>
                </div>
            <ListaNoticias arregloBusqueda={arregloBusqueda}></ListaNoticias>
            </div>
        </div>
    );
};

export default Formulario;