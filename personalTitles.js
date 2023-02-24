function solution(arg1,arg2)
{
let age=Number(arg1);
let gender=arg2;
if(gender=="f")
{
    if(age<16)
    {
        console.log("Ms.");
    }
    else
    {
        console.log("Miss.");
    }
}
    else if(gender=="m")
    { if(age<16)
        {
        console.log("Master");
    }

    else
    {
        console.log("Mr.");
    }
}
}

solution("50","f")