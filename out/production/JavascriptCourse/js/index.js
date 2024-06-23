let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let fruit = ["🍎","🍊","🍎","🍎","🍊"];

function sortFruit() {
  for (let i = 0; i < fruit.length; i++){
    if (fruit[i] === "🍎"){
      appleShelf.textContent = appleShelf.textContent + "🍎"
    }
    else if (fruit[i] === "🍊"){
      orangeShelf.textContent = orangeShelf.textContent + fruit[i] + " "
    }
  }
}

sortFruit();

