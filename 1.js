function oscars (input) {

    let name = input [0];
    let pointsAcademi = Number (input[1]);
    let evaluative = Number (input [2]);
    let point = Number (input [3]);
    let sum = 0;


    for ( let i = 1 ; i <= evaluative ; i++ ){
         point += point [i];
         sum = point + (name.length * pointsAcademi) / 2;

console.log(sum);
    }
    if (point >= 1250.5 ){
    console.log (`Congratulations, ${name} got a nominee for leading role with ${sum}!`)
    }
    else {
        let more = 1250.5 - sum;
        console.log(`Sorry, ${name} you need ${more} more!`);
    }
    

}
oscars (["Sandra Bullock","340","5","Robert De Niro","50",
"Julia Roberts","40.5","Daniel Day-Lewis","39.4",
"Nicolas Cage","29.9",
"Stoyanka Mutafova","33"])
