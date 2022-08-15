import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const Noticia = (props) => {

    const  redireccionar = () => {
        window.location.assign(props.noticia.url);
    }
    
    return (
    <div className=' col-lg-4 col-md-6 col-12 my-3 card-group'>
        <Card>
            <Card.Body>
                <Card.Title>{props.noticia.name}</Card.Title>
                <Card.Text> {props.noticia.description}
                </Card.Text>
            </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    <Button variant="primary" onClick={()=>{redireccionar()}} >ver noticias completas</Button>
                </Card.Footer>
        </Card>
    </div>
    );
};

export default Noticia;