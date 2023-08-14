let ansNumber = ''; //null,string:""," ","sadasd","11";
let check_ansNumber;
let guessNumber = '';
    do {
        /* ควรประกาศตัวแปรไว้ข้างนอกแล้วมา assign ใหม่ใน do */
        ansNumber = prompt("Enter number") || "";
        check_ansNumber = ansNumber.trim() === '' || isNaN(ansNumber);
        /* เช็ควา เป็น null nan หรือค่าว่างไหม */

        if (check_ansNumber) {
            alert("Invalid Input please enter 1-99");
        }
    } while (check_ansNumber){
        alert(`true: ${ansNumber}`);

    };

    do {
        guessNumber = prompt("Enter answer") || "";
        check_ansNumber = guessNumber.trim() === '' || isNaN(guessNumber);
        /* เช็ควา เป็น null nan หรือค่าว่างไหม */


        if (check_ansNumber) {
            alert("Invalid Input please enter 1-99");
        } else if(Number(guessNumber) > Number(ansNumber)){
            alert("To high");
        } else if(Number(guessNumber) < Number(ansNumber)){
            alert("To Low");
        } else if(Number(guessNumber) === Number(ansNumber)){
            alert("Correct!");
        }

    } while (Number(guessNumber) != Number(ansNumber)){
        
    };


/* ให้ทายได้ไม่เกิน 5 ครั้ง */

/* let ansNumber = '';
let isEmpty;
let isNan;
let outOfRange;
let checkAll;

do {
    ansNumber = prompt("Enter Number 1") || ''; //string
    isEmpty = ansNumber.trim() === '';  
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99; */
    // checkAll = ansNumber.trim() === '' || isNaN(ansNumber) || Number(ansNumber) < 1 || Number(ansNumber) > 99;
/*     if(isEmpty || isNan)
    {
        alert("Invalid Input 1-99");
    } else if(outOfRange){
        alert("Invalid Input 1-99");
    }

} while(isEmpty || isNan);
 */





