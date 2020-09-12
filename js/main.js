var button = document.querySelector('.m-menu__button');
var mMenu = document.querySelector('.m-menu');
var body = document.querySelector('body');


button.addEventListener('click', function(){
    mMenu.classList.toggle('active');
    if(mMenu.classList.contains('active')) {
        body.classList.toggle('no-scroll')
    }else {
        body.classList.remove('no-scroll');
    };
});