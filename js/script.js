"use strict"

const seriesDb = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        do {
            this.count = +prompt("Nechta serial ko'rdingiz?", "")
        } while (this.count === null || this.count === "" || this.count === 0 || isNaN(this.count))
    },
    favouriteSeries: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Oxirgi ko'rgan serialingiz?", ""),
                b = prompt("Necha baxo berasiz?", "");
            if (a !== null && b !== null && a !== "" && b !== "") {
                this.series[a] = b
                console.log("Done")
            } else {
                i--
            }
        }
    },
    showDb: function () {
        if (!seriesDb.private) {
            console.log(seriesDb)
        } else {
            console.log("Something went wrong!")
        }
    },
    writeGenres: function () {
        for (let i = 0; i < 3; i++) {
            const newGenre = prompt(`yaxshi ko'rgan janringiz ${i + 1}?`, "")
            if (newGenre !== null && newGenre !== "" && newGenre.trim()) {
                this.genres[i] = newGenre
            } else {
                i--
            }
        }
    },
    detectingSeriesCount: function () {
        if (this.count !== null && this.count !== 0) {
            if (1 <= this.count && this.count < 5) {
                console.log(`Kam serial korarkansiz`)
            } else if (5 <= this.count && this.count <= 10) {
                console.log(`Siz classic tomoshabin ekansiz`)
            } else if (this.count > 10) {
                console.log(`Siz serialchi bolsangiz kere`)
            } else {
                console.log("Qandaydur xatolik yuz berdi!")
            }
        }
    },
    visibleDb: function () {
        this.private = !this.private;
    },
}