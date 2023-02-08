function MenuShow() {
    let MenuMobile = document.querySelector('.mobile-menu');
    if (MenuMobile.classList.contains('open')){
        MenuMobile.classList.remove('open')
        MenuMobile.classList.remove(text)
    }else{
        MenuMobile.classList.add('open')
    }
}

function HideText() {
    let MenuMobile = document.querySelector('.mobile-menu');
    let text = document.querySelector('.texto')
    if (MenuMobile.classList.contains('open')){
        MenuMobile.classList.remove(text)
    }

}