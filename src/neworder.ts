interface Intestatario {
    nome: string;
    cognome: string;
    email: string;
    codiceFiscale: string;
}

interface Ordine {
    nome: string;
    cognome: string;
    email: string;
    codiceFiscale: string;
    giftcards?: Giftcard[];

}

function newOrder(intestatario: Intestatario): Ordine {
    if (!intestatario || !intestatario.nome || !intestatario.cognome || !intestatario.email || !intestatario.codiceFiscale) {
        throw new Error('Dati anagrafici incompleti');
    }

    const ordine: Ordine = {
        nome: intestatario.nome,
        cognome: intestatario.cognome,
        email: intestatario.email,
        codiceFiscale: intestatario.codiceFiscale,

    };

    return ordine;
}

const datiIntestatario: Intestatario = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    codiceFiscale: 'RSSMRA90A01H501A'
};

const nuovoOrdine: Ordine = newOrder(datiIntestatario);
console.log(nuovoOrdine);
