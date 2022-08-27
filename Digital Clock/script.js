const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

const btn = document.getElementById("btn");
const body = document.getElementById("body");
let x = 'Dark';
document.getElementById('x').innerHTML = x;

const h3 = document.getElementById("h3");

btn.addEventListener('click', function onClick(event) {
    const backgroundColor = btn.style.backgroundColor;

    if(backgroundColor === "black") {
        btn.style.backgroundColor = "white"; 
        btn.style.color = "black";
        body.style.backgroundColor = "black";
        x = 'Light';
        document.getElementById('x').innerHTML = x;
        h3.style.backgroundColor = "white";
        h3.style.color = "black";
    }
    else {
        btn.style.backgroundColor = "black"; 
        btn.style.color = "white"; 
        body.style.backgroundColor = "white";
        x = 'Dark';
        document.getElementById('x').innerHTML = x;
        h3.style.backgroundColor = "black";
        h3.style.color = "white";
    }

});

function udpateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        udpateClock();
    },1000);
}

udpateClock();
