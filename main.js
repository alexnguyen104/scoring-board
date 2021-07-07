const plus_1 = document.getElementById("plus_player1").addEventListener('click',plus_click1)
const plus_2 = document.getElementById("plus_player2").addEventListener('click',plus_click2)
const minus_1 = document.getElementById("minus_player1").addEventListener('click',minus_click1)
const minus_2 = document.getElementById("minus_player2").addEventListener('click',minus_click2)
const reset = document.getElementById("reset")
const score1 = document.getElementById("player1")
const score2 = document.getElementById("player2")

reset.onclick = function(){
  score1.innerHTML = 0 
  score2.innerHTML = 0 
}

function plus_click1(){
  score1.innerHTML ++
}
function plus_click2(){
  score2.innerHTML ++
}
function minus_click1(){
  score1.innerHTML --
  if(score1.innerHTML <=0){
    score1.innerHTML = 0
  }
}
function minus_click2(){
  score2.innerHTML --
  if (score2.innerHTML<=0){
    score2.innerHTML = 0
  }
}

