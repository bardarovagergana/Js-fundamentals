function solve (arg1,arg2,arg3,arg4,arg5,arg6)
{
    priceExursion=Number(arg1);
    puzzleCnt=Number(arg2);
    dollCnt=Number(arg3);
    teddyBearCnt=Number(arg4);
    minionsCnt=Number(arg5);
    truckCnt=Number(arg6);
    let pricePuzzle=puzzleCnt*2.6;
    let priceDoll=dollCnt*3;
    let priceTeddyBear=teddyBearCnt*4.10;
    let priceMinions=minionsCnt*8.20;
    let priceTruck=truckCnt*2;
    let tottleToysCnt=puzzleCnt+dollCnt+teddyBearCnt+minionsCnt+truckCnt;
    let tottleToysPrice=pricePuzzle+priceDoll+priceTeddyBear+priceMinions+priceTruck;
    if(tottleToysCnt>=50)
    {
        tottleToysPrice=tottleToysPrice*0.75; 
    }
        let finalPrice=tottleToysPrice*0.9; 
    if(finalPrice>=priceExursion)
    {
       let moneyLeft=finalPrice-priceExursion;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else 
    {   
        let moneyNeed=priceExursion-finalPrice;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}
solve ("40.8", "20", "25", "30", "50", "10")
