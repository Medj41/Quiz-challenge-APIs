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
    question: " What does the DOM stand for in JavaScript?",
    choices: ["Document Object Model", "Data Object Model", "Dynamic Object Method", "Document Oriented Module"],
    correctAnswer: "Document Object Model",
  },
  {
    question: "How can you declare a variable in JavaScript?",
    choices: ["var myVar", " variable myVar", " let myVar", "const myVar"],
    correctAnswer: "let myVar",
  },
  {
    question: "What is the purpose of the addEventListener method in JavaScript?",
    choices: ["To create a new HTML element", "To link external stylesheets", "To attach an event handler function to an element", "To execute a function immediately"],
    correctAnswer: "To attach an event handler function to an element",
  },
  {
    question: "How do you comment a single line of code in JavaScript?",
    choices: [" /* comment */", " // comment", " <!-- comment -->", " -- comment --"],
    correctAnswer: " // comment",
  },
  {
    question: "What does the JSON.stringify() function do in JavaScript?",
    choices: [" Parses a JSON string into an object", "  Converts a JavaScript object into a JSON string", " Compares two JSON objects for equality", "Removes all spaces from a JSON string"],
    correctAnswer: "Converts a JavaScript object into a JSON string",
  },

  {
    question: "How can you check the type of a variable in JavaScript?",
    choices: [" ) typeof myVar", "  typeOf(myVar)", "myVar.type()", " getVariableType(myVar)"],
    correctAnswer: "typeof myVar",
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
      clearInterval(timerInterval);
    }
    // issue with dispplaying all questions
    if (questionIndex === 4) {
      
      // yourScore.innerHTML = secondsLeft;
      clearInterval(timerInterval);
    
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










