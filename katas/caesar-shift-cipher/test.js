const assert = require('assert');
const { caesar } = require('./caesar');

describe('Caesar Shift Cipher', () => {

  context('when shift is 1', () => {

    it('should shift A to B', () => {
        const result = caesar(1, 'A')
        assert.equal(result, 'B')
    })
  })
});
