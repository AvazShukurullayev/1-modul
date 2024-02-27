"use strict"

const numberOfSeries = prompt("Nechta serial ko'rdingiz?", "")

const seriesDb = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false
}

const nameQuesFirst = prompt("Oxirgi ko'rgan serialingiz?", "")
const markQuesFirst = prompt("Necha baxo berasiz?", "")
const nameQuesSecond = prompt("Oxirgi ko'rgan serialingiz?", "")
const markQuesSecond = prompt("Necha baxo berasiz?", "")

seriesDb.series[nameQuesFirst] = markQuesFirst
seriesDb.series[nameQuesSecond] = markQuesSecond


console.log(seriesDb)


