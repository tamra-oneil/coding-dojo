const caesar = (shift, value) => {
    const firstSymbol = 'A';
    const lastSymbol = 'Z';
    const encrypted = value.split('')
    .map((symbol) => {
        
        return String.fromCharCode(symbol === ' ' ? symbol.charCodeAt(0) : getNextSymbol(symbol.charCodeAt(0)));
    })
    .join('');
    console.log('output', encrypted);
    return encrypted;
};

const getNextSymbol = (currentSymbol) => {
    //if(symbol.charCodeAt(0) + shift) > char code for Z
}

module.exports = {
    caesar
};