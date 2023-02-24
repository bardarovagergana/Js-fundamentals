function workingHours(arg1,arg2)
{
   let dayHours=Number(arg1);
   let dayWeek=arg2;
   if (dayHours>=10 && dayHours<=18 )
   { switch(dayWeek)
       {
           case "Monday":
               case "Tuesday":
                   case "Wenesday":
                       case "Thursday":
                           case "Friday":
                           case "Saturday":console.log("open");break;
                           default: console("Error");break;
       }
   }
   else
   console.log("closed");

}
workingHours("11","Monday")