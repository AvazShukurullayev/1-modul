"use strict"

let numberOfSeries

function startApp() {
    do {
        numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
    } while (numberOfSeries === null || numberOfSeries === "" || numberOfSeries === 0 || isNaN(numberOfSeries))
}

startApp()
const seriesDb = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

function favouriteSeries() {
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
}

favouriteSeries()

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

function detectingSeriesCount(count) {
    if (count !== null && count !== 0) {
        if (1 <= count && count < 5) {
            console.log(`Kam serial korarkansiz`)
        } else if (5 <= count && count <= 10) {
            console.log(`Siz classic tomoshabin ekansiz`)
        } else if (count > 10) {
            console.log(`Siz serialchi bolsangiz kere`)
        } else {
            console.log("Qandaydur xatolik yuz berdi!")
        }
    }
}

detectingSeriesCount(seriesDb.count)