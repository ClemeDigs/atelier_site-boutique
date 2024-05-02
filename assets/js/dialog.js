/*const modale = document.querySelector('.modale');
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
*/


const btnsDialogTrigger = document.querySelectorAll('button[data-dialog]');
const dialogs = document.querySelectorAll('.dialog');


function closingDialog(e) {
    const dialog = e.target;
    dialog.classList.add('hidden'); 
    dialog.removeAttribute('closing');
    dialog.removeAttribute('open', '');
    dialog.removeEventListener('animationend', closingDialog);
}

function closeDialog(dialog) {
    dialog.setAttribute('closing', '');
    dialog.classList.remove('hidden'); 
    dialog.addEventListener('animationend', closingDialog);
}


btnsDialogTrigger.forEach((btn) => {
    btn.addEventListener('click', () => {
        const dialogSelector = btn.getAttribute('data-dialog');
        const dialog = document.querySelector(dialogSelector);

        if(dialog){
            if(dialog.checkVisibility()){
                closeDialog(dialog);
            } else {
                dialog.setAttribute('open', '');
            }
        }

    });
});


dialogs.forEach(dialog => {
    dialog.addEventListener('click', () => {
        closeDialog(dialog);
    });

    const childrens = dialog.querySelectorAll('& > *');

    childrens.forEach(children => {
        children.addEventListener('click', e => {
            e.stopImmediatePropagation();
        });
    });

});