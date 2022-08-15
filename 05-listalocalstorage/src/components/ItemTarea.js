import React from 'react';
import {ListGroup} from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between fs-6'>
            {props.tareaCargada}
            <a onClick={()=>props.borrarTarea(props.tareaCargada)}><i class="fa-solid fa-circle-xmark fs-5"></i></a>
        </ListGroup.Item>
    );
};

export default ItemTarea;