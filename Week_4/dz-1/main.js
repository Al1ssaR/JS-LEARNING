function addListener(evName, target , fn){
    target.addEventListener(evName,fn )
}
function removeListener(evName, target , fn){
    target.removeEventListener(evName,fn )
}
function skipDefault(evName, target){
    target.addEventListener(evName, (e)=>{
        e.preventDefault()
    })
}
function emulateClick(target){
    target.dispatchEvent(new MouseEvent('click'))
}
function once(target,fn){
    let flag = true
    target.addEventListener('click',()=>{
        if (flag){
            fn()
            flag = false
        }
    })
}

const AddRandomDiv = () => {
    function random(from, to){
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }
    function createDiv(){
        let div = document.createElement('div')
        let minSize = 20
        let maxSize = 300
        let maxColor = 0xffffff
        div.classList.add('draggable')
        div.style.background = '#' + random(0,maxColor).toString(16)
        div.style.top = random(0, window.innerHeight) + 'px'
        div.style.left = random(0, window.innerWidth) + 'px'
        div.style.width = random(minSize,maxSize) + 'px'
        div.style.height = random(minSize,maxSize) + 'px'

        div.addEventListener('mousedown', (e) => {
            currentDrag = div
            startX = e.offsetX
            startY = e.offsetY
        })
        div.addEventListener('mouseup', () => (currentDrag = false))

        return div

    }
    const Container = document.querySelector('.container');
    const DivCreator = document.querySelector('.btn')

    let currentDrag
    let startX = 0
    let startY = 0
    document.addEventListener('mousemove', (e)=>{
        if (currentDrag){
            currentDrag.style.top = e.clientY - startY + 'px';
            currentDrag.style.left = e.clientX - startX + 'px';
        }
    })
    DivCreator.addEventListener('click', () =>{
        const div = createDiv()
        Container.appendChild(div)
    })
    
}
AddRandomDiv()