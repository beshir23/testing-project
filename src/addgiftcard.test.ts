import { isMissingDeclaration } from 'typescript';
import { addGiftcard, Ordine, Giftcard } from './addgiftcard'; 

describe('addGiftcard', () => {

  it('aggiunge correttamente una giftcard all\'ordine', () => {
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

    expect(ordineAggiornato.giftcards).toBeDefined();
    expect(ordineAggiornato.giftcards.length).toBe(1);
    expect(ordineAggiornato.giftcards[0]).toEqual(giftcardData);
  });

  it('solleva un errore quando ordine o dati della giftcard non sono definiti', () => {
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

    expect(() => addGiftcard(undefined, giftcardData)).toThrow('Ordine o dati della giftcard non definiti');

    expect(() => addGiftcard(ordineOriginale, undefined)).toThrow('Ordine o dati della giftcard non definiti');
  });


  it('aggiunge correttamente una giftcard quando la proprietà giftcards dell\'ordine non è definita', () => {
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

    expect(ordineAggiornato.giftcards).toBeDefined();
    expect(ordineAggiornato.giftcards.length).toBe(1);
    expect(ordineAggiornato.giftcards[0]).toEqual(giftcardData);
  });


  it('solleva un errore quando i dati della giftcard sono incompleti', () => {
    const ordineOriginale: Ordine = {
      nome: 'Mario',
      cognome: 'Rossi',
      email: 'mario.rossi@example.com',
      codiceFiscale: 'RSSMRA90A01H501A'
    };

    const giftcardData: Giftcard = {
      valore: 50, 
      quantita: 1 
    };

    expect(() => addGiftcard(ordineOriginale, giftcardData)).toThrow('Ordine o dati della giftcard non definiti');
  });
});
