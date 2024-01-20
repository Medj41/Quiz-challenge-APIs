let cleareScores = document.getElementById('clear');


let score = '';
let initials = '';


function highscoresTime(){
let endResult = document.querySelector('#highscores');
console.log(endResult);
let liEl = document.createElement('li');
console.log(liEl);
let score = '';
let initials = '';
let player= [];
player = (`${localStorage.getItem('initials')}-${JSON.parse(localStorage.getItem('score'))}`)
liEl.innerHTML =  player 
endResult.appendChild(liEl)




// for (let i = 0; i < liEl.length; i++) {
//   let liEl = document.createElement('li');
//   let player = liEl[i];
//   liEl.innerHTML =  player 
//   liEl.push(player)
//   liEl++
//   endResult.appendChild(liEl)
// }



}

highscoresTime();



cleareScores.addEventListener('click', function removeScore(){
 
  let liEl = document.querySelector('li');
  liEl.remove();

  // keep or remove ??
  localStorage.removeItem('score');
  localStorage.removeItem('initials');
   score = '';
   initials = '';
   liEl.innerHTML= '';
})


