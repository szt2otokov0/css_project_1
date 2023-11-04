const Run = class {
    day;
    start;
    end;
    street;
    bin;

    constructor(day, startHr, endHr, street, bin) {
        this.day = day;
        this.start = startHr;
        this.end = endHr;
        this.street = street;
        this.bin = bin;
    }
}

const binColour = {
    fekete: 0,
    sárga: 1,
    barna: 2
}

const allRuns = [
    {
        "day": "Hétfő",
        "start": "08:00",
        "end": "09:00",
        "street": "Rózsa utca",
        "bin": "barna kuka"
    },
    {
        "day": "Hétfő",
        "start": "10:00",
        "end": "11:00",
        "street": "Szilva utca",
        "bin": "sárga kuka"
    },
    {
        "day": "Hétfő",
        "start": "12:00",
        "end": "13:00",
        "street": "Körte utca",
        "bin": "fekete kuka"
    },
    {
        "day": "Hétfő",
        "start": "14:00",
        "end": "15:00",
        "street": "Dió utca",
        "bin": "barna kuka"
    },
    {
        "day": "Kedd",
        "start": "09:00",
        "end": "10:00",
        "street": "Alma utca",
        "bin": "fekete kuka"
    },
    {
        "day": "Kedd",
        "start": "11:00",
        "end": "12:00",
        "street": "Cseresznye utca",
        "bin": "sárga kuka"
    },
    {
        "day": "Kedd",
        "start": "13:00",
        "end": "14:00",
        "street": "Meggy utca",
        "bin": "barna kuka"
    },
    {
        "day": "Szerda",
        "start": "08:00",
        "end": "09:00",
        "street": "Gesztenye utca",
        "bin": "fekete kuka"
    },
    {
        "day": "Szerda",
        "start": "10:00",
        "end": "11:00",
        "street": "Mandula utca",
        "bin": "sárga kuka"
    },
    {
        "day": "Szerda",
        "start": "12:00",
        "end": "13:00",
        "street": "Mogyoró utca",
        "bin": "fekete kuka"
    },
    {
        "day": "Szerda",
        "start": "14:00",
        "end": "15:00",
        "street": "Narancs utca",
        "bin": "barna kuka"
    },
    {
        "day": "Csütörtök",
        "start": "12. 09:00",
        "end": "10:00",
        "street": "Sárgabarack utca",
        "bin": "barna kuka"
    },
    {
        "day": "Csütörtök",
        "start": "11:00",
        "end": "12:00",
        "street": "Kivi utca",
        "bin": "sárga kuka"
    },
    {
        "day": "Csütörtök",
        "start": "13:00",
        "end": "14:00",
        "street": "Szeder utca",
        "bin": "fekete kuka"
    },
    {
        "day": "Péntek",
        "start": "08:00",
        "end": "09:00",
        "street": "Barack utca",
        "bin": "fekete kuka"
    },
    {
        "day": "Péntek",
        "start": "10:00",
        "end": "11:00",
        "street": "Dinnye utca",
        "bin": "sárga kuka"
    },
    {
        "day": "Péntek",
        "start": "12:00",
        "end": "13:00",
        "street": "Meggyfa utca",
        "bin": "barna kuka"
    },
    {
        "day": "Péntek",
        "start": "14:00",
        "end": "15:00",
        "street": "Csapágy utca",
        "bin": "fekete kuka"
    }
]

let theme = true;
let root;
const keyName = "colorMode";

window.onload = () => {
    root = document.body;
    if (!localStorage.getItem(keyName)) localStorage.setItem(keyName, "light");
    else {
        if (localStorage.getItem(keyName) == "dark") {
            valt();
        } else {
            theme = false;
            valt();
        }
    }
    console.log("saved theme is light?: " + theme);
    let mainDiv = document.querySelector("#deck");
    let allDays = groupRunsByDate();
    drawAllRuns(allDays, mainDiv);
}

function valt() {
    if (theme) {
        root.className = "dark";
        theme = false;
        localStorage.setItem(keyName, "dark");
    }
    else {
        root.className = "light";
        theme = true;
        localStorage.setItem(keyName, "light");
    }
}

function drawAllRuns(allDays, mainDiv) {
    for (day of allDays) {
        let card = document.createElement("div");
        card.className = "card";
        let dayHeader = document.createElement("h3");
        dayHeader.innerText = day.key;
        card.append(dayHeader);
        let runsDiv = document.createElement("div");
        runsDiv.className = "orak";
        for (run of day.runs) {
            let runDiv = document.createElement("div");
            runDiv.className = "ora";
            runDiv.innerText = `${run.start}-${run.end}: ${run.street} - ${run.bin}`;
            runsDiv.append(runDiv);
        }
        card.append(runsDiv);
        mainDiv.append(card);
    }
}

function groupRunsByDate() {
    let allDays = [];
    for (run of allRuns) {
        if (allDays.some(d => d.key == run.day)) {
            allDays[allDays.length - 1].runs.push(run);
        }
        else {
            let day = {
                key: run.day,
                runs: [run]
            };
            allDays.push(day);
        }

    }
    return allDays;
}
