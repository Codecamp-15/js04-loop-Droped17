/* let input = +prompt("Enter input"); */

for (let input = 2; input <= 100; input++) {
  let isPrime = true;
  for (let i = 2; i < input; i++) {
    if (input % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    /* alert(`number ${input} is Prime number`); */
    console.warn(`${input} is Prime Number`);
  } else {
    console.log(`${input} Not Prime number`);
  }
}

