import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(stright = true) {
    this.stright = stright;
  }
  encrypt(word, key) {
    if (arguments.length < 2 || !word || !key){
      throw new Error('Incorrect arguments!');
    }
    const alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    word = word.toUpperCase();
    key = key.toUpperCase();
    let codeWord = "";
    let keyString = this.getKeyString(word, key);
    let j = 0;
    for (let i = 0; i < word.length; i++){
      if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90) {
        codeWord += word[i];
      } else {
        let shift = alf.indexOf(keyString[j++]);
        let position = alf.indexOf(word[i]);
        codeWord += alf[this.afterShift(position, shift, alf.length)];
      }
    }
    return this.stright ? codeWord : codeWord.split("").reverse().join("");
  }
  decrypt(word, key) {
    if (arguments.length < 2 || !word || !key){
      throw new Error('Incorrect arguments!');
    }
    const alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    word = word.toUpperCase();
    key = key.toUpperCase();
    let codeWord = "";
    let keyString = this.getKeyString(word, key);
    let j = 0;
    for (let i = 0; i < word.length; i++){
      if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90) {
        codeWord += word[i];
      } else {
        let shift = alf.indexOf(keyString[j++]);
        let position = alf.indexOf(word[i]);
        codeWord += alf[this.afterShift(position, shift * (-1), alf.length)];
      }
    }
    return this.stright ? codeWord : codeWord.split("").reverse().join("");
  }

  getKeyString(word, key) {
    word = word.split("").filter((letter) => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90).join("");
    let keyString = key;
    let i = 0;
    while (word.length  > keyString.length) {
      keyString += key[this.afterShift(0,i++,key.length)];
    }
    return keyString;
  }
  afterShift(position, shift, length) {
      return (position + shift + length ) % length;
  }

}
