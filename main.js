const rndmBtn = document.querySelector('.advice-container__button');
const adviceIdHolder = document.getElementById('advice-no');
const adviceTextHolder = document.getElementById('advice-text');

const getRandomAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
        const adviceJson = await response.json();

        adviceIdHolder.textContent = adviceJson.slip.id;
        adviceTextHolder.textContent = adviceJson.slip.advice;
}

// Populate targeted fields with the response from the API call on page load
window.onload = getRandomAdvice; 

// Populate targeted fields with the response from the API call on button click
rndmBtn.addEventListener('click', getRandomAdvice);

