const firstUpperCase = 'A';
const firstLowerCase = 'a';
const lastUpperSymbol = 'Z';
const lastLowerCase = 'z';
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
    const lastCharCode = lastUpperSymbol.charCodeAt(0);

    console.log('shifted', shifted, lastCharCode);

    if(shifted > lastCharCode){
        const delta = shifted - (lastCharCode + 1);
        return firstUpperCase.charCodeAt(0) + delta;
    }
    return shifted;
};

module.exports = {
    caesar
};