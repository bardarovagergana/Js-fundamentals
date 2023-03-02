function solution(arg1)
{
let animal=arg1;
if (animal == "dog")
{
   console.log("mammal");
}
else if ( animal == "crocodile" || animal =="tortoise" || animal == "snake")
{ console.log("reptile");
}
else
console.log("unknown");
}
solution("dog")