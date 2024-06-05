// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


// selezione input km da percorrere
const askKm = document.querySelector(".input-km");

console.log(askKm);

// selezione input età
const askAge = document.querySelector(".input-age");

console.log(askAge);


// gestione attività del bottone al click

const myButton = document.querySelector(".input-button");

myButton.addEventListener("click",
    function(){
        // value km
        let inputValueKm = parseInt(askKm.value);

        // value age
        let inputValueAge = parseInt(askAge.value);
        
        console.log(inputValueKm, inputValueAge);

        // calcolo prezzo al km
        let firstPrice = inputValueKm * 0.21

        console.log(firstPrice);

        // applicazione eventuali sconti
        let finalPrice;

        if (inputValueAge < 18) { // se minorenne sconto 20%

            finalPrice = firstPrice - (firstPrice * 0.20);
            console.log(finalPrice);
        
        } else if (inputValueAge > 65) { // se over 65 sconto 40%
        
            finalPrice = firstPrice - (firstPrice * 0.40);
            console.log(finalPrice);
        
        } else { // altrimenti prezzo normale
            finalPrice = firstPrice;
        }

        // aggiustamento prezzo a due decimali
        let refinedPrice = finalPrice.toFixed(2);
        console.log(refinedPrice);
    }
)


