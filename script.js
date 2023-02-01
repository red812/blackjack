let score = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cardsEl = document.getElementById("cardsEl");
let welcomeEl = document.getElementById("welcomeEl");
let scoreEl = document.getElementById("scoreEl");
let newCardBtn = document.getElementById("newCardBtn");

function clearBoard() {
    score = 0;
    hasBlackJack = false;
    cards = [];
}

function dealtwoCards() {
    cards = [getRandomCard(), getRandomCard()];
    score = cards[0] + cards[1]; 
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    dealtwoCards();
    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*12) + 1;
    if(randomNumber >10) {
        return 10;
    } else if(randomNumber ===1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards:";
    newCardBtn.disabled = false;
    console.log(cards);
    
    for(let i =0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    scoreEl.textContent = "Score:" + score;
    if(score<=20) {
        message = "Do you want to draw a new card?";
    } else if (score === 21) {
        message = "You've got BlackJack";
        hasBlackJack = true; 
    } else {
        message = "Bust!";
        isAlive = false;
        clearBoard();
        newCardBtn.disabled = true;
    }
    welcomeEl.textContent = message;
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        score += card;
        cards.push(card);
        renderGame();
    }
}

// ToDo
// Implement Dealer Game