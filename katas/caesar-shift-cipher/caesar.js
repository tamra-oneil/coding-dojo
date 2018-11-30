const firstSymbol = 'A';
const lastSymbol = 'Z';
const caesar = (shift, value) => {


    const encrypted = value.split('')
    .map((symbol) => {
        
        return String.fromCharCode(
            symbol === ' ' ? symbol.charCodeAt(0) : getNextSymbol(symbol.charCodeAt(0), shift));
    })
    .join('');
    console.log('output', encrypted);
    return encrypted;
};

const getNextSymbol = (currentCharCode, shift) => {
    if((currentCharCode + shift) > lastSymbol.charCodeAt(0)){
        return String.fromCharCode(firstSymbol.charCodeAt(0));
    }
};

module.exports = {
    caesar
};