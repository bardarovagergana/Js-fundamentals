function booksForSummer(brPages, pagesPerHours, brDays) {
    brPages = Number(brPages);
    pagesPerHours = Number(pagesPerHours);
    brDays = Number(brDays);
    let timeReed = brPages / pagesPerHours;
    let hoursDay = timeReed / brDays;
    console.log(hoursDay);
}
booksForSummer("432", "15", "4")