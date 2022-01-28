let firstCard = 10
let secondCard = 19
let cardSum = firstCard + secondCard;
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")



function startGame() {
    if (cardSum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (cardSum === 21) {
        message = "You've got Blackjack!!";
        hasBlackjack = true
    } else {
        message = "You're out of the game!";
        isAlive = false
    }  
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + cardSum
}
  


