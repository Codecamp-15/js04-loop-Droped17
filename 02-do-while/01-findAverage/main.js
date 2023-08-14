/* 
    input: number
    output : number

*/
let number;
let checkNumber;
let count = 0;
let average = 0;
let sum = 0;

do {
  number = + prompt("Enter Number");
  checkNumber = number === null || number <= 0 || isNaN(number);

  if (!checkNumber) {
    sum += number;
    count++;
    average = sum / count;
    console.log(`average : ${average}`);
    console.log(`summary : ${sum}`);
  }


} while (!checkNumber);
