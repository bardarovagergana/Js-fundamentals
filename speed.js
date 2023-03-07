function solution(arg1) {
    let speedIn = Number(arg1);
    if (speedIn > 1000) {
        console.log("extremely fast");
    }
    else if (speedIn > 150) {
        console.log("ultra fast");
    }
    else if (speedIn > 50) {
        console.log("fast");
    }
    else if (speedIn > 10) {
        console.log("average");
    }
    else if (speedIn <= 10) {
        console.log("slow");
    }
}
solution("3500")
/*получава скорост (реално число)и отпечатва информация за скоростта. 
При скорост до 10 (включително) отпечатайте "slow". При скорост над 10 и до 50 отпечатайте "average". 
При скорост над 50 и до 150 отпечатайте "fast". 
При скорост над 150 и до 1000 отпечатайте "ultra fast". При по-висока скорост отпечатайте "extremely fast". */