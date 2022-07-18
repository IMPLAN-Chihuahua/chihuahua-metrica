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

export { toTitleCase, serialize };