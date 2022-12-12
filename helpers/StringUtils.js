import { isUndefined } from "./ObjectUtils";

const toTitleCase = (str) => {
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

export { toTitleCase, serialize, toUnderScoreCase, assignMonths };