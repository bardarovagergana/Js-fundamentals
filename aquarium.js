function solve (lenght,width,height,percent)
{
    lenght=Number(lenght);
    width=Number(width);
    height=Number(height);
    percent=Number(percent);
    let volume=lenght*width*height;
    let sumLitr=volume*0.001;
    let per=percent*0.01;
    let litr=sumLitr*(1-per);

    console.log(litr);
}
solve("105","77","89","18.5")

