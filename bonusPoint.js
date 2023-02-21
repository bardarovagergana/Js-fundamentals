function solution (arg1)
{
    let startPoints=Number(arg1);
    let sumPoints=0;
    if(startPoints<=100)
    {
        sumPoints+=5;

    }
    else if(startPoints>1000)
    {
        sumPoints+=startPoints*0.1;
       
        }
        else if(startPoints>100)
    {
        sumPoints+=startPoints*0.2; 
       
        }
        if((startPoints%2)===0)
        {
            sumPoints+=1;
        }
        else
        {
            let lastDigit=startPoints%10;
            if(lastDigit===5)
            {
            sumPoints+=2;
            }
        }

        console.log(sumPoints);
            console.log(sumPoints+startPoints);
}
solution("158755")
