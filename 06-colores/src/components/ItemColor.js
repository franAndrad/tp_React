import React from 'react';
import { Card , Button} from 'react-bootstrap';
import "./colores.css"

const ItemColor = (props) => {

    return (
    <div className='col-4 my-2'>
            <Card border="dark" className='' >
                <Card.Header className='fs-7 text-start'>{props.nombreColor}</Card.Header>
                <Card.Body className='d-flex justify-content-center'>
                    <div className='color' style={{backgroundColor: props.colorHex}}>
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-end'>
                    <Button variant='danger' onClick={()=>{props.borrarColor(props.nombreColor,props.colorHex)}}>Borrar</Button>
                </Card.Footer>
            </Card>
    </div>
    );
};

export default ItemColor;