const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.getElementById('#1')

// const img = document.querySelectorAll('.carousel #imgs img')

console.log(img)

let idx = 0
let interval  = setInterval(run, 2000)


function run() {
  idx++
  changeImage()
}

function changeImage() {
  
}