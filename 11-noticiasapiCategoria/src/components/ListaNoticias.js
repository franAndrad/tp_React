import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = (props) => {
    return (
        <div className='container'>
            <div className='row my-3'>
            {
                props.arregloBusqueda.map((item,posicion)=>
                <Noticia key={posicion} noticia={item}></Noticia>
                )
            }
            </div>
        </div>
    );
};

export default ListaNoticias;