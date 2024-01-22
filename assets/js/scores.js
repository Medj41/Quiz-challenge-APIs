let cleareScores = document.getElementById('clear');


let score = '';
let initials = '';


function highscoresTime(){
let endResult = document.querySelector('#highscores');
console.log(endResult);
let liEl = document.createElement('li');
console.log(liEl);
let score = JSON.parse(localStorage.getItem('score'));
let initials = localStorage.getItem('initials');
let player= [];

if (score && initials ){
  player = (`${localStorage.getItem('initials')}-${JSON.parse(localStorage.getItem('score'))}`);
  liEl.innerHTML =  player 
endResult.appendChild(liEl)
};



}

highscoresTime();



cleareScores.addEventListener('click', function removeScore(){
 
  let liEl = document.querySelector('li');
  liEl.remove();
  localStorage.removeItem('score');
  localStorage.removeItem('initials');
   score = '';
   initials = '';
   liEl.innerHTML= '';
})


