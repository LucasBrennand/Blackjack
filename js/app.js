let cards = [];
let sum = 0;
let yourself = ["Lucas",21,true];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); //ElementById = ids
//let sumEl = document.querySelector("#sum-el"); //querySelector = classes
let cardsEl = document.getElementById("cards-el");
let sentence = ["Hello","my","name","is","Lucas"];
let greetingEl = document.getElementById("greeting-el");
let count = "";
let player = {
  name: "Player",
  chips: 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" +player.chips;

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  player.chips -= 10;
  renderGame();
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++){
    cardsEl.textContent = cardsEl.textContent +cards[i]+" ";
  }
  sumEl.textContent = "Sum: "+sum;
  if (sum <= 20){
    message = "Do you want to draw a new card?";
  }
  else if (sum === 21){
    message = "Blackjack!";
    player.chips += 30;
    hasBlackJack = true;
  }
  else {
    message = "You lose!"
    isAlive = false;
  }
  messageEl.textContent = message;
}

function getRandomCard(){
  return Math.floor(Math.random() * 13) + 1;
}

function newCard(){
  if (isAlive === true && hasBlackJack === false){
    console.log("Picking a new card");
    let newCard = getRandomCard();
    cards.push(newCard)
    sum = sum + newCard;
    renderGame();
  }
}
