const modale = document.querySelector('.modale');
const btnClose = document.querySelector('.btn-close');
const menuBurger = document.querySelector('.menu');
const header = document.querySelector('header');

console.log(menuBurger)

menuBurger.addEventListener('click', () => {
    modale.classList.remove('hidden');
    header.classList.add('column');
})


btnClose.addEventListener('click', () => {
    modale.classList.add('hidden');
    header.classList.remove('column')
})

