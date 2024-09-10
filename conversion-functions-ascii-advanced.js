/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
  if (blob.startsWith('0b')) {
    blob = blob.slice(2);
}

const decimal = parseInt(blob, 2);

let hexadecimal = decimal.toString(16);

hexadecimal = '0x' + hexadecimal; 

return hexadecimal;
}

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
    if (blob.startsWith('0x')) {
        blob = blob.slice(2);
    }

    const decimal = parseInt(blob, 16);

    let binary = decimal.toString(2);

    binary = '0b' + binary;

    return binary;
}

/* Base 10 to ASCII */
function decimalToAscii(blob) {
      const decimal = Number(blob);

      if (isNaN(decimal) || decimal < 0 || decimal > 127) {
          throw new Error('Invalid decimal number. Must be between 0 and 127.');
      }
  
      return String.fromCharCode(decimal); 
}

/* Base 2 to ASCII */
function binaryToAscii(blob) {
      if (blob.startsWith('0b')) {
        blob = blob.slice(2);
    }

    const decimal = parseInt(blob, 2);

    if (decimal < 0 || decimal > 127) {
        throw new Error('Invalid binary string. Resulting decimal is outside the ASCII range.');
    }

    return String.fromCharCode(decimal);
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
     if (blob.startsWith('0x')) {
      blob = blob.slice(2);
  }

  const decimal = parseInt(blob, 16);

  if (decimal < 0 || decimal > 127) {
      throw new Error('Invalid hexadecimal string. Resulting decimal is outside the ASCII range.');
  }

  return String.fromCharCode(decimal); 
}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  // Convert each character in the string to its decimal ASCII code
  return Array.from(blob).map(char => char.charCodeAt(0));
}

console.log('Binary to hexadecimal:')
console.log(binaryToHexadecimal('0b1010')) // '0xa'
console.log(binaryToHexadecimal('0b0011')) // '0x3'
console.log('')

console.log('Hexadecimal to binary:')
console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
console.log('')

console.log('Decimal to ASCII:')
console.log(decimalToAscii(65))  // 'A'
console.log(decimalToAscii(97))  // 'a'
console.log('')

console.log('Binary to ASCII:')
console.log(binaryToAscii('0b01000010'))  // 'B'
console.log(binaryToAscii('0b01100010'))  // 'b'
console.log('')

console.log('Hexadecimal to ASCII:')
console.log(hexadecimalToAscii('0x43'))  // 'C'
console.log(hexadecimalToAscii('0x63'))  // 'c'
console.log('')

console.log('ASCII to decimal:')
console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
