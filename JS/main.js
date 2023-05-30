// JS LINK RUN CHECK
console.log('JS OK!');

/*-------------
 INITIAL STEPS 
 -------------*/

// NAME
const inputName = document.getElementById('user-name');
console.log(inputName);

// KMS
const inputKms = document.getElementById('user-kms');
console.log(inputKms);

// AGE
const inputAge = document.getElementById('user-age');
console.log(inputAge);

// BUTTON
const button = document.querySelector('#submit-btn')
console.log(button);

// PRICE PER KM
let pricePerKm = 0.21;
console.log(pricePerKm);

// DISCOUNT
let discount = null;

// EVENT LISTENER
button.addEventListener('click', function () { 
    // ! VALIDAZIONE ! // 
    const userName = inputName.value.trim();
    const userKms = inputKms.value;
    const userAge = inputAge.value;
    console.log(userName, userKms, userAge);

    if ((userName === "") || (userKms <= 0) || (userAge <= 0)) {
        alert('I dati inseriti non sono validi.');
        alert('Perfavore, ricaricare la pagina.');
    } else {

        // Calcolo del prezzo
        let calcPrice = userKms * pricePerKm;
        console.log(calcPrice);

        if (userAge >= 65) {
            calcPrice *= 0.6
            console.log(calcPrice);
        } else if (userAge <= 17) {
            calcPrice *= 0.8
            console.log(calcPrice);
        }
    }
});