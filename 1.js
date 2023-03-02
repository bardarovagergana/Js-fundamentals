 function fruitShop(arg1,arg2,arg3)
 {
    let fruit=arg1;
    let dayWeek=arg2;
    let amount = Number(arg3);
    let sum=0;
     if(dayWeek == 'Monday' || dayWeek == 'Tuesday' || dayWeek == 'Wednesday' || dayWeek == 'Thursday' || dayWeek == 'Friday')
 {
    switch(fruit)
    {
        case "banana": sum = amount * 2.50 ;break;
        case "apple": sum = amount * 1.20 ;break;
        case "orange" : sum = amount * 0.85 ;break;
        case "grapefruit" : sum = amount * 1.45 ;break;
        case "kiwi": sum = amount * 2.70 ; break;
        case "pineapple": sum = amount * 5.50 ; break;
        case "grapes": sum = amount * 3.85 ; break;
        default:console.log("error");break;
    }
    console.log(`${sum.toFixed(2)}`);
 }
 else if( dayWeek == 'Saturday' || dayWeek == 'Sunday')
 {
   switch(fruit)
   {
       case "banana" : sum = amount * 2.70 ; break;
       case "apple": sum = amount * 1.25 ; break;
       case "orange": sum = amount * 0.90 ;break;
       case "grapefruit": sum = amount * 1.60 ; break;
       case "kiwi": sum = amount * 3.00 ; break;
       case "pineapple": sum = amount * 5.60 ; break;
       case "grapes": sum = amount * 4.20 ; break;
       default:console.log("error");break;
   }
   console.log(`${sum.toFixed(2)}`);
 }
 else 
   console.log("error");
 
    }
 fruitShop("banana","Tuesday","20")
