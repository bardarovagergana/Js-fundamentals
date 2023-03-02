function solution(arg1,arg2)
{
let age=Number(arg1);
let gender=arg2;
if(age>=16)
{
    if(gender==="f")
    {
        console.log("Ms.");
    }
    else
    {
        console.log("Mr.");
    }
}
    else
    { if(gender==="f")
        {
        console.log("Miss");
    }

    else
    {
        console.log("Master");
    }
}
}

solution("12","f")