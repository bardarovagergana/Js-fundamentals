function shop (input)
{
    let product = input [0];
    let city = input [1];
    let amount = Number(input[2]);
    if (city =="Sofia")
    {
        switch(product)
        {
            case "coffee": console.log(amount*0.50); break;
            case "water": console.log(amount * 0.80); break;
            case "beer": console.log(amount * 1.20); break;
            case "sweets": console.log(amount * 1.45); break;
            case "peanuts": console.log(amount * 1.60); break;
            default:console.log("Error"); break;
        }

    }
    else if (city =="Plovdiv")
    {
        switch(product)
        {
            case "coffee": console.log(amount * 0.40); break;
            case "water": console.log(amount * 0.70); break;
            case "beer": console.log(amount * 1.15); break;
            case "sweets": console.log(amount * 1.30); break;
            case "peanuts": console.log(amount * 1.50);  break;
            default:console.log("Error");break;
        }

    }
    else if (city == "Varna")
    {
        switch(product)
        {
            case "coffee": console.log(amount * 0.45); break;
            case "water": console.log(amount * 0.70); break;
            case "beer": console.log(amount * 1.10); break;
            case "sweets": console.log(amount * 1.35); break;
            case "peanuts": console.log(amount * 1.55); break;
            default:console.log("Error");break;
        }

    }
else
{
console.log("Error");
}
}
shop(["beer","Plovdiv","1"])
