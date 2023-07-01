const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
let seconds = 0
let minutes = 0

function timer() {
    setInterval(() => {
        if (seconds < 60) {
            seconds++
        }
        if (seconds === 60) {
            seconds = 0;
            minutes = minutes + 1;
        }
        if(seconds >=10) {
            sec.textContent = seconds
        }else {
            sec.textContent = "0" + seconds
        }
        if(minutes>= 10) {
            min.textContent = minutes
        } else {
            min.textContent = '0' + minutes
        }
    }, 1000)
}

document.querySelector('button').addEventListener('click', () => {
    timer();
})