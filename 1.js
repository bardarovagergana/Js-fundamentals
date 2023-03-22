function cleverLily (input){
let count = Number (input [0]);
let num = Number (input[1]);
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
for (let i = 1 ; i <= count ; i++){
 num = Number (input[i]);

 if ( num < 200){
p1 ++;
 }else if (num <= 399) {
    p2 ++;
 }else if (num <= 599){
    p3 ++;
 }else if (num <= 799){
    p4 ++;
 } else {
    p5++;
 }

}
console.log (`${(p1 / count * 100 ).toFixed(2)}%`);
console.log (`${(p2 / count * 100).toFixed(2) }%`);
console.log (`${(p3 / count * 100).toFixed(2) }%`);
console.log (`${(p4 / count * 100).toFixed(2) }%`);
console.log (`${(p5 / count * 100).toFixed(2) }%`);
}
histogram (["7","800","801","250","199","399","599","799"])


