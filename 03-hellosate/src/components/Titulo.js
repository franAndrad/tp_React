import React from 'react';

const Titulo = (props) => {
    return (
        <div>
            <h1>Hello {props.titulo} {props.msj}!</h1>
        </div>
    );
};

export default Titulo;