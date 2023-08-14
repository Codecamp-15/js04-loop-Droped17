

/* for (let index = 1; index <= 3; index++) {
    console.log(`${index}: Hello`);
} */


/* console.log("counting loop");

console.log("Starting");
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 == 0) {
    continue;
    console.log(`${i} Fizz`);
  } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}

console.log("END"); */

/* =================================================================== */

/* เจอ continue จะกลับไป update ค่า แล้วเริ่มนับรอบใหม่ทันที*/

/* ต่อ string */

/* let str = "";

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  str += i;
}

console.log(str);

let mystr = "codecamp";
let result = "";

for (let i = 0; i <= mystr.length; i++) {
  let isVowel =
    mystr[i] == "a" ||
    mystr[i] == "e" ||
    mystr[i] == "i" ||
    mystr[i] == "o" ||
    mystr[i] == "u";

  if (isVowel) {
    continue;
  }
  result += mystr[i];
}

console.log(`${result}`); */


/* =================================================================== */

console.log("Start");

    for(let i = 2; i<= 12; i++){
        console.log(i);
        for(let j = 1; j <= 12; j++){
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }

console.log("End");

