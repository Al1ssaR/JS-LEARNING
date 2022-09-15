let startBtn = document.querySelector('.start')
let screens = document.querySelectorAll('.screen')
let listBtns = document.querySelector('.time-list')
let timeEl = document.querySelector('#time')
let time = 0
let score = 0
let board = document.querySelector('#board')
function setTime(value){
    timeEl.innerHTML = `00:${value}`
}
function decreaseTime(){
    if (time === 0){
        finishGame()
    }
    let current = --time
    if (current < 10){
        timeEl.innerHTML = `00:0${current}`
    }
    else setTime(current)
}
function randomNumb(min,max){
   return Math.round(Math.random()* (max - min) + min)
}
function getRandomColor(){
    let COLORS = ['#D22730','#44D62C','#DB3EB1','#4D4DFF','#FFAD00','#C724B1','#faed27']
    let index =  Math.floor(Math.random()*COLORS.length)
    return COLORS[index]
 }
function createRandomCircle(){
    let circle = document.createElement('div')
    const {width,height} = board.getBoundingClientRect()
    let size = randomNumb(10,50)
    let x = randomNumb(0+size,width-size)
    let y = randomNumb(0+size,height-size)
    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    color = getRandomColor()
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    board.append(circle)
}
function startGame(){
    setTime(time)
    createRandomCircle()
    setInterval(decreaseTime,1000)
}
function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span>`
}

startBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    screens[0].classList.add('up')

})
listBtns.addEventListener('click',(e)=>{
    if (e.target.classList.contains('time-btn')){
       time = parseInt(e.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})
board.addEventListener('click',(e)=>{
    if(e.target.classList.contains('circle')){
        score++
        e.target.remove()
        createRandomCircle()
    }
})