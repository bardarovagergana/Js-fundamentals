function sumSeconds(input)
{
   let hours = Number(input[0]);
   let minutes = Number(input[1]);
   let minutesLater = 0
   minutesLater = minutes + 15;
   if (minutesLater >= 60)
   {
      hours++;
      minutesLater %= 60;
      if(hours>23)
      {
         hours=0;
      }
   }
   if (minutesLater < 10 )
   {
      console.log(`${hours}:0${minutesLater}`);
   }
   else
   console.log(`${hours}:${minutesLater}`);
   
}
sumSeconds(["4","45"])
