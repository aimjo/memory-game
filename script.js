const gameContainer = document.getElementById("game");
let firstCard = null;
let secondCard = null;
let cardsFlipped = 0;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {  // While there are elements in the array
    let index = Math.floor(Math.random() * counter);  // Pick a random index
    counter--; // Decrease counter by 1
    let temp = array[counter];  // And swap the last element with it
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");  // create a new div
    newDiv.classList.add(color);  // give it a class attribute for the value we are looping over
    newDiv.addEventListener("click", handleCardClick); // call a function handleCardClick when a div is clicked on
    gameContainer.append(newDiv); // append the div to the element with an id of game

  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log(event.target)
  let totalCards = shuffledColors.length-1;
  const clickedCard = event.target;
  // clickedCard.style.backgroundColor = clickedCard.classList[0];

  if(clickedCard.classList.contains("flipped") || clickedCard.classList.contains("matched")) {
    return;
  }

  if (firstCard && secondCard) {
    return; // stops more than two cards being selected
  }

  clickedCard.classList.add("flipped");

  if (!firstCard) {
    console.log('card is null', clickedCard)
    firstCard = clickedCard; //first card clicked
    

  } else if (!secondCard) {
    secondCard = clickedCard; //second card clicked
    

    // console.log(firstCard, secondCard);

    if (firstCard.className === secondCard.className) {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      cardsFlipped += 2;
      firstCard = null;
      secondCard = null;

      if (cardsFlipped === totalCards) {
        
      }
    } else {
      console.log('logging first card', firstCard)
      setTimeout(function() {
        console.log("i'm being executed")
        console.log("first card", firstCard);
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        cardsFlipped += 2;
        firstCard = null;
        secondCard = null;
      }, 1000);
    
    }

  }
  
}




// when the DOM loads
createDivsForColors(shuffledColors);
