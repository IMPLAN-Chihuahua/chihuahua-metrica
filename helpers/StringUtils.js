import { isUndefined } from "./ObjectUtils";

const toTitleCase = (str) => {
    //check if str is an array and take the first element

    if (Array.isArray(str)) {
        str = str[0];
    }


    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};

const serialize = (obj) => {
    let str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p) && !isUndefined(obj[p]) && obj[p] !== null) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
    }

    return str.length === 0 ? '' : `&${str.join('&')}`;
};

const toUnderScoreCase = (str) => {
    // replace white spaces with underscore
    return str.replace(/\s/g, '_');
};

const assignMonths = (months) => {
    const monthsArray = months.split(',');

    for (let i = 0; i < monthsArray.length; i++) {
        monthsArray[i] = monthsArray[i].trim();
    }

    const totalMonths = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

    const monthsObject = monthsArray.map((month) => {
        if (months.includes(month)) {
            return {
                month: month,
                index: totalMonths.indexOf(month) + 1,
                selected: true
            }
        }
    });

    return monthsObject;
}

const hexAsRGBA = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
};

const usefulString = (descripcion) => {
    const definition = descripcion.replace('Los indicadores que se presentan ', '');

    if (definition.length > 130) {
        const ellipsis = definition.substring(0, 130) + '...';
        return ellipsis.charAt(0).toUpperCase() + ellipsis.slice(1);
    }
    return definition.charAt(0).toUpperCase() + definition.slice(1);
}

const isNA = (value) => {
    return value === 'NA' || value === 'N/A' || value === 'n/a' || value === 'Na' ? 'Sin definir' : value;
}

export { toTitleCase, serialize, toUnderScoreCase, assignMonths, hexAsRGBA, usefulString, isNA };