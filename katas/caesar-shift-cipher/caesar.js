const caesar = (shift, value) => {
    const encrypted = value.split('')
    .map((symbol) => {
         return String.fromCharCode(symbol != 32 ? symbol.charCodeAt(0) + shift : '');
    })
    .join('');
    console.log('output', encrypted);
    return encrypted;
};

module.exports = {
    caesar
};