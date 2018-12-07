const firstUpperSymbol = 'A';
const firstLowerSymbol = 'a';
const lastUpperSymbol = 'Z';
const lastLowerSymbol = 'z';
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
    console.log(currentCharCode);
    const shifted = currentCharCode + shift;
    console.log(shifted);
    const lastUpperCode = lastUpperSymbol.charCodeAt(0);
    const lastLowerCode = lastLowerSymbol.charCodeAt(0);

    if(shifted > lastUpperCode){
        const delta = shifted - (lastUpperCode + 1);
        return firstUpperSymbol.charCodeAt(0) + delta;
    } else if (shifted > lastLowerCode) {
        console.log(lastLowerCode);
        const delta = shifted - (lastLowerCode + 1);
        return firstLowerSymbol.charCodeAt(0) + delta;
    }
// We have a trouble with last test
    return shifted;
};

module.exports = {
    caesar
};