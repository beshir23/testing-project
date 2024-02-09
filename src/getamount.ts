function getAmount(ordine) {

    if (!ordine) {
        throw new Error('Ordine non definito');
    }

    let imponibile = 0;
    let iva = 0;
    let totale = 0;

    if (ordine.giftcards && ordine.giftcards.length > 0) {
        ordine.giftcards.forEach(giftcard => {
            imponibile += giftcard.valore * giftcard.quantita;
        });
    }

  
    iva = imponibile * 0.22;

 
    totale = imponibile + iva;

    
    return {
        imponibile: imponibile,
        iva: iva,
        totale: totale
    };
}


const ordine = {
    giftcards: [
        { codice: 'ABC123', valore: 50, quantita: 2 },
        { codice: 'DEF456', valore: 30, quantita: 1 }
    ]
};

const totali = getAmount(ordine);
console.log(totali);
