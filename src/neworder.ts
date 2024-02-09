function newOrder(intestatario) {
    if (!intestatario || !intestatario.nome || !intestatario.cognome || !intestatario.email || !intestatario.codiceFiscale) {
        throw new Error('Dati anagrafici incompleti');
    }

   
    const ordine = {
        nome: intestatario.nome,
        cognome: intestatario.cognome,
        email: intestatario.email,
        codiceFiscale: intestatario.codiceFiscale,
    };

    return ordine;
}

const datiIntestatario = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'mario.rossi@example.com',
    codiceFiscale: 'RSSMRA90A01H501A'
};

const nuovoOrdine = newOrder(datiIntestatario);
console.log(nuovoOrdine);
