const containerEl=document.querySelector('.container')
//console.log(containerEl);
const btnEl=document.querySelector('.btn')
//console.log(btnEl);
const popupContEl=document.querySelector('.popup-container')
//console.log(popupContEl);
const closeIconEl=document.querySelector('.closing-icon')
//console.log(closeIconEl);

btnEl.addEventListener('click', ()=>{
    containerEl.classList.add('active')
    popupContEl.classList.remove('active')
})

closeIconEl.addEventListener('click', ()=>{
    containerEl.classList.remove('active')
    popupContEl.classList.add('active')
})


