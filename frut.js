function solve (strowberyPrice,bananasKg,orangesKg,rastberyKg,strowberyKg)
{
    strowberyPrice=Number(strowberyPrice);
    bananasKg=Number(bananasKg);
    orangesKg=Number(orangesKg);
    rastberyKg=Number(rastberyKg);
    strowberyKg=Number(strowberyKg);
    let sumStroubery=strowberyKg*strowberyPrice;
    let rastberyPrice=strowberyPrice/2;
    let sumRastbery=rastberyKg*rastberyPrice;
    let orangePrice=rastberyPrice-(rastberyPrice*0.4);
    let sumOrange=orangePrice*orangesKg;
    let bananasPrice=rastberyPrice-(rastberyPrice*0.8);
    let sumBananas=bananasKg*bananasPrice;
    let sum=sumBananas+sumOrange+sumRastbery+sumStroubery;
    console.log(sum);
}
solve("63.5","3.57","6.35","8.15","2.5")

