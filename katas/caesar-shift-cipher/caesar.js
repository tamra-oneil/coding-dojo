const firstSymbol = 'A';
const lastSymbol = 'Z';
const caesar = (shift, value) => {


    const encrypted = value.split('')
    .map((symbol) => {
        
        return String.fromCharCode(
            symbol === ' ' ? symbol.charCodeAt(0) : getNextCharCode(symbol.charCodeAt(0), shift));
    })
    .join('');
    return encrypted;
};

const getNextCharCode = (currentCharCode, shift) => {
    const shifted = currentCharCode + shift;
    const lastCharCode = lastSymbol.charCodeAt(0);
    if(shifted > lastCharCode){
        const delta = shifted - (lastCharCode + 1);

        return firstSymbol.charCodeAt(0) + delta;
    }
    return shifted;
};

module.exports = {
    caesar
};