import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemColor from './ItemColor';

const ListaColores = (props) => {
    return (
            <div className='row'>
                {props.arregloNombreColores.map(
                (item,posicion) => <ItemColor key={posicion} nombreColor={item} colorHex={props.arregloColoresHex[posicion]} borrarColor={props.borrarColor}></ItemColor>)
                }
            </div>
    );
};

export default ListaColores;