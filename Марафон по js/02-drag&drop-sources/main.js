let item = document.querySelector('.item')
let placeholders = document.querySelectorAll('.placeholder')
console.log(item)
item.addEventListener('dragstart',(e)=>{
    console.log('dragstart',e.target)
    e.target.classList.add('hold')
    setTimeout(()=> e.target.classList.add('hide'),0)
})
item.addEventListener('dragend',(e)=>{
    console.log('dragend')
    e.target.classList.remove('hold','hide')
})

for (let placeholder of placeholders){
    placeholder.addEventListener('dragover',(e)=>{
        e.preventDefault()
    })
    placeholder.addEventListener('dragenter',(e)=>{
        console.log('dragenter')
        e.target.classList.add('hovered')
    })
    placeholder.addEventListener('dragleave',(e)=>{
        e.target.classList.remove('hovered')
    })
    placeholder.addEventListener('drop',(e)=>{
        e.target.classList.remove('hovered')
        e.target.append(item)
    })
}
