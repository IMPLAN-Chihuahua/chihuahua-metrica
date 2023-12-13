import React from 'react'
import Oracion from './Oracion';

const OracionList = ({ oraciones }) => {
    return (
        <ul>{
            oraciones.map((oracion, index) => {
                return (
                    <Oracion expr={oracion} key={index} />
                );
            })}
        </ul>
    );
};

export default OracionList;