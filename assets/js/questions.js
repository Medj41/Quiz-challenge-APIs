let startButton = document.querySelector('#start');
let questions = document.querySelector('#questions');
let questionsTitle = document.querySelector('#question-title')
let choices = document.querySelector('#choices')
let startScreen = document.querySelector('#start-screen')
let buttonOption = '';


let questionOne = "Which function is used to print output in JavaScript?";
let optionsOne = ["console.log()", "print()", "output()", "log()"];

let questionTwo = 'Pick a letter';
let optionsTwo = ['A','B','C','D'];

let questionThree = 'pick a symbol';
let optionsThree = ['£','$','%','&'];

let questionsFour = 'pick a team'
let optionsFour = ['Real','Barca','juve','Milan'];




startButton.addEventListener("click", function (event) {
  startScreen.setAttribute("style", "display: none;");
  questions.setAttribute("style", "display: contents;");

  creatingLi(questionOne, optionsOne );

  event.stopPropagation();

});




function creatingLi( question , options) {
  questionsTitle.innerHTML = question ;
  var ol = document.createElement('ol');
  for (i = 0; i < options.length; i++) {
    var button = document.createElement('button');
    var li = document.createElement('li');
    li.innerHTML = options[i];
    ol.appendChild(button);
    button.appendChild(li);
    button.innerHTML = li.innerHTML;
    console.log(li);
  }
  document.getElementById('choices').appendChild(ol);
}

let scoreForEach = document.createElement('p');
  choices.appendChild(scoreForEach);
var optionChosen = document.querySelector('#choices')
optionChosen.addEventListener('click', function (event) {
  let buttonClicked = event.target.innerHTML
  console.log(event.target.innerHTML);
  
  choices.appendChild(scoreForEach);
  if (buttonClicked == "console.log()") {
    scoreForEach.innerHTML = 'Correct!'
    console.log('correct');    
  } else {    
    scoreForEach.innerHTML = 'wrong'
    return;}
});