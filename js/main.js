(function (){
    const burgerItem = document.querySelector('.header_burger');
    const headerNav = document.querySelector('.header_nav');
    const closeItem = document.querySelector('.header_close');
    const headerBuy = document.querySelector('.header_buys')
    const headerLang = document.querySelector('.header_lang')
    const modalWindow = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const openModalButton = document.querySelector('.header_login');
    const closeModalButton = document.querySelector('.close_button');

    // Burger start
    burgerItem.addEventListener('click', () => {
        headerNav.classList.add('header_nav_active');
        headerBuy.classList.add('header_buys_active');
        headerLang.classList.add('header_lang_active');
    })
    closeItem.addEventListener('click', ()=>{
        headerNav.classList.remove('header_nav_active')
        headerBuy.classList.remove('header_buys_active');
        headerLang.classList.remove('header_lang_active');
    })
    // Burger end

    // Modal start
    openModalButton.addEventListener('click', () =>{
        modalWindow.classList.add('active');
        overlay.classList.add('active');
    })
    closeModalButton.addEventListener('click', () =>{
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
    })
    overlay.addEventListener('click', () =>{
        modalWindow.classList.remove('active');
        overlay.classList.remove('active');
    })
    // Modal end
}());

$('.slides').slick({
    fade:true,
    prevArrow:'.prev_arrow-container',
    nextArrow:'.next_arrow-container'
})

$('.header_share').hover(
    function(){
        $('.header_share-sm').addClass('header_share_sm-active');
    }, function(){
        $('.header_share-sm').removeClass('header_share_sm-active');
    }
);


