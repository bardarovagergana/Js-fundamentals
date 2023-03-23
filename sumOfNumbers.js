function sumOfNumbers(input) {
  let num = String(input[0]);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let num1 = Number(num[i]);
    sum += num1;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["120"]);
