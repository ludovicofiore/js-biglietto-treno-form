// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


// richiesta km da percorrere
const askKm = document.querySelector(".inputkm");

console.log(askKm);

// richiesta età


// calcolo prezzo al km


// calcolo eventuale sconto


// gestione bottone

const myButton = document.querySelector(".input-button");

myButton.addEventListener("click",
    function(){
        let inputValueKm = askKm.value;
        console.log(inputValueKm);
    }
)
