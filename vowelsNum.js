function sumOfNumbers (input){
    let num = input [0];
    let sum = 0;
    for ( let i = 0 ; i <= num ; i++ ){
        sum += num % 10;
        Math.trunc(num) = num / 10;
        

        }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumbers (["888"])