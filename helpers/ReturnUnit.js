const returnUnit = (idUnidad) => {
    let unit = '';

    switch (idUnidad) {
        case 24: unit = 'ha'; break;
        case 29: unit = 'X̅'; break;
        case 34: unit = '%'; break;
        case 35: unit = '%'; break;
        case 38: unit = '%'; break;
        case 39: unit = ' (posición)'; break;
        case 41: unit = ' (promedio)'; break;
        case 45: unit = ' (tasa)'; break;
        case 56: unit = ' (módulo)'; break;
        case 53: unit = ' (hogares)'; break;
        case 75: unit = ' (población)'; break;
        case 40:
    }

    return unit;
};



export { returnUnit };