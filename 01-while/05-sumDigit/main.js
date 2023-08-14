let input = prompt("Enter input");
let count = 0;
let sum = 0;
while (input) {
    let remainder = input % 10; //หาเลขโดดตัวท้ายโดยการ %10 เป็นการหา digit
    input = (input - remainder) / 10;  //ใส่
    sum += remainder;
    count++;
}

console.log(sum);

