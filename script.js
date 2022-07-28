let root = document.documentElement;

let cursor = document.getElementById('cursor');
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});


//clicker
let num = 0;//set score to 0
const newScore = localStorage.getItem('score');//get previous score
if(parseInt(newScore)>1){
	num += parseInt(newScore);
}//add previous score
document.getElementById("score").innerHTML = num;//write the score in the div
document.body.onkeyup = function(e){
if(e. keyCode == 32){
	addScore();}}//score increases when space is pressed

var saveScore = function(){
	localStorage.setItem('score', num);
}//save score for next time

var addScore = function(){
	num += 1;//increase score
	document.getElementById("score").innerHTML = num;
	saveScore();
}

