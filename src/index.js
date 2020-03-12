module.exports = function toReadable (number) {
  
  const readable = {
    1: {
      0:'zero',
      1:'one',
      2:'two',
      3:'three', 
      4:'four',
      5:'five',
      6:'six',
      7:'seven',
      8:'eight',
      9:'nine',
      10:'ten',
      11:'eleven',
      12:'twelve',
      13:'thirteen',
      14:'fourteen',
      15:'fifteen',
      16:'sixteen',
      17:'seventeen',
      18:'eighteen',
      19:'nineteen'
    },
    
    2: {
      2:'twenty',
      3:'thirty',
      4:'forty',
      5:'fifty',
      6:'sixty',
      7:'seventy',
      8:'eighty',
      9:'ninety'
    }
  };
  
  let stringFromNumb = number.toString();
  const result = [];

  if (number === 0) return readable[1][0];

  if (number >= 100 && number < 1000) {
    result.push( `${readable[1][stringFromNumb[0]]} hundred` );

    number = number % 100;
    stringFromNumb = number.toString();
  };

  if (number > 0 && number < 20) {

    result.push( `${readable[1][number]}` );

  } else if (number >= 20 && number < 100) {

    result.push( `${readable[2][stringFromNumb[0]]} ${stringFromNumb[1] === '0' ? '' :  readable[1][stringFromNumb[1]]}` );

  };

  return result.join(' ').trim();
}
