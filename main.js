const rndmBtn = document.querySelector('.advice-container__button');
const adviceIdHolder = document.getElementById('advice-no');
const adviceTextHolder = document.getElementById('advice-text');


rndmBtn.addEventListener('click', async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const adviceJson = await response.json();

        adviceIdHolder.textContent = adviceJson.slip.id;
        adviceTextHolder.textContent = adviceJson.slip.advice;
    })

