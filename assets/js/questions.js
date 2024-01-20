let startButton = document.querySelector("#start");
let questions = document.querySelector("#questions");
let questionsTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startScreen = document.querySelector("#start-screen");
let ednOfQuiz = document.querySelector('#end-screen');
let yourScore = document.getElementById('final-score');
let submitButton = document.getElementById('submit');
// let inputElement = document.getElementById('initials');
// let initials = inputElement.value;
// console.log(initials);

let buttonOption = "";


let Questions = [
  {
    question: "Pick a number",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3",
  },
  {
    question: "Pick a letter",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "D",
  },
  {
    question: "pick a symbol",
    choices: ["£", "$", "%", "&"],
    correctAnswer: "£",
  },
  {
    question: "pick a team",
    choices: ["Real", "Barca", "juve", "Milan"],
    correctAnswer: "Real",
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correctAnswer: "",
  }



];

let questionIndex = 0;
let score = 0;



// start the quiz 
function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questions.removeAttribute("class");
  getQuestion();
  setTime();
}


// set timer for the quiz and the score
var timer = document.getElementById('time');
let secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      secondsLeft === 0;
      clearInterval(timerInterval);
    }
    // issue with dispplaying all questions
    if (questionIndex === 3) {
      clearInterval(timerInterval);
      yourScore.innerHTML = secondsLeft;
    }
  }, 1000);
}

// loop thrpugh the questions until the end questions 
function getQuestion() {
  let currentQuestion = Questions[questionIndex];
  questionsTitle.textContent = currentQuestion.question;
  choices.innerHTML = "";


  for (let i = 0; i < currentQuestion.choices.length; i++) {
    // creating button element 
    let choice = document.createElement("button");
    choice.textContent = currentQuestion.choices[i];
    choices.appendChild(choice);
    choice.addEventListener("click", function () {

      



      function rightSound() {
        let right = new Audio('assets/sfx/correct.wav');
        right.play();
      }

      function wrongSound() {
        let wrong = new Audio('assets/sfx/incorrect.wav');
        wrong.play();
      }


      if (choice.textContent === currentQuestion.correctAnswer) {
        // creating P elemenet for the score 
        let result = document.createElement('p');
        choices.appendChild(result);
        result.innerHTML = "Correct";
        rightSound();
        // alert('correct')
        questionIndex++;

        getQuestion();
      } else {
        let result = document.createElement('p');
        choices.appendChild(result);
        result.innerHTML = "Wrong";
        wrongSound()
        // alert('wrong')
        questionIndex++;
        secondsLeft -= 5;
        getQuestion();
      }



// issue with dispplaying all questions
      if (questionIndex === 4) { 
        endQuiz();
        setTime();
      }
    });

  }

}

startButton.addEventListener("click", startQuiz);


// end the quiz and display the questions.
function endQuiz() {
  questions.setAttribute("class", "hide");
  choices.setAttribute("class", "hide");
  ednOfQuiz.removeAttribute("class");
  yourScore.innerHTML = secondsLeft;

}


const scoreInitials = []

function saveScoreInitials() {

  // why this one did work but not when created at the top
  let inputElement = document.getElementById('initials');
  let initials = inputElement.value;
  score = yourScore.innerHTML
  localStorage.setItem('score', JSON.stringify(score));

  localStorage.setItem('initials', initials);
  let finalPage = window.location.href = 'highscores.html';
  scoreInitials.puinitials;
  console.log(JSON.parse(localStorage.getItem('score')));
  console.log(localStorage.getItem('initials'));


  // let endResult = document.querySelector('#highscores');
  // console.log(endResult);
  // let liEl = document.createElement('li');
  // console.log(liEl);

  // liEl.innerHTML = 'Hello'
  // endResult.appendChild(liEl);

  // console.log((`${localStorage.getItem('initials')}-${JSON.parse(localStorage.getItem('score'))}`));

}



submitButton.addEventListener("click", saveScoreInitials);










