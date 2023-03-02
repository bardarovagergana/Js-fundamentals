function solution(arg1)
{
    let day=arg1;
    if(day=="Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day =="Friday")
{
   console.log("Working day");
}
else if ( day == "Saturday" || day == "Sunday")
{
   console.log("Weekend");
}
else
console.log("Error");

}
solution("Monday")