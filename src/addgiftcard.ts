export interface Ordine {
    nome: string;
    cognome: string;
    email: string;
    codiceFiscale: string;
    giftcards?: Giftcard[];
}

export interface Giftcard {
    codice: string;
    valore: number;
    quantita: number;
}

export function addGiftcard(ordine: Ordine, giftcardData: Giftcard): Ordine {
  
    if (!ordine || !giftcardData || !giftcardData.codice || !giftcardData.valore || !giftcardData.quantita) {
        throw new Error('Ordine o dati della giftcard non definiti');
    }

    const giftcard: Giftcard = {
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

const ordineOriginale: Ordine = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    codiceFiscale: 'RSSMRA90A01H501A'
};

const giftcardData: Giftcard = {
    codice: 'ABC123',
    valore: 50, 
    quantita: 1 
};

const ordineAggiornato: Ordine = addGiftcard(ordineOriginale, giftcardData);
console.log(ordineAggiornato);
