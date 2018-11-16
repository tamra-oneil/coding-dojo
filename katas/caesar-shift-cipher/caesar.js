const caesar = (shift, value) => {
    const charCodeValue = value.charCodeAt(0)
    const returnCharCode = charCodeValue + 1
    console.log('char code of output', returnCharCode)

    return String.fromCharCode(returnCharCode);
};

module.exports = {
    caesar
};