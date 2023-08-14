let money = 100_000;
let cal = 0.025;
let time = 365;
let result = 0;
let sum = 0;
let totalMoney = 0;

for(let i = 1; i<= 10; i++){
    result = money * cal * (time / time);
    sum += result;
    console.log(`ดอกเบี้ยปี ${i}: ${sum}`);
}
totalMoney = money + sum;
console.log(`เงินฝากสะสม: ${totalMoney}`);





