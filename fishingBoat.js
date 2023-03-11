function fishingBoat(input) {
    let budget = Number(input[0]);
    let seasone = input[1];
    let fisherman = Number(input[2]);
    let finalSum = 0;

    switch (seasone) {
        case "Spring":
            finalSum += 3000;
            break;
        case "Summer":
        case "Autumn":
            finalSum += 4200; break;
        case "Winter":
            finalSum += 2600; break;
    }
    if (fisherman >= 12) {
        finalSum *= 0.75;
    }
    else if (fisherman >= 7 && fisherman <= 11) {
        finalSum *= 0.85;
    }
    else {
        finalSum *= 0.90;
    }
    if (fisherman % 2 === 0 && seasone !== "Autumn") {
        finalSum *= 0.95;
    }
    if (budget >= finalSum) {
        console.log(`Yes! You have ${(budget - finalSum).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(finalSum - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3600", "Autumn", "6"])