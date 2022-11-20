alert('Answer the all boxes carefully !!!');


//getting the player 1 entered data

var player1Hero = document.getElementById("helper").getAttribute("data-p1hero").trim().toLowerCase();
var player1Heroine = document.getElementById("helper").getAttribute("data-p1heroine").trim().toLowerCase();
var player1Song = document.getElementById("helper").getAttribute("data-p1song").trim().toLowerCase();
var player1Movie = document.getElementById("helper").getAttribute("data-p1movie").trim().toLowerCase();
var player1HeroHint = document.getElementById("helper").getAttribute("data-p1herohint");
var player1HeroineHint = document.getElementById("helper").getAttribute("data-p1heroinehint");
var player1SongHint = document.getElementById("helper").getAttribute("data-p1songhint");
var player1MovieHint = document.getElementById("helper").getAttribute("data-p1moviehint");


// changing letter for give hint
document.querySelector('.hero1stLetter').innerHTML = player1Hero[0].toUpperCase();
document.querySelector('.heroine1stLetter').innerHTML = player1Heroine[0].toUpperCase();
document.querySelector('.song1stLetter').innerHTML = player1Song[0].toUpperCase();
document.querySelector('.movie1stLetter').innerHTML = player1Movie[0].toUpperCase();

// hint checking's
var span = document.querySelectorAll('span');

//cross check...
function crossSymbolCheck() {
  for (var i = 0; i < 9; i++) {
    if (span[i].classList != 'text-cross') {
      span[i].classList.add('text-cross');
      break;
    }
  }
}

// game over
function gameover() {
  if (span[8].classList.contains('text-cross')) {
    document.querySelector('.title').innerHTML = "GAME OVER";
    document.querySelector('.title').classList.add('text-cross')
    const deleteData = document.querySelector('.delete-req');
    deleteData.setAttribute("type", "submit")
  }
}


//input checking 1
function inputCheck() {
  var input_tag = document.getElementById('heroValidation');
  // Get the value of the input field with id
  let player1In = input_tag.value.trim().toLowerCase();
  // hero name from player1data
  let player2In = player1Hero;
  if (player1In == player2In) {
    input_tag.classList.add('is-valid');
    input_tag.classList.remove('is-invalid');
    wingame();
  } else {
    input_tag.classList.add('is-invalid');
    input_tag.classList.remove('is-valid');
    crossSymbolCheck();
    gameover();
  }
}

//input checking 2
function inputCheck2() {
  var input_tag = document.getElementById('heroineValidation');
  // Get the value of the input field with id
  let player1In = input_tag.value.trim().toLowerCase();
  // heroine name from player1data
  let player2In = player1Heroine;
  if (player1In == player2In) {
    input_tag.classList.add('is-valid');
    input_tag.classList.remove('is-invalid');
    wingame();
  } else {
    input_tag.classList.add('is-invalid');
    input_tag.classList.remove('is-valid');
    crossSymbolCheck();
    gameover();
  }
}

// input checking 3
function inputCheck3() {
  var input_tag = document.getElementById('songValidation');
  // Get the value of the input field with id
  let player1In = input_tag.value.trim().toLowerCase();
  // Song name from player1data
  let player2In = player1Song;
  if (player1In == player2In) {
    input_tag.classList.add('is-valid');
    input_tag.classList.remove('is-invalid');
    wingame();
  } else {
    input_tag.classList.add('is-invalid');
    input_tag.classList.remove('is-valid');
    crossSymbolCheck();
    gameover();
  }
}

// input checking 4
function inputCheck4() {
  var input_tag = document.getElementById('movieValidation');
  // Get the value of the input field with id
  let player1In = input_tag.value.trim().toLowerCase();
  // movie name from player1data
  let player2In = player1Movie;
  if (player1In == player2In) {
    input_tag.classList.add('is-valid');
    input_tag.classList.remove('is-invalid');
    wingame();
  } else {
    input_tag.classList.add('is-invalid');
    input_tag.classList.remove('is-valid');
    crossSymbolCheck();
    gameover();
  }
}


//click call 1
var handleClickExecuted = false;
var handleClickExecutedCaller = false;
const handleClick = (button) => {
  if (!handleClickExecuted) {
    function hC() {
      button.innerHTML = player1HeroHint;
      crossSymbolCheck();
      gameover();
    }
    handleClickExecuted = true;
  } else {
    console.log('already handled')
  }
  if (!handleClickExecutedCaller) {
    button.addEventListener('click', hC());
    handleClickExecutedCaller = true;
  }
}

//click call 2
var handleClick2Executed = false;
var handleClick2ExecutedCaller = false;

function handleClick2(button) {
  if (!handleClick2Executed) {
    function hC() {
      button.innerHTML = player1HeroineHint;
      crossSymbolCheck();
      gameover();
    }
    handleClick2Executed = true;
  } else {
    console.log('already handled')
  }
  if (!handleClick2ExecutedCaller) {
    button.addEventListener('click', hC());
    handleClick2ExecutedCaller = true;
  }
}

// click call 3

var handleClick3Executed = false;
var handleClick3ExecutedCaller = false;

function handleClick3(button) {
  if (!handleClick3Executed) {
    function hC() {
      button.innerHTML = player1SongHint;
      crossSymbolCheck();
      gameover();
    }
    handleClick3Executed = true;
  } else {
    console.log('already handled')
  }
  if (!handleClick3ExecutedCaller) {
    button.addEventListener('click', hC());
    handleClick3ExecutedCaller = true;
  }
}

// click call 4

var handleClick4Executed = false;
var handleClick4ExecutedCaller = false;

function handleClick4(button) {
  if (!handleClick4Executed) {
    function hC() {
      button.innerHTML = player1MovieHint;
      crossSymbolCheck();
      gameover();
    }
    handleClick4Executed = true;
  } else {
    console.log('already handled')
  }
  if (!handleClick4ExecutedCaller) {
    button.addEventListener('click', hC());
    handleClick4ExecutedCaller = true;
  }
}


// Win the game
function wingame() {
  if (document.getElementById('heroValidation').classList.contains('is-valid') && document.getElementById('heroineValidation').classList.contains('is-valid') && document.getElementById('songValidation').classList.contains('is-valid') && document.getElementById('movieValidation').classList.contains('is-valid')) {
    document.querySelector('.title').innerHTML = "YOU WIN THE GAME";
    const deleteData = document.querySelector('.delete-req');
    deleteData.setAttribute("type", "submit")
  }
}
