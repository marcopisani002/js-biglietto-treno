const kmTreno = parseInt(prompt("Inserisca il numero di km che vuole percorrere"));
console.log("Chilometraggio inserito:", kmTreno);
console.log("Tipologia:", typeof kmTreno);
if (isNaN(kmTreno)) {

    alert("Dato inserito non valido: Aggiornare e Riprovare inserendo un numero valido.");
}



const age = parseInt(prompt("Inserisca l'eta del passeggero"));
console.log("età inserita:", age);
console.log("Tipologia:", typeof age);
if (isNaN(age)) {
    alert("Dato inserito non valido: Aggiornare e Riprovare inserendo un numero valido.");
}


const prezzo = kmTreno * 0.21;

console.log("Prezzo senza sconto:", prezzo);
console.log("Tipologia:", typeof prezzo);

// caso in cui lo sconto non può essere applicato

if (age > 18 && age < 65) {
    console.log("L'utente ha un'età compresa tra i 18 e i 65 e NON ha diritto agli sconti.");
}

// sconto per under 18 = 20%

if (age < 18) {
    const prezzoSale = prezzo * 0.8;
    // prezzo arrotondato per difetto
    const numFloor = Math.floor( prezzoSale);
    console.log("Prezzo finale scontato UNDER 18:", numFloor);
}

// sconto over 65 = 40%
if (age > 65) {
    const prezzoSale = prezzo * 0.6;
    // prezzo arrotondato per eccesso
    const numCeil = Math.ceil( prezzoSale);
    console.log("Prezzo finale scontato OVER 65:", numCeil);
}
