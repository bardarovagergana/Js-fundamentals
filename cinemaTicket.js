function dayTicket(arg1)
{
   let dayWeek=arg1;
switch(dayWeek)
       {
           case "Monday":
               case "Tuesday":
                  case "Friday": console.log("12");break;
                  case "Wenesday":
                       case "Thursday":console.log("14");break;
                           
                           case "Saturday":
                               case "Sunday":console.log("14");break;
                           default: console.log("Error");break;
       }

}
dayTicket("Friday")