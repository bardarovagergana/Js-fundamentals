function sumSeconds(input)
{
   let first = Number(input[0]);
   let second = Number(input[1]);
   let third = Number(input[2])
   let timeSum = 0;
   let minutes = 0;
   timeSum = first + second + third;
   second = timeSum % 60;  
   minutes = Math.trunc(timeSum / 60);
      
   if (second < 10)
   {
      console.log(`${minutes}:0${second}`);
   }
else
    console.log(`${minutes}:${second}`);
   
}
sumSeconds(["35","45","44"])
/*
Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се 
напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат 
"минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). */