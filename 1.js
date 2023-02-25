 function dayTiket(arg1)
 {
    let dayWeek=arg1;
 switch(dayWeek)
        {
            case "Monday":
                case "Tuesday":
                   case "Friday": console.log("12");break;
                   case "Wednesday":
                        case "Thursday":console.log("14");break;
                            
                            case "Saturday":
                                case "Sunday":console.log("14");break;
                            default: console.log("Error");break;
        }

 }
 dayTiket("Friday")