const firstSymbol = 'A';
const lastSymbol = 'Z';
const caesar = (shift, value) => {


    const encrypted = value.split('')
    .map((symbol) => {
        
        return String.fromCharCode(
            symbol === ' ' ? symbol.charCodeAt(0) : getNextCharCode(symbol.charCodeAt(0), shift));
    })
    .join('');
    console.log('output', encrypted);
    return encrypted;
};

const getNextCharCode = (currentCharCode, shift) => {
    const shifted = currentCharCode + shift;
    const lastCharCode = lastSymbol.charCodeAt(0);
    if(shifted > lastCharCode){
        // need to determine how far past the last symbol we are
        const delta = shifted - (lastCharCode + 1);
        console.log(delta, 'delta', shifted, 'shifted', lastCharCode, 'lastCharCode');
        return firstSymbol.charCodeAt(0) + delta;
    }
    return shifted;
};

module.exports = {
    caesar
};