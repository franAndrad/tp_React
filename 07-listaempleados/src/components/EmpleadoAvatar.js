import React from 'react';

import './empleadoAvatar.css'

const EmpleadoAvatar = (props) => {

    return (
        <div>
            <img src={props.contenido.pic} className='rounded-circle' alt={props.contenido.fullName} />
        </div>
    );
};

export default EmpleadoAvatar;