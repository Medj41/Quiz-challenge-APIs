console.log('hello')

let startButton = document.querySelector('#start');
let questions = document.querySelector('#questions');
let questionsTitle = document.querySelector('#question-title')
let choices = document.querySelector('#choices')
let startScreen = document.querySelector('#start-screen')
let buttonOption = '';


let questionOne = 'Pick a number';
let optionsOne = [1, 2, 3, 4];

let questionTwo = 'Pick a letter';
let optionsTwo = ['A','B','C','D'];

let questionThree = 'pick a symbol';
let optionsThree = ['£','$','%','&'];

let questionsFour = 'pick a team'
let optionsFour = ['Real','Barca','juve','Milan'];

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

function pickCorrectAnswer(){


};


console.log(li.value);

