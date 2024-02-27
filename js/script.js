"use strict"
let numberOfSeries
do {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
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
} while (numberOfSeries)

const seriesDb = {
    count: numberOfSeries,
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

console.log(seriesDb)


