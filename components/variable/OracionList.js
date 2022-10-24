import React from 'react'
import Oracion from './Oracion';

const OracionList = ({ oraciones }) => {
    return (
        <>{
            oraciones.map((oracion, index) => {
                return (
                    <ul>
                        <Oracion expr={oracion} key={index} />
                    </ul>
                );
            })}
        </>
    );
};

export default OracionList;