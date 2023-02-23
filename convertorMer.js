function solution (arg1,arg2,arg3)
{
    let numberIn=Number(arg1);
    let merIn=arg2;
    let merOut=arg3;
    let convNum=0;
    if (merIn==="m")
    {  
         if(merOut==="mm")
    {       convNum=numberIn*1000
        console.log(`${convNum}`);
    }
    if(merOut=="cm")
    {   convNum=numberIn*100
        console.log(`${convNum}`);
    }
        
    }
    else if (merIn=="cm")
    { if(merOut=="mm")
    { convNum=numberIn*100;
        console.log(`${convNum}`);
    }
    if(merOut=="cm")
    {   convNum=numberIn/100;
        console.log(`${convNum}`);
    }
}
else if (merIn=="mm")
{ if(merOut=="cm")
{ convNum=numberIn/100;
    console.log(`${convNum}`);
}
if(merOut=="m")
{   convNum=numberIn/1000;
    console.log(`${convNum}`);
}
}
}
solution("45","cm","mm")