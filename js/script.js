"use strict"

function getNumberOfSeries() {
    let numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
    console.log(numberOfSeries)
    if (numberOfSeries !== null && numberOfSeries !== 0) {
        if (1 <= numberOfSeries && numberOfSeries < 5) {
            console.log(`Kam serial korarkansiz`)
        } else if (5 <= numberOfSeries && numberOfSeries <= 10) {
            console.log(`Siz classic tomoshabin ekansiz`)
        } else if (numberOfSeries > 10) {
            console.log(`Siz serialchi bolsangiz kere`)
        }
    }

    return numberOfSeries
}


const seriesDb = {
    count: getNumberOfSeries(),
    series: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Oxirgi ko'rgan serialingiz?", ""),
        b = prompt("Necha baxo berasiz?", "");
    if (a !== null && b !== null && a !== "" && b !== "") {
        seriesDb.series[a] = b
        console.log("Done")
    } else {
        i--
    }
}

function showDb() {
    if (!seriesDb.private) {
        console.log(seriesDb)
    }
}

showDb()

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        const userFavouriteSeries = prompt(`yaxshi ko'rgan janringiz ${i + 1}?`)
        seriesDb.genres.push(userFavouriteSeries)
    }
}

writeGenres()