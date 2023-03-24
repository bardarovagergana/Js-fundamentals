function trekkingMania (input) {

    let groupNum = Number (input [0]);
    let sum = 0;
    let persent =0;
    let ch = 0;
    let hora = 0;


    for ( let i = 1 ; i < input.length ; i++ ){
        ch = input[i];
        sum += Number (ch); 
    }
        for ( let i = 1 ; i < input.length ; i++ ){
        if (ch <= 5){
            hora += ch;
            persent = ch / sum * 100;
            console.log(`${persent.toFixed(2)}%`)
        }
        else if (ch > 6 && ch <= 12) {
            persent = ch / sum * 100;
         console.log(`${persent.toFixed(2)}%`)
        }
        else if (ch >= 13 && ch <= 25){
            persent = ch / sum *100;
            console.log(`${persent.toFixed(2)}%`)
        }
        else if (ch >= 26 && ch <= 40){
            persent = ch / sum *100;
            console.log(`${persent.toFixed(2)}%`)
        }
        else if (ch >= 41){
            persent = ch / sum *100;
            console.log(`${persent.toFixed(2)}%`)
        }

    }
}   
trekkingMania (["10","10","5","1","100","12","26","17","37","40","78"])

