function solve(brDay, brCook, brCake, brGof, brPumpcake) {
    brDay = Number(brDay);
    brCook = Number(brCook);
    brCake = Number(brCake);
    brGof = Number(brGof);
    brPumpcake = Number(brPumpcake);
    let sumCake = brCake * 45;
    let sumGof = brGof * 5.8;
    let sumPumpcake = brPumpcake * 3.20;
    let sum = (sumCake + sumGof + sumPumpcake) * brCook;
    let sumOll = sum * brDay;
    let sumFull = sumOll - (sumOll / 8);
    console.log(sumFull);
}
solve("23", "8", "14", "30", "16")