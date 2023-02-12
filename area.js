function solve (arg)
{
    let a=Number(arg);
     if(100<=a && a<=200)
    {
        console.log("Between 100 and 200");
    } 
    else if(a<100)
    {
        console.log("Less than 100");

    }   
   
    else
    {
        console.log("Greater than 200");
    }
}
solve("255")
