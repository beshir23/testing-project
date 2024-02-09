import { getAmount, Ordine, Giftcard } from './getamount'; 

describe('getAmount', () => {

  it('calcola correttamente l\'imponibile, l\'IVA e il totale per un ordine con giftcard', () => {
    const ordine: Ordine = {

        nome : 'mario',
        cognome: 'rossi',
        email: 'mario.rossi@example.com',
        codiceFiscale: 'RSSMRA90A01H501A',

      giftcards: [
        { codice: 'ABC123',valore: 50, quantita: 2 },
        { codice: 'def456', valore: 30, quantita: 1 }
      ]
    };

    const totali = getAmount(ordine);

    expect(totali.imponibile).toBe(130);
    expect(totali.iva).toBe(28.6);
    expect(totali.totale).toBe(158.6);
  });


  it('solleva un errore quando non ci sono giftcard nell\'ordine', () => {
    const ordine: Ordine = {

        nome : 'mario',
        cognome: 'rossi',
        email: 'mario.rossi@example.com',
        codiceFiscale: 'RSSMRA90A01H501A',

        giftcards: [
          { codice: '',valore: 0 , quantita:0 }
        ]
      };
    expect(() => getAmount(ordine)).toThrow('Nessuna giftcard nell\'ordine');
  });


  it('calcola correttamente i totali quando l\'ordine ha una sola giftcard', () => {
    const ordine: Ordine = {

        nome : 'mario',
        cognome: 'rossi',
        email: 'mario.rossi@example.com',
        codiceFiscale: 'RSSMRA90A01H501A',

      giftcards: [
        { codice: 'def456', valore: 30, quantita: 1 }
      ]
    };

    const totali = getAmount(ordine);

    expect(totali.imponibile).toBe(50);
    expect(totali.iva).toBe(11);
    expect(totali.totale).toBe(61);
  });

})
