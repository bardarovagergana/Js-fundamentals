function solution(arg1,arg2,arg3)
{
    let recordInSeconds=Number(arg1);
    let distanceInMeters=Number(arg2);
    let seconPerMeter=Number(arg3);
    let time=0;
    let score=0;
    time=distanceInMeters*seconPerMeter;
       if (distanceInMeters>=15)
    {
        time+=Math.floor(distanceInMeters/15)* 12.5;
    }
   if(time>=recordInSeconds)
   {
    score+=time-recordInSeconds;
    console.log(`No, he failed! He was ${score.toFixed(2)} seconds slower.`)

   }
   else
   {
    
    console.log(` Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)

   }
}
solution("10464","1500","20")
/*•	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
•	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
o	"No, he failed! He was {недостигащите секунди} seconds slower."
Резултатът трябва да се форматира до втория знак след десетичната запетая.

Времето, което не му е стигнало за да подобри рекорда: 
31250 – 10464 = 20786 сек.*/
