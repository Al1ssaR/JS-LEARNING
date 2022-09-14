let board = document.querySelector('#board')
const SQUARE_COUNT = 272
const SQUARE_COLORS = ['#D22730','#44D62C','#DB3EB1','#4D4DFF','#FFAD00','#C724B1','#faed27']
function setColor(e){
    let color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}
function removeColor(e){
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}
function getRandomColor(){
   let index =  Math.floor(Math.random()*SQUARE_COLORS.length)
   return SQUARE_COLORS[index]
}
for (let i = 0;i< SQUARE_COUNT;i++){
    let square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave',()=> removeColor(square))

}
