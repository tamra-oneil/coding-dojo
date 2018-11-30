const caesar = (shift, value) => {
    const lastSymbol = 'Z';
    const encrypted = value.split('')
    .map((symbol) => {
        if (symbol != lastSymbol){
            console.log(symbol.charCodeAt('A'));
            return String.fromCharCode(symbol === ' ' ? symbol.charCodeAt(0) : symbol.charCodeAt(0) + shift);

        }
         return
    })
    .join('');
    console.log('output', encrypted);
    return encrypted;
};

module.exports = {
    caesar
};