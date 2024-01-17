let startButton = document.querySelector('#start');
let questions = document.querySelector('#questions');
let questionsTitle = document.querySelector('#question-title')
 let choices = document.querySelector('#choices')
let startScreen = document.querySelector('#start-screen')
let buttonOption = '';

let Questions = [
  {
    question: 'Pick a number',
    choises: ['1', '2', '3','4'],
    answer: 2
  },
  {
    question: 'Pick a number',
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

let questionOne = 'Pick a number';
let optionsOne = [1, 2, 3, 4];


let questionTwo = 'Pick a letter';
let optionsTwo = ['A', 'B', 'C', 'D'];

let questionThree = 'pick a symbol';
let optionsThree = ['£', '$', '%', '&'];


let questionsFour = 'pick a team'
let optionsFour = ['Real', 'Barca', 'juve', 'Milan'];


// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }




console.log(Questions[0].question);
// var listEl = document.createElement("ol");

// var li1 = document.createElement("li")
startButton.addEventListener("click", function (event) {
  startScreen.setAttribute("style", "display: none;");
  questions.setAttribute("style", "display: contents;");
  creatingLi(questionOne, optionsOne);



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


function creatingLi() {
  let displayedQuestion = '';
  let displayedchoices = '';
  for (let i = 0; i < Questions.length; i++) {
    displayedQuestion = Questions[i];
    displayedchoices = Questions[i]

    questionsTitle.innerHTML = displayedQuestion.question;



    var ol = document.createElement('ol');
    // for (i = 0; i < choices.length; i++) {
    //   choices = Questions.choices[i]


    var button = document.createElement('button');
    button.setAttribute('id', 'optionss')
    ol.appendChild(button);
    button.innerHTML = displayedchoices.choices
    console.log(button.innerHTML);
  }
  document.getElementById('choices').appendChild(ol);


}






console.log(document.body);