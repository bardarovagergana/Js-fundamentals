function solve (figure,arg1,arg2)
{
    let area=0;
    if (figure==="square")
    {
        let side=Number(arg1);
         area=side*side;
        
    }
    else if (figure==="rectangle")
    {
        let sideA=Number (arg1);
        let sideB=Number(arg2);
         area=sideA*sideB;

    }
    else if (figure==="circle")
    {
        let radius=Number(arg1);
        area=(radius*radius)*Math.PI;

    }
    else if (figure==="triangle")
    {
        let sideA=Number(arg1);
        let hieghtA=Number(arg2);
         area=sideA*hieghtA/2;
    
    }
    console.log(area.toFixed(3));
}
solve("triangle","4.5","20")
