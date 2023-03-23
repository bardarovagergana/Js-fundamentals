function cleverLily(input) {
  let yars = Number(input[0]);
  let wasingMashinePrice = Number(input[1]);
  let toyprice = Number(input[2]);
  let sumMoney = 0;
  let sumToys = 0;
  let br = 0;
  for (let i = 1; i <= yars; i++) {
    if (i % 2 === 0) {
      br++;
      sumMoney += 10 * br;
      sumMoney--;
    } else {
      sumToys += toyprice;
    }
  }
  let sum = sumMoney + sumToys;
  if (sum >= wasingMashinePrice) {
    console.log(`Yes! ${(sum - wasingMashinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(wasingMashinePrice - sum).toFixed(2)}`);
  }
}
cleverLily(["10", "170", "6"]);
