
export interface Ordine {
    giftcards?: Giftcard[];
}

export interface Giftcard {
    codice: string;
    valore: number;
    quantita: number;
}

export interface Totali {
    imponibile: number;
    iva: number;
    totale: number;
}

export function getAmount(ordine: Ordine): Totali {

    if (!ordine || !ordine.giftcards || ordine.giftcards.length === 0) {
        throw new Error('Nessuna giftcard nell\'ordine');
    }

    let imponibile = 0;
    let iva = 0;
    let totale = 0;

    ordine.giftcards.forEach(giftcard => {
        imponibile += giftcard.valore * giftcard.quantita;
    });
    iva = imponibile * 0.22; 

    totale = imponibile + iva;

    return {
        imponibile: imponibile,
        iva: iva,
        totale: totale
    };
}


const totali: Totali = getAmount(ordine);
console.log(totali);
