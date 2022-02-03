const numberWithCommas = (num) => {
    typeof num === 'string' || num === 'number'
        ? num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : num 
    return num;
};


export { numberWithCommas };