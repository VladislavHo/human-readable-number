module.exports = function toReadable (number) {
  let inWords = {
    0: 'zero',
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};
const numWord = number.toString();
const hundred = number % 100;
const dicimal = number % 10;
let resault = '';

if(numWord.length === 3){
  if (dicimal === 0) {
    resault+= inWords[(number - hundred)  / 100] + ' hundred ';
    if(hundred !== 0){
      resault+= inWords[hundred - dicimal]
    }
  }
  if (dicimal !== 0) {
    resault += inWords[(number - hundred)  / 100] + ' hundred';
    if (hundred <= 19) {
      resault += ' ' + inWords[hundred];
    }
    if (hundred > 19) {
      resault += ' ' + inWords[hundred - dicimal] + ' ' + inWords[dicimal];
  }
}    
  return resault.trim();
}

if(numWord.length === 2){
  if(number <= 19){
    return inWords[number]
  }else{
    if(dicimal === 0){
      resault += inWords[number]
    }
   if(dicimal !== 0){
    resault+= inWords[number - dicimal] + ' ' + inWords[dicimal]
     
   }
   return resault.trim()
  }
}
return inWords[number]
}



