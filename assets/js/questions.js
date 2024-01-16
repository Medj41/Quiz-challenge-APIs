


let startButton = document.querySelector('#start');
let questionsHeader = document.querySelector('#questions');
let questionsTitle = document.querySelector('#question-title')
let choices = document.querySelector('#choices')
let startScreen = document.querySelector('#start-screen')
let buttonOption = '';

let questions = [
  {
    question: 'Pick a number 2',
    choices: ['1', '2', '3','4'],
    answer: 2
  },
  {
    question: 'Pick a letter',
    choices: ['A', 'B', 'C', 'D'],
    Answer: "'c"
  },
  {
    question: 'pick a symbol',
    choices: ['£', '$', '%', '&'],
    correctAnswer: "£"
  },
  {
    question: 'pick a team',
    choices: ['Real', 'Barca', 'juve', 'Milan'],
    correctAnswer: "'Real'"
  }
]

// let questionOne = 'Pick a number';
// let optionsOne = [1, 2, 3, 4];


// let questionTwo = 'Pick a letter';
// let optionsTwo = ['A', 'B', 'C', 'D'];

// let questionThree = 'pick a symbol';
// let optionsThree = ['£', '$', '%', '&'];


// let questionsFour = 'pick a team'
// let optionsFour = ['Real', 'Barca', 'juve', 'Milan'];



// var listEl = document.createElement("ol");

// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");


// var button1 = document.createElement("button");
// var button2 = document.createElement("button");
// var button3 = document.createElement("button");
// var button4 = document.createElement("button");

// console.log(listEl)
// choices.append(listEl);
// listEl.append(li1,li2,li3,li4);
// listEl.append(button1,button2,button3,button4)


// li1.innerHTML = optionsOne[0],
// li2.innerHTML = 'option 2',
// li3.innerHTML = 'option 3',
// li4.innerHTML = 'option 4',


startButton.addEventListener("click", function (event) {
  startScreen.setAttribute("style", "display: none;");
  questionsHeader.setAttribute("style", "display: contents;");
  creatingLi();



  event.stopPropagation();

});


var optionChosen = document.querySelector('#choices')


optionChosen.addEventListener('click', function (event) {
  let buttonClicked = event.target.innerHTML
  console.log(event.target.innerHTML);
  let scoreForEach = document.createElement('p');
  choices.appendChild(scoreForEach);
  if (buttonClicked == 2) {
    scoreForEach.innerHTML = 'Correct!'
    console.log('correct');
  } else {
    return scoreForEach.innerHTML = 'Wrong!'
  }
  console.log(event);

})

let displayedQuestion = '';
  let displayedchoices = '';
  let displayAnswers = '';
  let i = 1;
function creatingLi() {
  
for (let i in questions) {
  
  displayedQuestion = questions[i]['question'];
  questionsTitle.innerHTML = displayedQuestion;
  }

  console.log(questions[i]['question']);


// for (let i = 0; i < questions.length; i++) {
//   displayedQuestion = questions[i].question
//   displayedchoices = questions[i].choices
//   console.log(displayedQuestion)
//   var button = document.createElement('button');
//   var ol = document.createElement('ol');
//   var button = document.createElement('button');
//   button.setAttribute('id', 'optionss')
//   ol.appendChild(button);  
//   questionsTitle.innerHTML = displayedQuestion;

// //question are bein obtained , next thing to do is to make sure that are being sent to the proper in the HTML 

//   button.innerHTML = displayedchoices
//   console.log(button);
}
 

//   for (let i = 0; i < questions.length; i++){
//  let displayedchoices = questions.choices
//     var ol = document.createElement('ol');
//   var button = document.createElement('button');
//   button.setAttribute('id', 'optionss')
//   ol.appendChild(button);
//   displayedchoices = questions.choices;
//   button.innerHTML = displayedchoices
//   console.log(button.innerHTML);
//   document.getElementById('choices').appendChild(ol);
//   }

// }

creatingLi()

  // questionsTitle.innerHTML += displayedQuestion;






  
        
    

  
   

// let displayedchoices = questions[i].choices 

// for (var questions. of questions) {
//   var ol = document.createElement('ol');
// var button = document.createElement('button');
// button.setAttribute('id', 'optionss')
// ol.appendChild(button);
// displayedchoices = questions.choices[i];
// button.innerHTML = displayedchoices
// console.log(button.innerHTML);






