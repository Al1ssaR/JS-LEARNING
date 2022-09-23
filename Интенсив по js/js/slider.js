let slider = document.querySelectorAll('.swiper-slide')
let BtnPrev = document.querySelector('.swiper-button-prev')
let BtnNext = document.querySelector('.swiper-button-next')
let BtnNextImg = BtnNext.querySelector('.arrow_carrot-left')
console.log(slider,BtnNext,BtnPrev)
BtnNextImg.style.transform = 'rotate(135deg)'

let activeSlideIndex = 0
function changeSlide(direction){
    for (let i = 0; i< slider.length; i++){
        slider[i].style.display = 'none'
    }
    if (direction === 'next'){
        activeSlideIndex++;
        if (activeSlideIndex === slider.length){
            activeSlideIndex = 0
        }
        slider[activeSlideIndex].style.display = 'block'
    } else if (direction === 'prev'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slider.length - 1
        }
        slider[activeSlideIndex].style.display = 'block'
    }
}
BtnNext.addEventListener('click',()=>{
    changeSlide('next')
    console.log(activeSlideIndex)
})
BtnPrev.addEventListener('click',()=>{
    changeSlide('prev')
    console.log(activeSlideIndex)
})
setTimeout(function run() {
    changeSlide('next')
    setTimeout(run, 3000)
  }, 3000);
