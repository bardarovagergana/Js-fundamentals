function cinema(input) {
    let typeProjection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;
    if (typeProjection === "Premiere") {
        income = (r * c) * 12;

    }
    else if (typeProjection === "Normal") {
        income = (r * c) * 7.50;
    }
    else if (typeProjection === "Discount") {
        income = (r * c) * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"])


