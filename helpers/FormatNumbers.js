const numberWithCommas = (num) => {
    try {
        // num = parseFloat(num);
        // num = Math.round(num * 100) / 100
        return commify(num);
    } catch (err) {
        typeof num === 'string' || num === 'number'
            ? num = commify(num)
            : num
        return num;
    }
};


function commify(n) {
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
}

export { numberWithCommas };