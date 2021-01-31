const startingTime = 1;
let time = startingTime*60;
// alert(`Welcome to the Quiz, you have ${time} seconds to attempt the Quiz. Best of Luck!`);


const countDownEl = document.getElementById('countDown');
console.log(countDownEl);

const updateCountDown = () => {
  const minutes = Math.floor(time/60);
  let seconds = time%60;
  if(seconds < 10) {
    seconds = '0'+seconds;
  }
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  console.log(countDownEl.innerHTML);
  time--;
  if(time < 0) {
    clearInterval(timerId);
  }
}

var timerId = setInterval(updateCountDown, 1000);