import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar'

const EmpleadoRow = (props) => {
    return (
        <div className='border p-2'>
        <div className='row my-2 align-items-center w-100'>
            <div className='col-4'>
                <EmpleadoAvatar contenido={props.contenido}></EmpleadoAvatar>
            </div>
            <div className='col-8'>
                <h3 className='fs-5'>{props.contenido.fullName}</h3>
                <div>
                    <p>{props.contenido.title}<span className="badge text-bg-info mx-2">{props.contenido.department}</span></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default EmpleadoRow;