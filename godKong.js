function solution(input)
{
    let budget = Number(input[0]);
    let countStaf = Number(input[1]);
    let priceClothing = Number(input[2]);
    let dekor =0;
    let sumClothing = 0;
    let sum = 0;
    dekor = budget * 0.10;
    if(countStaf > 150)
    {
        priceClothing *= 0.90;
    }
    sumClothing = priceClothing * countStaf;
    sum = dekor + sumClothing;
        if (budget < sum)
    {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${( sum - budget ).toFixed(2)} leva more.`);
    }
    else if(budget >= sum)
    {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${( budget - sum ).toFixed(2)} leva left.`);
    }
}
solution(["9587.88","222","55.68"])
