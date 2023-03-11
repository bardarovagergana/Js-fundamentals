function journey(input) {
    let budget = Number(input[0]);
    let seasone = input[1];
    let campHotel;
    let destination;
    if (budget > 1000) {
        budget *= 0.90;
        destination = "Europe";
        campHotel = "Hotel";
    }
    else if (budget <= 100) {
        destination = "Bulgaria";
        if (seasone === "summer") {
            budget *= 0.30;
            campHotel = "Camp";
        }
        else {
            budget *= 0.70;
            campHotel = "Hotel";
        }
    }
    else if (budget <= 1000) {
        destination = "Balkans";
        if (seasone === "summer") {
            budget *= 0.40;
            campHotel = "Camp";
        }
        else {
            budget *= 0.80;
            campHotel = "Hotel";
        }


    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${campHotel} - ${(budget).toFixed(2)}`);
}
journey(["312", "summer"])