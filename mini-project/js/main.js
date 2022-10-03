function RandomWish(){
    
    let textCheck = ''
    let index = 0
    function MainAct(){
        function textPrinting(text){
            dialogBtn.disabled = true;
            let line = 0;
            let count = 0;
            let result = '';
            function typeLine() {
              let interval = setTimeout(
                () => {
                  result += text[line][count]
                  dialogMes.textContent = `${result}|`;
          
          
                count++;
                if (count >= text[line].length) {
                  count = 0;
                  line++;
                  if (line == text.length) {
                    clearTimeout(interval);
                    dialogMes.textContent =result;
                    dialogBtn.disabled = false;
                    return true;
                  }
                }
                typeLine();
              }, 50)
            }
            typeLine();
        }
        function getRandomColor(){
            let COLORS = ['#D22730','#44D62C','#DB3EB1','#4D4DFF','#FFAD00','#C724B1','#faed27']
            let index =  Math.floor(Math.random()*COLORS.length)
            return COLORS[index]
         }
         function getRandomMes(){
            let messages = ['Слушай, даже если тяжело идти дальше, продолжай путь к мечте.',
            'Трудный день? Ничего страшного, неважно сколько раз ты упал, главное что ты снова на ногах.',
            'Не забывай, успех - это идти от неудачи к неудаче, не теряя энтузиазма.',
            'Знаешь, а реальная возможность добиться успеха кроется в самом человеке, а не в работе.',
            'Оглянись назад, неужели после всего что было, ты еще хочешь сдаться?',
            'Помни одну вещь: ничего не меняя, ничего не изменится.',
            'Все жизнь - это выбор, лишь ты выбираешь кем ты станешь.',
            'Когда одна дверь закрывается, открывается другая, но мы часто так долго и с таким сожалением смотрим на закрытую дверь, что не видим ту, которая для нас открылась.',
            'Все, что ты когда-либо хотели, находится по другую сторону страха.',
            'Неважно, как медленно вы идете, пока вы не останавливаетесь.',
            'Слишком многие не живут своими мечтами, потому что живут своими страхами.',
            'В конце пути, неважно, сколько дней было в вашей жизни. Важно, сколько жизни было в ваших днях.']
            index++;
            if (index >= messages.length){
                index = 0
            }
    
            return messages[index]
         }
        const WishWrap = document.querySelector('.wish-wrap')
        const dialog = WishWrap.querySelector('.dialog')
        const dialogMes = dialog.querySelector('.dialog__mes')
        const dialogBtn = WishWrap.querySelector('.dialog-wrap__btn')
        const WishGirl = WishWrap.querySelector('.wish-wrap__girl')
        console.log(dialogBtn)
        let CurrColor = getRandomColor()
        dialogBtn.style.boxShadow = `0 0 40px 40px ${CurrColor} inset, 0 0 0 0 ${CurrColor}`
        dialogBtn.onmouseover = function() {
            dialogBtn.style.boxShadow = ` 0 0 10px 0 ${CurrColor} inset,  0 0 10px 4px ${CurrColor}`
            dialogBtn.style.color = `${CurrColor}`;
        };    
        dialogBtn.onmouseleave = function() {
            dialogBtn.style.boxShadow = `0 0 40px 40px ${CurrColor} inset, 0 0 0 0 ${CurrColor}`
            dialogBtn.style.color = `white`
        };
        WishGirl.src = `./img/girl (${Math.floor(Math.random()*4+1)}).png`
        WishWrap.style.boxShadow = `0 0 20px ${CurrColor}, 0 0 10px ${CurrColor}`
        dialog.style.border = `solid ${CurrColor} 2px`
        dialog.style.boxShadow = `0 0 20px ${CurrColor}, 0 0 10px ${CurrColor}`
        dialogMes.innerHTML =''
        do{
            text = getRandomMes()
        }while(text === textCheck)
        textCheck = text
        textPrinting(text)
        dialogBtn.addEventListener('click',MainAct)
        dialogBtn.style.color = `white`
    }
    MainAct()

}
RandomWish()