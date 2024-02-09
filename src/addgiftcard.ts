function addGiftcard(ordine, giftcardData) {
    
    if (!ordine || !giftcardData || !giftcardData.codice || !giftcardData.valore || !giftcardData.quantita) {
        throw new Error('Ordine o dati della giftcard non definiti');
    }

    
    const giftcard = {
        codice: giftcardData.codice,
        valore: giftcardData.valore,
        quantita: giftcardData.quantita
    };

    
    if (!ordine.giftcards) {
        ordine.giftcards = []; 
    }
    ordine.giftcards.push(giftcard);

    
    return ordine;
}


const ordineOriginale = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    codiceFiscale: 'RSSMRA90A01H501A'
};

const giftcardData = {
    codice: 'ABC123',
    valore: 50, 
    quantita: 1 
};

const ordineAggiornato = addGiftcard(ordineOriginale, giftcardData);
console.log(ordineAggiornato);
