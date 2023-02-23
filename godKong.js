function solution(arg1,arg2,arg3)
{
    let budget=Number(arg1);
    let countStaf=Number(arg2);
    let priceClothing=Number(arg3);
    let dekor=budget*0.10;
     let expenses=0;
     let budgetOll=0;
    budgetOll+=dekor;
    let sumClothing=0
    if(countStaf>=150)
    {
        priceClothing=priceClothing*0.9;
     sumClothing=countStaf * priceClothing;
    }
    else if(countStaf<150)
    {
    sumClothing=countStaf*priceClothing;
    }
    budgetOll+=sumClothing;
    expenses+=budget;
    expenses-=budgetOll;
    if(budget<budgetOll)
    {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(budgetOll-budget).toFixed(2)} leva more.`);
    }
    else if(budget>=budgetOll)
    {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget-budgetOll).toFixed(2)} leva left.`);
    }

}
solution("9587.88","222","55.68")
