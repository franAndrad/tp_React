import React from 'react';
import EmpleadoRow from './EmpleadoRow'
import Avatar1 from '../img/avatar1.webp'
import Avatar2 from '../img/avatar2.webp'
import Avatar3 from '../img/avatar3.webp'
import Avatar4 from '../img/avatar4.webp'
import Avatar5 from '../img/avatar5.webp'
import Avatar6 from '../img/avatar6.webp'
import Avatar7 from '../img/avatar7.webp'
import Avatar8 from '../img/avatar8.webp'
import Avatar9 from '../img/avatar9.webp'


const EmpleadoList = () => {

    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: Avatar1 },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: Avatar2 },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: Avatar3 },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: Avatar4 },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: Avatar5 },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: Avatar6 },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: Avatar7 },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: Avatar8 },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: Avatar9 },
    ]
            
    return (
        <div>
        {
            empleados.map((contenido,posicion) => <EmpleadoRow contenido={contenido} key={posicion}></EmpleadoRow>)
        }
        </div>
    );
};

export default EmpleadoList;