var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { 
	playerPick('rock') 
});
pickPaper.addEventListener('click', function() { 
	playerPick('paper') 
});
pickScissors.addEventListener('click', function() { 
	playerPick('scissors') 
});

var gameState = 'notStarted', //started // ended
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

// wyświetlanie elementów gry:
var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');
var gif = document.getElementById("gif");
var gif2 = document.getElementById("gif2");

function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			gif.style.display = "none";
			gif2.style.display = "none";
		break;
		case 'ended':
			newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
			gif.style.display = "none";
			gif2.style.display = "none";
		console.log('początkowy stan gry zanim kliknie sie nowa gra');
	}
}
setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointElem = document.getElementById('js-computerPoints');

function newGame() {
	player.name = prompt('Please enter your name', 'Player name'); // wywolanie okienka z zapytaniem o imie
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		playerNameElem.innerHTML = player.name;
		setGamePoints(); // funkcja utworzona ponizej
		console.log('kliknieto nowa gra i podano imie gracza');
		
	}
}	
var x = Math.random();
Math.floor(Math.random()*3);

function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
	console.log(543);
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
    console.log('gracz wybral jedna opcje - klik na rock paper lub scissons');
}
function checkRoundWinner(playerPick, computerPick) {
  	playerResultElem.innerHTML = computerResultElem.innerHTML = '';
	var winnerIs = 'player';
    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
        playerResultElem.innerHTML = 'Remis';
        computerResultElem.innerHTML = 'Remis';
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    setGamePoints();
    finishedGame(); 
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointElem.innerHTML = computer.score;
	console.log('punkty gry, uruchamia sie po kliknieciu nowa gra');
}
function finishedGame() {
	if (player.score == 8) {
		gameState = 'ended';
		alert(player.name + ' won the game!');
	} else if (computer.score == 8) {
		gameState = 'ended';
		alert('Computer won!');
	}
	setGameElements();
	gifEnd();
	gifComp();
}
function gifEnd() {
	if (player.score == 8) {
		gif.style.display = "block";
	}
	console.log('gifyyyyyy');
}
function gifComp() {
	if (computer.score == 8) {
		gif2.style.display = "block";
	}
}