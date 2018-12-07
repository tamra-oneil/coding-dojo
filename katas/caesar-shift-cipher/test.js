const assert = require('assert');
const { caesar } = require('./caesar');

describe('Caesar Shift Cipher', () => {

  context('when shift is 1', () => {

    it('should shift A to B', () => {
        const result = caesar(1, 'A');
        assert.equal(result, 'B');
    });

    it('should shift "AB" to "BC"', () => {
        const result = caesar(1, 'AB');
        assert.equal(result, 'BC');
    });

    it('should shift "AC" to "BD"', () => {
      const result = caesar(1, 'AC');
      assert.equal(result, 'BD');
    });

    it('should shift "AC F" to "BD G"', () => {
      const result = caesar(1, 'AC F');
      assert.equal(result, 'BD G');
    });
  });

    context('when shift is 2', () => {
        it('should shift AB to CD', () => {
            const result = caesar(2, 'AB');
            assert.equal(result, 'CD');
        });
    });

    context('when shift moves past the last symbol', () => {
        it('should shift Z to A', () => {
            const result = caesar(1, 'Z');
            assert.equal(result, 'A');
        })
        it('should shift Y to A', () => {
            const result = caesar(2, 'Y');
            assert.equal(result, 'A');
        })
        it('should shift Z to C', () => {
            const result = caesar(3, 'Z');
            assert.equal(result, 'C');
        })
        it('should shift some words ', () => {
            const result = caesar(5, 'Your');
            console.log(result);
            assert.equal(result, 'DTZW')
        })
    })
});
