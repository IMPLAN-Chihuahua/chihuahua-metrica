const numberWithCommas = (num) => {
    typeof num === 'object'  
        ? num 
        : num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return num;
};


export { numberWithCommas };