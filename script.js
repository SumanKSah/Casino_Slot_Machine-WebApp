
let slot1 = document.getElementById("slot1")
let slot4 = document.getElementById("slot2")
let slot3 = document.getElementById("slot3")

let speedInput = document.getElementById("speedInput")

let values = ['😎','😂','🥴','😢','🤑','🙄','😅','🤩','😭']

function changeValue() {
    return values[Math.floor(Math.random() * 9)]
}


setInterval( function () {
   
slot1.innerText = changeValue()
slot2.innerText = changeValue()
slot3.innerText = changeValue()

},500)

speedInput.onchange = function (event) {
    document.documentElement.style.setProperty("--speed",event.target.value)
}