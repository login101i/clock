const hand_hr = document.querySelector('.hand.hour')
const hand_min = document.querySelector('.hand.minute')
const hand_sec = document.querySelector('.hand.second')
const data = document.querySelector('.data')

function tick() {
    const d = new Date();
    // console.log(new Date)
    // sekundy
    let seconds = d.getSeconds()
    // console.log(seconds)
    const secDeg = ((seconds / 60) * 360)
    // console.log(secDeg)
    hand_sec.style.transform = `translateY(-50%) rotate(${secDeg}deg)`

    let minutes = d.getMinutes()
    const minDeg = ((minutes / 60) * 360) + 90
    hand_min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`

    let hours = d.getHours()
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hand_hr.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`


}


tick();
setInterval(tick, 1000)

// __________________________________
var days = [
    "    Niedziela    ",
    "Poniedziałek            ",
    "    Wtorek         ",
    "Środa             ",
    "    Czwartek       ",
    "Piątek      ",
    "    Sobota      ",
    
]
var months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia"
]
let dd = new Date()
var dayName = days[dd.getDay()]
var monthName = months[dd.getMonth()]

let day = dd.getDate()
let month = dd.getMonth()
let year = dd.getFullYear()
data.innerHTML = `${dayName}<br> ${day} ${monthName} ${year}`