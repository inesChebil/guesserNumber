// Game Values
let min=Math.floor(Math.random()*20+1),
    max=Math.floor(Math.random()*30+20),
    winningNumber=getRandomNum(),
    guessesLeft=3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBTN=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');

// Assign UI MIN AND MAX
maxNum.textContent=max;
minNum.textContent=min;

document.addEventListener('keydown', function(e){
   if(e.keyCode === 87) {
   guessInput.value = winningNumber;
   }
  });
function getRandomNum(){
   
   return Math.floor(Math.random()*(max-min+1))+min;
}
// Play again event listener
game.addEventListener('mousedown',(e)=>{
   if(e.target.className==='play-again'){
     window.location.reload();
   }
 
});
// Add Event Listener to guess Button
guessBTN.addEventListener('click',function (){
  let guess =parseInt(guessInput.value);
  if(isNaN(guess)|| guess < min || guess > max){
     setMessage(`Please Enter a number between ${min} and ${max}`,'red');

   //   We don't wanna count an invalid input
   return ;

  }
   if(guess ===winningNumber){
      // Game over -won
     gameOver(true,`${winningNumber} is correct, YOU WIN !`);
   
   }else {
    guessesLeft -=1;
    if(guessesLeft===0){
      //  Game over -lost
     gameOver(false,` Game Over,You LOST the correct number was ${winningNumber}`);
     

    }else {
      //  game continues -answer wrong
      guessInput.style.borderColor='red';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left !`,'blue');
      guessInput.value='';
    }
   }
});
function gameOver(won,msg){
   let color;
   won ===true? color='green':color='red';
   guessInput.disabled=true;
 
   guessInput.style.borderColor=color;
   setMessage(msg,color);
   // play again
   guessBTN.value='Play again';
   guessBTN.className +='play-again';
}

function setMessage(msg,color){
    message.textContent=msg;
    message.style.color=color;
}




       