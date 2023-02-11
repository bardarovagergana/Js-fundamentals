function birthDay (rent)
{
    rent=Number(rent);
    let cake=rent*0.2;
    let drinks=cake-(cake*0.45);
    let animation=rent/3;
    let sum=rent+cake+drinks+animation;
    console.log(sum);
}
birthDay("3720")