let pic = document.querySelector(`.rasm`);
let ochish = document.querySelector(`.tugmacha`);
let yopish = document.querySelector(`.yopish`);
let quti2 = document.querySelector(`.quti2`);



pic.addEventListener(`click`, function(){
    quti2.classList.add(`qutichiqsin`);
    quti.classList.add(`qutiyoplsin`);
})


ochish.addEventListener(`click`, function(){
    quti2.classList.add(`qutichiqsin`);
    quti.classList.add(`qutiyoplsin`);
})


yopish.addEventListener(`click`, function(){
    quti2.classList.remove(`qutichiqsin`);
    quti.classList.remove(`qutiyoplsin`);
})
