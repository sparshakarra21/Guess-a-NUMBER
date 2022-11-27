let n=document.getElementById("guess")
let message=document.getElementById("msg")
let input=document.getElementById("val")
let m=document.getElementById("b")
let box=document.getElementById("box")
let highScore=document.getElementById("highval")
let btn=document.getElementById("check")
let luckyNumber=Math.floor(Math.random()*20)
let points=10
input.innerText=points
function checking()
{
   if(n.value==luckyNumber)
   {
      message.textContent="Congrats , you guessed it right 🥳"
      highval.textContent=points
      m.style.backgroundColor='green';
      box.textContent='🤩'
   }
   else if(n.value<1 || n.value>20)
   message.textContent="Please enter a number between 0 and 20"
   else
   {
      m.style.backgroundColor='red';
      box.textContent='😑'
    if(n.value<luckyNumber)
    {
      message.textContent="Your number is too small !!"
      n.value=''

    }
    else 
   {
      message.textContent="Your number is too big"
      n.value=''
   }
    points--;
    val.textContent=points
   }
   if(points<=0)
   {
      message.textContent="Bad luck ,You are out of the game 😓"
      val.textContent=0
   }
}
function startAgain(){
   m.style.backgroundColor='rgb(38, 139, 157)';
   box.textContent="?"
   luckyNumber=Math.floor(Math.random()*20)
   points=10
   val.innerText=points
   message.textContent="Start guessing...."
    n.value='';
}