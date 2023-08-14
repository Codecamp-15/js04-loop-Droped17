let sum = 0;
let even = 0;
let odd = 0;

for(let i = 1; i<= 100; i++){
    sum += i;

    if (i % 2 == 0) {
        even += i;
    } 
    //เลขคี่
    else{
        odd += i;
    }

}
let sumevensqr = 0;
let sumthirdexpo = 0;

for(let i = 1; i <= 100; i++){
    if (i % 2 == 0) {

       sumevensqr = sumevensqr + (i ** 2);
    }
    if (i % 3 == 0){

        sumthirdexpo = sumthirdexpo + (i ** 2);
    }
}


console.log(`sum = ${sum}`);
console.log(`even = ${even}`);
console.log(`odd = ${odd}`);
console.log(`sumevensqr = ${sumevensqr}`);
console.log(`sumthirdexpo = ${sumthirdexpo}`);
console.log(`result: ${sumevensqr - sumthirdexpo}`);

