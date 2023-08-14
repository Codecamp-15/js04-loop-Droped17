let input = +prompt("Enter input");
let count = 0;

if (input < 0) input = -input;  

while(input >= 1){
    console.log(input);
    count++;
    input = input / 10;
}

console.log(count);
