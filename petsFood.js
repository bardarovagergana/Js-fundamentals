function petsFood (arg1,arg2)
{
    let myPets=Number(arg1);
    let oderPets=Number(arg2);
    let sum=((myPets*2.50)+(oderPets*4));
    console.log(`${sum}lv.`);
}
petsFood("5","4")