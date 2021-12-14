const { expect } = require('chai')
const { encrypt, decrypt } = require('./crypto')

describe('Encryption', function() {

   it('should encrypt text', () => {
      let text = "apple"

      let result = encrypt(text)
      expect(result).to.equal('71f330fe71')
   })

   it('should decrypt text', () => {
      let text = '71f330fe71'

      let result = decrypt(text)
      expect(result).to.equal('apple')
   })
})