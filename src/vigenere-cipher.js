const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let res = '';
    let ind = 0;
    for (let i = 0; i < msg.length; i += 1) {
      const char = msg[i];
      if (char >= 'A' && char <= 'Z') {
        const charCode = char.charCodeAt(0) - 65;
        const keyCode = k[ind % k.length].charCodeAt(0) - 65;
        const newChar = String.fromCharCode(((charCode + keyCode) % 26) + 65);
        res += newChar;
        ind += 1;
      } else {
        res += char;
      }
    }
    if (this.direction) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let res = '';
    let ind = 0;
    for (let i = 0; i < msg.length; i += 1) {
      const char = msg[i];
      if (char >= 'A' && char <= 'Z') {
        const charCode = char.charCodeAt(0) - 65;
        const keyCode = k[ind % k.length].charCodeAt(0) - 65;
        const newChar = String.fromCharCode(((charCode - keyCode + 26) % 26) + 65);
        res += newChar;
        ind += 1;
      } else {
        res += char;
      }
    }
    if (this.direction) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
