const caesar = (shift, value) => {
    let charCodeValues = value.split('').map((symbol) => {
         return symbol.charCodeAt(0) + shift;
    });
    charCodeValues = charCodeValues.join('');
    console.log('char code of output', charCodeValues);


    return String.fromCharCode(charCodeValues);
};

module.exports = {
    caesar
};