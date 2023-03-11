function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1]);
    let studio;
    let apartment;
    let sumStudio = 0;
    let sumapartment = 0;
    switch (month) {
        case `May`:
        case `October`:
            studio = 50;
            apartment = 65;
            sumStudio = studio * nightCount;
            if (nightCount > 14) {
                sumStudio *= 0.70;
            }
            else if (nightCount > 7) {
                sumStudio *= 0.95;
            }
            break;
        case `June`:
        case `September`:
            studio = 75.20;
            apartment = 68.70;
            sumStudio = studio * nightCount;
            if (nightCount > 14) {
                sumStudio *= 0.80;
            } break;
        case `July`:
        case `August`:
            studio = 76;
            apartment = 77;
            sumStudio = studio * nightCount; break;
    }

    if (nightCount > 14)
        sumapartment = (apartment * nightCount) * 0.90;
    else {
        sumapartment = apartment * nightCount;
    }

    console.log(`Apartment: ${(sumapartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(sumStudio).toFixed(2)} lv.`);


}
hotelRoom(["June", "14"])

