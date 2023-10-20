const Run = class {
    day;
    start;
    end;
    street;
    bin;

    constructor(day,startHr,endHr,street,bin){
        this.day = day;
        this.start = startHr;
        this.end = endHr;
        this.street = street;
        this.bin = bin;
    }
}

let allRuns = [];

const binColour = {
    fekete: 0,
    sárga: 1,
    barna:2
}

window.onload = () => {
    let mainDiv = document.querySelector("#deck");
    for(card of mainDiv.children){
        let runs = card.querySelectorAll(".ora");
        let day = card.querySelector("h3").innerText;
        for(run of runs){
            let runText = run.innerText;
            const splitRun = runText.split(', ');
            let times = splitRun[0].split("-");
            let streetBin = splitRun[1].split(" - ");
            
            allRuns.push(new Run(day,times[0],times[1],streetBin[0],streetBin[1]))
        }
    }
    let allDays = 
}