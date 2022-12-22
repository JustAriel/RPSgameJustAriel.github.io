//starter screen:
const everything = document.querySelector('.Everything');
//scissors:
const scissors = document.querySelector('.scissors');
//rock:
const rock = document.querySelector('.rock');
//paper:
const paper = document.querySelector('.paper');
//display number 1 (rock):
const displayOne = document.querySelector('.battle');
//display number 2 (paper):
const displayTwo = document.querySelector('.battle-2');
//display number 3 (scissors):
const displayThree = document.querySelector('.battle-3');
//every battle items right here:
const battleEverything = document.querySelector('.battle-everything');
//the your scissors in the battle:
const scissorsYou = document.querySelector('.scissorsYouBattle');
//the your paper in the battle:
const paperYou = document.querySelector('.paperYouBattle');
//the your rock in the battle:
const rockYou = document.querySelector('.rockYouBattle');
//area of You battle:
const youArea = document.querySelector('.battleYou');
//WLD displayer:
const WLDdisplayer = document.querySelector('.WLDdisplayer');
//play again button:
const playAgain = document.querySelector('.playAgainButton');
//information text:
const informationText = document.querySelector('.information');
//buttons to scroll:
const toScrollButtons = document.querySelector('.buttonsToScroll');
//player score:
const playerScore = document.getElementById('player-score');
//back button:
const backButton = document.querySelector('.scrollToStart');
//you text:
const youText = document.querySelector('.you');
//enemy text:
const enemyText = document.querySelector('.enemy');

//by default:
youArea.style.display = 'none';
rockYou.style.display = 'none';
scissorsYou.style.display = 'none';
paperYou.style.display = 'none';

//to open battle window and to close the started window:
function openBattleArea() {
   backButton.style.display = 'none';
   toScrollButtons.style.display = 'none';
   battleEverything.style.display = 'block';
   everything.style.display = 'none';
   informationText.style.display = 'none';
   youText.style.display = 'block';
   enemyText.style.display = 'block';
}

//for scissors eventListener when you clicked the scissors item:
function showTheScissorsYou() {
   scissorsYou.style.display = 'block';
   youArea.style.display = 'block';
}

//for rock eventListener when you clicked the rock item:
function showTheRockYou() {
   rockYou.style.display = 'block';
   youArea.style.display = 'block';
}

//for paper eventListener when you clicked the paper item:
function showThePaperYou() {
   paperYou.style.display = 'block';
   youArea.style.display = 'block';
}

//the timer:
function interval() {
   console.log('Battle started');
   setTimeout(function() {
      clearInterval();
   }, 1000);
}

//when you click on a scissors:
scissors.addEventListener('click', () => {
   everything.style.display = 'none';
   informationText.style.display = 'none';
   backButton.style.display = 'none';
   setInterval(interval, 500);
      //the battle:
      setTimeout(function() {
         //calling to choose bot:
         clearInterval();
         showTheScissorsYou();
         botPickerForScissors();
      }, 500);
});

//when you click on a rock:
rock.addEventListener('click', () => {
   everything.style.display = 'none';
   informationText.style.display = 'none';
   backButton.style
   //the battle:
   setTimeout(function() {
      //calling to choose bot:
      clearInterval();
      botPickerForRock();
      showTheRockYou();
   }, 500);
   setInterval(interval, 500);
});

//when you click on a paper:
paper.addEventListener('click', () => {
   everything.style.display = 'none';
   informationText.style.display = 'none';
   backButton.style
   setInterval(interval, 500);
      //the battle:
      setTimeout(function() {
         //calling to choose bot:
         clearInterval();
         showThePaperYou();
         botPickerForPaper();
      }, 500);
});

//The random picker bot for scissors:
function botPickerForScissors() {  
   theMath = Math.round(Math.random() * (3 - 1) + 1);
   if (theMath === 1) {
      displayOne.style.display = 'block';
      openBattleArea();
      showTheScissorsYou();
      playerScore.innerHTML = parseInt(playerScore.innerHTML) - 1;
      WLDdisplayer.innerHTML = `Lose!`;
   } else if (theMath === 2) {
      displayThree.style.display = 'block';
      openBattleArea();
      showTheScissorsYou();
      WLDdisplayer.innerHTML = `Tie!`;
   } else {
      displayTwo.style.display = 'block';
      openBattleArea();
      showTheScissorsYou();
      playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
      WLDdisplayer.innerHTML = `Win!`;
   } 
}

//The random picker bot for paper:
function botPickerForPaper() {  
   theMath = Math.round(Math.random() * (3 - 1) + 1);
   if (theMath === 1) {
      displayThree.style.display = 'block';
      openBattleArea();
      showThePaperYou();
      playerScore.innerHTML = parseInt(playerScore.innerHTML) - 1;
      WLDdisplayer.innerHTML = `Lose!`;
      console.log('you lose');
   } else if (theMath === 2) {
      displayTwo.style.display = 'block';
      openBattleArea();
      showThePaperYou();
      WLDdisplayer.innerHTML = `Tie!`;
   } else {
      displayOne.style.display = 'block';
      showThePaperYou();
      openBattleArea();
      playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
      WLDdisplayer.innerHTML = `Win!`;
   } 
}

//The random picker bot for rock:
function botPickerForRock() {  
   theMath = Math.round(Math.random() * (3 - 1) + 1);
   if (theMath === 1) {
      displayThree.style.display = 'block';
      openBattleArea();
      showTheRockYou();
      playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
      WLDdisplayer.innerHTML = `Win!`;
   } else if (theMath === 2) {
      displayOne.style.display = 'block';
      openBattleArea();
      showTheRockYou();
      WLDdisplayer.innerHTML = `Tie!`;   
   } else {
      displayTwo.style.display = 'block';
      openBattleArea();
      showTheRockYou();
      playerScore.innerHTML = parseInt(playerScore.innerHTML) - 1;
      WLDdisplayer.innerHTML = `Lose!`;
   } 
}

//whats need to run after the clicking the game over button:
function deleteAfterClickingGameOver() {
   backButton.style.display = 'block';
   toScrollButtons.style.display = 'block';
   everything.style.display = 'block';
   battleEverything.style.display = 'none';
   youArea.style.display = 'none';
   paperYou.style.display = 'none';
   rockYou.style.display = 'none';
   scissorsYou.style.display = 'none';
   displayOne.style.display = 'none';
   displayTwo.style.display = 'none';
   displayThree.style.display = 'none';
   informationText.style.display = 'block';
}

//after clicking the play again button:
playAgain.addEventListener('click', () => {
   deleteAfterClickingGameOver();
});

// Select the element to attach the event listener to
const scrollLink = document.querySelector('.scroll-link');

// Print the element to the console to check if it exists
console.log(scrollLink);

// Check if the element exists before trying to add the event listener
if (scrollLink) {
   scrollLink.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.classList.add('animated-element');
      targetElement.scrollIntoView({ behavior: 'smooth' });
   });
} else {
   console.error('Scroll link not found');
}