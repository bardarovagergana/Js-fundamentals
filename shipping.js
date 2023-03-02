function shopping (input)
{
   let budget = Number(input[0]);
   let amauntVideo = Number(input[1]);
   let amauntProc = Number (input[2]);
   let amauntRam = Number (input[3]);
   let sumVideo = amauntVideo * 250;
   let priceProc = sumVideo * 0.35;
   let sumProc = priceProc * amauntProc;
   let priceRam = sumVideo *0.10;
   let sumRam = priceRam * amauntRam;
   let sum = sumVideo + sumProc + sumRam;
     if (amauntVideo > amauntProc)
   {  
      sum *= 0.85;
      
   }
   if (budget >= sum)
   {
   console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
   }
   else
   console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);

}
shopping (["900","2","1","3"])
