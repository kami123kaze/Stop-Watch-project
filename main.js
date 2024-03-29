const startBtn = document.getElementById('Start');
const stopBtn = document.getElementById('Stop');
const resetBtn = document.getElementById('Reset');
const hourText = document.getElementById("HourDigit");
const minuteText = document.getElementById("MinuteDigit");
const secondText = document.getElementById("SecondDigit");



let paused = true;
let elapsedTime = 0;
let currentTime =0;
let startTime =0;
let intervalId;
let hours =0;
let minutes =0;
let seconds =0;

startBtn.addEventListener("click",() =>{
  if(paused){
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime,1000);

    
  }
})
stopBtn.addEventListener("click",() =>{
  if(!paused){
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
})
resetBtn.addEventListener("click",() =>{

  paused = true;

  startTime   = 0;
  elapsedTime = 0;
  currentTime = 0;

  hours   = 0;
  seconds = 0;
  minutes = 0;

  hourText.textContent   = "00";
  minuteText.textContent = "00";
  secondText.textContent = "00";

  clearInterval(intervalId)
})

function updateTime(){
  elapsedTime = Date.now() - startTime;

  seconds = Math.floor((elapsedTime/1000) %60);
  minutes = Math.floor((elapsedTime/(1000 *60)) %60);
  hours = Math.floor((elapsedTime/(1000 *60*60)) %60);

  seconds = pad(seconds);;
  minutes    = pad(minutes);
  hours   = pad(hours);
  

  hourText.textContent   = `${hours}`;
  minuteText.textContent = `${minutes}`;
  secondText.textContent = `${seconds}`;

  function pad(unit){
    return (("0") + unit).length > 2 ? unit: "0" + unit;
  }
}