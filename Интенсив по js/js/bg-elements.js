const BgElements = ()=>{
    let elements = document.querySelectorAll('.set-bg')
    console.log(elements)
    for (let i = 0; i<elements.length;i++){
        let src = elements[i].dataset.setbg
        elements[i].style.backgroundImage = `url(${src})`
        console.log(src)
    }
}
BgElements()