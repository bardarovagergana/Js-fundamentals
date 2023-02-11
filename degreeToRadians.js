function convertDegreesToRad (arg)
{
    let radiance=Number(arg);
    let conv=radiance*180/Math.PI;
    console.log(conv.toFixed(0));
}
convertDegreesToRad("0.7854")