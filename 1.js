/*Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява 
дали офисът на фирма е отворен, като работното време на офисът е 
от 10-18 часа, от понеделник до събота включително.*/
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