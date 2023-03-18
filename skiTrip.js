function skiTrip(input) {
    let dayStay = Number(input[0]);
    let room = input[1];
    let rating = input[2];
    let price = 0;
    let sum = 0;
    switch (room) {
      case "room for one person":
        price += 18;
        break;
  
      case "apartment":
        price += 25;
        if (dayStay > 15) {
          price *= 0.5;
        } else if (dayStay > 10) {
          price *= 0.65;
        } else {
          price *= 0.7;
        }
        break;
      case "president apartment":
        price += 35;
        if (dayStay > 15) {
          price *= 0.8;
        } else if (dayStay > 10) {
          price *= 0.85;
        } else {
          price *= 0.9;
        }
        break;
    }
    dayStay--;
    sum = dayStay * price;
    if (rating === "positive") {
      sum *= 1.25;
    } else {
      sum *= 0.9;
    }
  
    console.log(sum.toFixed(2));
  }
  skiTrip(["30", "president apartment", "negative"]);
  