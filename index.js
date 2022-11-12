$('.refresh-btn').click(rollDice);
let score1 = 0;
let score2 = 0;


function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let player1Score = document.querySelector('.player1score');
  let player2Score = document.querySelector('.player2score');

  $('.img1').attr('src', 'images/dice' + randomNumber1 + '.png');
  $('.img2').attr('src', 'images/dice' + randomNumber2 + '.png');

  $('.score').css({'visibility' : 'visible'});

  if (randomNumber1 > randomNumber2) {
    $('displayWinner').textContent = 'Player 1 wins!';
    score1++;
    player1Score.textContent = score1;
    $('.img1').addClass('winner');
    setTimeout(() => {
      $('.img1').removeClass('winner');
    }, 100);
  } else if (randomNumber1 < randomNumber2) {
    $('displayWinner').textContent = 'Player 2 wins!';
    score2++;
    player2Score.textContent = score2;
    $('.img2').addClass('winner');
    setTimeout(() => {
      $('.img2').removeClass('winner');
    }, 100);
  } else {
    $('displayWinner').textContent = 'It\'s a tie!';
  }
}