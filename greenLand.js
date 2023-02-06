function greenLand(arg)
{
    let kvM=Number(arg);
    let priceLand=Number(kvM*7.61);
    let discount=Number(priceLand*0.18);
    let priceOff=priceLand-discount;
    console.log(`The final price is: ${priceOff} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greenLand("150")
