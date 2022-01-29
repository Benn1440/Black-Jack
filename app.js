let cards = [];
let cardSum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

function getrandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getrandomCard();
  let secondCard = getrandomCard();
  cards = [firstCard, secondCard];
  cardSum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (cardSum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (cardSum === 21) {
    message = "You've got Blackjack!!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + cardSum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newcard() {
  if (isAlive === true && hasBlackjack === false) {
    let myCard = getrandomCard();
    cardSum += myCard;
    cards.push(myCard);
    renderGame();
  }
}

let player = {
  name: "Per",
  chips: 1200,
};

playerEl.textContent = player.name + ": $" + player.chips;
