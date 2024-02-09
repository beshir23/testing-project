import { newOrder, Intestatario, Ordine } from './neworder'; 

describe('newOrder', () => {

  it('crea un nuovo ordine quando tutti i dati anagrafici sono presenti e corretti', () => {
    const datiIntestatario: Intestatario = {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
      codiceFiscale: 'RSSMRA90A01H501A'
    };

    const ordine: Ordine = newOrder(datiIntestatario);

    expect(ordine).toEqual(datiIntestatario);
  });

 
  it('solleva un errore quando uno dei dati anagrafici manca', () => {
    const datiIntestatario: Intestatario = {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
      codiceFiscale:'',
    };

    expect(() => newOrder(datiIntestatario)).toThrow('Dati anagrafici incompleti');
  });


  it('solleva un errore quando uno dei dati anagrafici è vuoto o undefined', () => {
    const datiIntestatario: Intestatario = {
      nome: 'Mario',
      cognome: '', 
      email: 'mario.rossi@example.com',
      codiceFiscale: 'RSSMRA90A01H501A'
    };

    expect(() => newOrder(datiIntestatario)).toThrow('Dati anagrafici incompleti');
  });


  it('solleva un errore quando i dati anagrafici sono incompleti', () => {
    const datiIntestatario: Intestatario = {
      nome: 'Mario',
      cognome: 'Rossi',
      email: '',
      codiceFiscale:'',


    };

    expect(() => newOrder(datiIntestatario)).toThrow('Dati anagrafici incompleti');
  });
});
