let arrayName = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arrayStar = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function getIndexByName(name, arr) {
    for (let i in arr) {
        if (name === arr[i]) {
            return i;
        }
    }
    return -1;
}

function showStarByName() {
    let idolName = prompt("Enter idol's name ");
    let indexOfArrrayName = getIndexByName(idolName, arrayName);
    if (indexOfArrrayName >= 0) {
        let starOfIdol = arrayStar[indexOfArrrayName];
        alert(starOfIdol);
    } else {
        alert("Not find !!")
    }
}

window.onload = showStarByName();