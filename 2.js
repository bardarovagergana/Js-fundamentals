function timeExam (input) {
    let hourExam = Number (input[0]);
    let minutesExam = Number (input[1]);
    let hourArrival = Number (input[2]);
    let minutesArrival = Number (input[3]);
    let totalExam = 0;
    let totalArrival = 0;
    totalExam = (hourExam * 60) + minutesExam;
    totalArrival = (hourArrival * 60) + minutesArrival;
    if (totalExam === totalArrival || totalExam >= (totalArrival - 30)){
        console.log("On time");
        if (totalExam > totalArrival){
            console.log(`${totalExam - totalArrival} minutes before the start`);
        }
    }
    
    if (totalExam >= (totalArrival - 31)){
        console.log("Early");
        if (totalExam > totalArrival){
            let min = (totalExam - totalArrival) % 60;
            let hour = (totalExam - totalArrival) / 60;
            if (min <= 9){
                console.log(`${hour.toFixed(0)}:0${min} hours before the start`);
            }
            else{
            console.log(`${hour.toFixed(0)}:${min} hours before the start`);
            }
        }
    }
     }
    
    timeExam (["9","00","8","01"]);
    
    