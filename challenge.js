// Rules of the game :

/*
  
1. A player looses his entire score if he rolls two 6 in a row and after that it's the next player's turn.
2. player can set the winning score
3. add one more dice in the game and player looses his entire current score when one of them is a 1. 

*/

var scores, roundScore, activePlayer,gamePlaying,lastDice;

init();



document.querySelector('.btn-roll').addEventListener('click', function() {

      if(gamePlaying)
      {
         var dice = Math.floor(Math.random() * 6) + 1;
         console.log(dice);
         var diceDom = document.querySelector('.dice');
         diceDom.style.display = 'block';
         diceDom.src = 'Dice-' + dice + '.png'; 
       
     if(dice === 6 && lastDice ===6)

     {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0'; 
        nextPlayer();
     }  else 


     if(dice !== 1)
     {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

     }else 

        {
         
          nextPlayer();
        }
       lastDice = dice;
 }

});



document.querySelector('.btn-hold').addEventListener('click', function(){
      
      if(gamePlaying)
      {
    // add current score into global score
             scores[activePlayer] += roundScore;
      // update the ui
             document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];   

    //check if player won the match

    if(scores[activePlayer] >= 20) {
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
       document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
       gamePlaying = false;
    
    } else {

          // switch player
    
            nextPlayer();   
    }                       
     }
     });


function nextPlayer() {


           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

           roundScore = 0;

           document.getElementById('current-0').textContent = '0';
           document.getElementById('current-1').textContent = '0';


           document.querySelector('.player-0-panel').classList.toggle('active'); 
           document.querySelector('.player-1-panel').classList.toggle('active');                                     
                  
           document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {

               scores = [0,0];
               roundScore = 0;
               activePlayer = 0;
               gamePlaying = true;
               document.querySelector('.dice').style.display = 'none';
               document.getElementById('score-0').textContent = '0';
               document.getElementById('current-0').textContent = '0';
               document.getElementById('score-1').textContent = '0';
               document.getElementById('current-1').textContent = '0';

               //document.querySelector('#current-' + activePlayer).textContent = dice;
               //var x = document.querySelector('#score-0').textContent;

               //console.log(x);
               // change the playername winner to name

               document.querySelector('#name-0').textContent = 'player 1';
               document.querySelector('#name-1').textContent = 'player 2'; 
               
                document.querySelector('.player-0-panel').classList.remove('winner');
                 document.querySelector('.player-1-panel').classList.remove('winner');
                 document.querySelector('.player-0-panel').classList.remove('active'); 
                 document.querySelector('.player-1-panel').classList.remove('active');
                 document.querySelector('.player-0-panel').classList.add('active');  
}