# CALCOLO BIGLIETTO TRENO
Scrivere un programma che chieda all’utente:
- Il proprio nome;
- Il numero di chilometri da percorrere;
- Età del passeggero.
<br>
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
<br>
    - il prezzo del biglietto è definito in base ai km (0.21 € al km);
    - va applicato uno sconto del 20% per i minorenni;
    - va applicato uno sconto del 40% per gli over 65.
<br>
# STEPS

0. Selezionare gli elementi dal DOM;
1. Chiedere all'utente il numero di chilometri da percorrere;
2. Chiedere all'utente l'età;
3. Calcolare il prezzo totale del viaggio arrotondato al centesimo;
4. Applicare lo sconto ove richiesto:<br>
   - **SE** l'età inserita è <= 17 applicare uno sconto del 20% al risultato;<br>
   - **SE** l'età inserita è >= 65 applicare uno sconto del 40% al risultato;
5. Stampare il risultato ottenuto negli elementi del DOM.

# BONUS

- Randomizzare un numero per la carrozza dell'utente;
- Randomizzare un numero per il codice del biglietto;
- Utilizzare una select invece di un input per determinare l'età dell'utente;
- Implementare il reset del form tramite un bottone di reset.