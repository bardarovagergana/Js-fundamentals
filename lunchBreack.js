function lunchBreack (input)
{
   let nameMoovi = input[0];
   let timeMoovi = Number(input[1]);
   let timeBreack = Number (input[2]);
   let timeLunch = timeBreack / 8;
   let timeRest = timeBreack / 4;
   let sumTime = timeLunch + timeRest + timeMoovi; 
     if (timeBreack >= sumTime)
   {  
      let time = timeBreack - sumTime;
      console.log(`You have enough time to watch ${nameMoovi } and left with ${(Math.ceil(time))} minutes free time.`);
      
   }
   else
   {
      let time = sumTime - timeBreack;
   console.log(`You don't have enough time to watch ${nameMoovi}, you need ${(Math.ceil(time))} more minutes.`);
   }
}
lunchBreack (["Game of Thrones","60","96"])

