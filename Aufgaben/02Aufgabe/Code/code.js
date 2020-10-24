"use strict";
// Hilfequellen: https://github.com/obenics/uno-game
// https://www.youtube.com/watch?v=M14D7q8UoCE&list=PLu_zq6omCvuQ_ZoKnE8-CE2nF113p9pxd
// https://stackoverflow.com/questions/21687907/typescript-sorting-an-array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://stackoverflow.com/questions/53591691/sorting-an-array-in-random-order
let userARRAY = []; // Array der Userkarten
let computerARRAY = []; // Array der Gegnerkarten
let ziehenARRAY = []; // Array für den Ziehen-Stapel
let ablegenARRAY = []; // Array für den Ablegen-Stapel
// Audios für Gewonnen/ Verloren/ keine Karten (Audios sind aus dem 1 Semester; EIA_1-Endaufgabe)
var looseWin = [
    new Audio("sounds/sound_kids_booo.mp3"),
    new Audio("sounds/sound_yeah.mp3"),
    new Audio("sounds/sound_whistle_2.mp3")
];
// Funktionen, die beim Laden der Website ausgeführt werden
window.onload = function () {
    generateNeuesDeck();
    kartenVerteilen();
    generateKartenHTML();
    document.getElementById("Ziehen").addEventListener("click", karteZiehen, false);
};
// Das Deck mit den Karten wird generiert
// Jede Karte bekommt eine Farbe (rot, gelb, blau, grün) und eine Zahl (1 bis 9) zugewiesen
function generateNeuesDeck() {
    // Man hätte es mit einer Funktion effizienter machen können; leider habe ich es nicht hingekriegt
    // Ansatz:
    /*  function generateUserKarten (_array, _arrayIndex, _classString) {
        let userKartenDiv = document.createElement("div");
        userKartenDiv.setAttribute("class", _classString + ???" ... );
        userKartenDiv.setAttribute("id", _array[_arrayIndex].Farbe + _array[_arrayIndex].Zahl);
        document.getElementById(_classString).appendChild(userKartenDiv);
    
        let zahlInKarte = document.createElement("p"); -> Zahlen als Text/ Buchstabe definieren
        
        in CSS Klassen von Zahlen definieren "obenLinks", "obenRechts", "mitte" "untenLinks", "untenRechts"
    */
    let red1 = {
        katenNUMMER: 1,
        kartenFARBE: "red",
        img: "bilder/red1.png"
    };
    ziehenARRAY.push(red1);
    let red2 = {
        katenNUMMER: 2,
        kartenFARBE: "red",
        img: "bilder/red2.png"
    };
    ziehenARRAY.push(red2);
    let red3 = {
        katenNUMMER: 3,
        kartenFARBE: "red",
        img: "bilder/red3.png"
    };
    ziehenARRAY.push(red3);
    let red4 = {
        katenNUMMER: 4,
        kartenFARBE: "red",
        img: "bilder/red4.png"
    };
    ziehenARRAY.push(red4);
    let red5 = {
        katenNUMMER: 5,
        kartenFARBE: "red",
        img: "bilder/red5.png"
    };
    ziehenARRAY.push(red5);
    let red6 = {
        katenNUMMER: 6,
        kartenFARBE: "red",
        img: "bilder/red6.png"
    };
    ziehenARRAY.push(red6);
    let red7 = {
        katenNUMMER: 7,
        kartenFARBE: "red",
        img: "bilder/red7.png"
    };
    ziehenARRAY.push(red7);
    let red8 = {
        katenNUMMER: 8,
        kartenFARBE: "red",
        img: "bilder/red8.png"
    };
    ziehenARRAY.push(red8);
    let red9 = {
        katenNUMMER: 9,
        kartenFARBE: "red",
        img: "bilder/red9.png"
    };
    ziehenARRAY.push(red9);
    let yellow1 = {
        katenNUMMER: 1,
        kartenFARBE: "yellow",
        img: "bilder/yellow1.png"
    };
    ziehenARRAY.push(yellow1);
    let yellow2 = {
        katenNUMMER: 2,
        kartenFARBE: "yellow",
        img: "bilder/yellow2.png"
    };
    ziehenARRAY.push(yellow2);
    let yellow3 = {
        katenNUMMER: 3,
        kartenFARBE: "yellow",
        img: "bilder/yellow3.png"
    };
    ziehenARRAY.push(yellow3);
    let yellow4 = {
        katenNUMMER: 4,
        kartenFARBE: "yellow",
        img: "bilder/yellow4.png"
    };
    ziehenARRAY.push(yellow4);
    let yellow5 = {
        katenNUMMER: 5,
        kartenFARBE: "yellow",
        img: "bilder/yellow5.png"
    };
    ziehenARRAY.push(yellow5);
    let yellow6 = {
        katenNUMMER: 6,
        kartenFARBE: "yellow",
        img: "bilder/yellow6.png"
    };
    ziehenARRAY.push(yellow6);
    let yellow7 = {
        katenNUMMER: 7,
        kartenFARBE: "yellow",
        img: "bilder/yellow7.png"
    };
    ziehenARRAY.push(yellow7);
    let yellow8 = {
        katenNUMMER: 8,
        kartenFARBE: "yellow",
        img: "bilder/yellow8.png"
    };
    ziehenARRAY.push(yellow8);
    let yellow9 = {
        katenNUMMER: 9,
        kartenFARBE: "yellow",
        img: "bilder/yellow9.png"
    };
    ziehenARRAY.push(yellow9);
    let blue1 = {
        katenNUMMER: 1,
        kartenFARBE: "blue",
        img: "bilder/blue1.png"
    };
    ziehenARRAY.push(blue1);
    let blue2 = {
        katenNUMMER: 2,
        kartenFARBE: "blue",
        img: "bilder/blue2.png"
    };
    ziehenARRAY.push(blue2);
    let blue3 = {
        katenNUMMER: 3,
        kartenFARBE: "blue",
        img: "bilder/blue3.png"
    };
    ziehenARRAY.push(blue3);
    let blue4 = {
        katenNUMMER: 4,
        kartenFARBE: "blue",
        img: "bilder/blue4.png"
    };
    ziehenARRAY.push(blue4);
    let blue5 = {
        katenNUMMER: 5,
        kartenFARBE: "blue",
        img: "bilder/blue5.png"
    };
    ziehenARRAY.push(blue5);
    let blue6 = {
        katenNUMMER: 6,
        kartenFARBE: "blue",
        img: "bilder/blue6.png"
    };
    ziehenARRAY.push(blue6);
    let blue7 = {
        katenNUMMER: 7,
        kartenFARBE: "blue",
        img: "bilder/blue7.png"
    };
    ziehenARRAY.push(blue7);
    let blue8 = {
        katenNUMMER: 8,
        kartenFARBE: "blue",
        img: "bilder/blue8.png"
    };
    ziehenARRAY.push(blue8);
    let blue9 = {
        katenNUMMER: 9,
        kartenFARBE: "blue",
        img: "bilder/blue9.png"
    };
    ziehenARRAY.push(blue9);
    let green1 = {
        katenNUMMER: 1,
        kartenFARBE: "green",
        img: "bilder/green1.png"
    };
    ziehenARRAY.push(green1);
    let green2 = {
        katenNUMMER: 2,
        kartenFARBE: "green",
        img: "bilder/green2.png"
    };
    ziehenARRAY.push(green2);
    let green3 = {
        katenNUMMER: 3,
        kartenFARBE: "green",
        img: "bilder/green3.png"
    };
    ziehenARRAY.push(green3);
    let green4 = {
        katenNUMMER: 4,
        kartenFARBE: "green",
        img: "bilder/green4.png"
    };
    ziehenARRAY.push(green4);
    let green5 = {
        katenNUMMER: 5,
        kartenFARBE: "green",
        img: "bilder/green5.png"
    };
    ziehenARRAY.push(green5);
    let green6 = {
        katenNUMMER: 6,
        kartenFARBE: "green",
        img: "bilder/green6.png"
    };
    ziehenARRAY.push(green6);
    let green7 = {
        katenNUMMER: 7,
        kartenFARBE: "green",
        img: "bilder/green7.png"
    };
    ziehenARRAY.push(green7);
    let green8 = {
        katenNUMMER: 8,
        kartenFARBE: "green",
        img: "bilder/green8.png"
    };
    ziehenARRAY.push(green8);
    let green9 = {
        katenNUMMER: 9,
        kartenFARBE: "green",
        img: "bilder/green9.png"
    };
    ziehenARRAY.push(green9);
    // Karten aus dem ziehenARRAY werden vor jedem Spiel gemischt
    ziehenARRAY.sort(function () { return 0.5 - Math.random(); });
}
// Mit der folgenden Funktion sollte der User bestimmen, mit wievielen Karten er spielen möchte;
// Leider funktioniert sie nicht und ich konnte nicht herausfinden, woran es liegen könnte...
/*
function wieVielKarten(): void {
    let kartenAnzahl: string = prompt ("Mit wievielen Karten möchtest du spielen? ");
    let n: number = parseInt (kartenAnzahl);
    
    for (let Anzahl: number = n; Anzahl > 0; Anzahl--) {
        let r: number = Math.floor(Math.random() * (UNOKARTEN.length - 1));
        userARRAY.push(UNOKARTEN[r]);
        UNOKARTEN.splice(r, 1);
    }
*/
// -> somit haben die Spieler (User und Gegner) jew. 6 Karten 
// Die 6 Karten werden dann aus dem ziehenARRAY gelöscht bzw. ins userARRAY/ computerARRAY verschoben
function kartenVerteilen() {
    for (let i = 0; i < 6; i++) {
        userARRAY.push(ziehenARRAY[0]);
        ziehenARRAY.splice(0, 1);
        computerARRAY.push(ziehenARRAY[0]);
        ziehenARRAY.splice(0, 1);
    }
    // Die Karte für den Ablagestapel wird dorthin verschoben und aus dem ziehenARRAY gelöscht
    ablegenARRAY.push(ziehenARRAY[0]);
    ziehenARRAY.splice(0, 1);
}
// Die Karten bzw. die Bilder der Karten werden im HTML generiert
function generateKartenHTML() {
    // Userkarten werden generiert
    document.getElementById("meineKarten").innerHTML = ""; // damit jew. nur eine (1) Karte generiert wird
    for (let i = 0; i <= userARRAY.length - 1; i++) {
        let userKarte = document.createElement("img");
        userKarte.innerHTML = "";
        userKarte.setAttribute("src", userARRAY[i].img);
        userKarte.addEventListener("click", function () { karteSpielen(i); }, false);
        document.getElementById("meineKarten").appendChild(userKarte);
    }
    // Karten für den Computergegner werden generiert
    document.getElementById("Gegner").innerHTML = "";
    for (let i = 0; i <= computerARRAY.length - 1; i++) {
        let computerKarte = document.createElement("img");
        computerKarte.innerHTML = "";
        computerKarte.setAttribute("src", "bilder/unokarte.png"); // https://opengameart.org/content/uno
        document.getElementById("Gegner").appendChild(computerKarte);
    }
    // Random Karte für den Ablagestapel wird generiert
    document.getElementById("Ablegen").innerHTML = "";
    let ablegenKarte = document.createElement("img");
    ablegenKarte.innerHTML = "";
    ablegenKarte.setAttribute("src", ablegenARRAY[ablegenARRAY.length - 1].img);
    document.getElementById("Ablegen").appendChild(ablegenKarte);
    // Karten für den Ziehen-Stapel werden generiert
    document.getElementById("Ziehen").innerHTML = "";
    let ziehenKarte = document.createElement("img");
    ziehenKarte.setAttribute("src", "bilder/unokarte.png");
    document.getElementById("Ziehen").appendChild(ziehenKarte);
}
// Falls das Deck beim User-Zug leer ist, ist das Spiel unentschieden und kann nach dem Pop-Up neu gestartet werden
function karteZiehen() {
    if (ziehenARRAY.length < 1) {
        looseWin[2].play();
        alert("Keine Karten im Deck... Das Spiel ist unentschieden!");
        location.reload();
    }
    //Die gezogene Karte wird aus dem Deck (ziehenARRAY) gelöscht und ins userArray verschoben
    ziehenARRAY.splice(0, 1);
    userARRAY.push(ziehenARRAY[0]);
    generateKartenHTML();
    setTimeout(function () { document.getElementById("img").add("animation"); }); // dies sollte Timeout/ Animation für den Gegner-Zug sein...
}
// Funktion für das Ablegen/ Userzug
// Stimmt die Wertigkeit/Farbe der geklickten Karte mit der Wertigkeit/Farbe der Karte auf dem Ablagestapel überein, kann diese gespielt werden
// Karte wird aus dem userARRAy gelöscht und in das ablegenARRAY gepusht
function karteSpielen(richtigeKarteKlick) {
    if (userARRAY[richtigeKarteKlick].katenNUMMER == ablegenARRAY[ablegenARRAY.length - 1].katenNUMMER || userARRAY[richtigeKarteKlick].kartenFARBE == ablegenARRAY[ablegenARRAY.length - 1].kartenFARBE) {
        ablegenARRAY.push(userARRAY[richtigeKarteKlick]);
        userARRAY.splice(richtigeKarteKlick, 1);
        generateKartenHTML();
        // Falls es sich um die letzte Karte handelt, hat der User gewonnen; nach dem Alert kann das Spiel neu geladen werden
        if (userARRAY.length < 1) {
            looseWin[1].play();
            alert("Du hast gewonnen!");
            location.reload();
        }
    }
}
// Funktion für das Gegner-Zug -> FUNKTIONIERT NICHT 
// Der Computer prüft seine Karten im Array; stimmt die Zahl/ Farbe überein, wird die Karte aus dem computerARRAY gelöscht und ins ablegenARRAY verschoben
function gegnerZug() {
    let computerZug = false;
    for (let i = 0; i < computerARRAY.length; i++) {
        if (computerARRAY[i].katenNUMMER == ablegenARRAY[ablegenARRAY.length - 1].katenNUMMER || computerARRAY[i].kartenFARBE == ablegenARRAY[ablegenARRAY.length - 1].kartenFARBE) {
            ablegenARRAY.push(computerARRAY[i]);
            computerARRAY.splice(i, 1);
            generateKartenHTML();
            computerZug = true;
        }
    }
    //Falls der Gegner keine Karten mehr hat, hat er gewonnen; nach dem Alert kann das Spiel neu geladen werden
    if (computerARRAY.length < 1) {
        looseWin[0].play();
        alert("Du hast verloren");
        location.reload();
    }
    //Falls das Deck nach dem Gegner-Zug leer ist, ist das Spiel unentschieden und kann neu geladen werden
    if (ziehenARRAY.length < 1) {
        looseWin[2].play();
        alert("Keine Karten im Deck... Das Spiel ist unentschieden!");
        location.reload();
    }
}
//# sourceMappingURL=code.js.map