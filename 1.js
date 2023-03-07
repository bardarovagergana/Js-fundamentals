function tradeCommissions (input)
{
    let city = input[0];
    let sells = Number(input[1]);

    if (city == "Sofia")
    {
         if (sells > 10000)
        {
            sells = sells * 0.12;
        }
         else if(sells > 1000 && sells <= 10000)
        {
            
            sells = sells * 0.08;
            
        }
        else if (sells > 500 && sells <= 1000)
        {
            
            sells = sells * 0.07;
            
        }
         else if (sells>=0 && sells <= 500)
        {
            sells = sells * 0.05;
        }
        if(sells<=0 )
        {
        console.log("error");
        }

    }
    else if (city == "Varna")
    {
         if (sells > 10000)
        {
            sells = sells * 0.13;
        }
         else if(sells > 1000 && sells <= 10000)
        {
            
            sells = sells * 0.1;
            
        }
        else if (sells > 500 && sells <= 1000)
        {
            
            sells = sells * 0.075;
          
        }
         else if (sells>=0 && sells <= 500)
        {
            sells = sells * 0.045;
            
        }
       else  if(sells<=0 )
        {
        console.log("error");
        }

    }
    else if (city == "Plovdiv")
    {

       
         if (sells > 10000)
        {
            sells = sells * 0.145;
        }
         else if(sells > 1000 && sells <= 10000)
        {
            
            sells = sells * 0.12;
            
        }
        else if (sells > 500 && sells <= 1000)
        {
            
            sells = sells * 0.08;
        
        }
         else if (sells>=0 && sells <= 500)
        {
            sells = sells * 0.055;
        }
        if(sells<=0 )
        {
        console.log("error");
        }
  console.log((sells).toFixed(2));
    }
      else
    {
        console.log("error");

Math.pow ()   }
    }



tradeCommissions (["Kaspichan","50"])



