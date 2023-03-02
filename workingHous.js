function workingHours(input)
{
   let dayHours=Number(input[0]);
   let dayWeek=input[1];
   if (dayHours>=10 && dayHours<=18 )
   { switch(dayWeek)
       {
           case "Monday":
               case "Tuesday":
                   case "Wenesday":
                       case "Thursday":
                           case "Friday":
                           case "Saturday":console.log("open");break;
                           default: console.log("closed");break;
       }
   }
   else
   console.log("closed");

}
workingHours(["11","Monday"])