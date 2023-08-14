console.log("while loop");

/* ประเภทของ loop */
// 1. Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก boolean
// 2. Counting Loop ตัดสินใจว่าจะรันต่อไหม จาก ตัวเลข
// 3. List Loop

console.log("Start");


i = 2;
/* เลขคู่ */
/* while (i <= 20) {
    if (i % 5 == 0) {
        console.log(`${i} High Five`);
      
    }else if(i % 3 == 0){
        console.log(i)
    }
    i++;
}
console.log("End");
 */

let num = 1;
while (num <= 20) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} FizzBuzz`);
    }else if(num % 5 === 0){
        console.log(`${num} Buzz`);
    }
    else if(num % 3 === 0){
        console.log(`${num} Fizz`);
    }else{
        console.log(`${num}`);
    }
    num++;
}

