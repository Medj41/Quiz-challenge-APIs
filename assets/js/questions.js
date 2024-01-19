let startButton = document.querySelector("#start");
let questions = document.querySelector("#questions");
let questionsTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let startScreen = document.querySelector("#start-screen");
let buttonOption = "";

let Questions = [
  {
    question: "Pick a number",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "1",
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
    correctAnswer: "'Real'",
  },
];

let questionIndex = 0;
let score = 0;
// questionIndex ++;

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questions.removeAttribute("class");
  getQuestion();
  setTime();
}

// for (let i = 0; i < Questions.length; i++) {
//   let question = Questions[i];
//   console.log(question);

var timer = document.getElementById('time');

let secondsLeft = 20;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      secondsLeft === 0;
      clearInterval(timerInterval);
      // Calls function to create and append image
    }

  }, 1000);
}

function getQuestion() {
  let currentQuestion = Questions[questionIndex];
  questionsTitle.textContent = currentQuestion.question;
  choices.innerHTML = "";


  for (let i = 0; i < currentQuestion.choices.length; i++) {
    let choice = document.createElement("button");
    choice.textContent = currentQuestion.choices[i];
    choices.appendChild(choice);
  



    choice.addEventListener("click", function () {
      console.log(choice.textContent);
      console.log(currentQuestion.correctAnswer);
       

      if (choice.textContent === currentQuestion.correctAnswer) {
        let result = document.createElement('p');
        choices.appendChild(result);
        result.innerHTML = "Correct";
        questionIndex = questionIndex + 1;
        getQuestion();
      } else {
        let result = document.createElement('p');
        choices.appendChild(result);
        result.innerHTML = "Wrong";        
        questionIndex = questionIndex + 1;
        secondsLeft -= 5;
        getQuestion();

      }
      console.log(i);

      if (i == currentQuestion.choices.length - 1) {
        console.log('end of test');
        
      }
    });
   
  }
}


startButton.addEventListener("click", startQuiz);






