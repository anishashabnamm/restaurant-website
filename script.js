(function (){
    const menu_button_open = document.querySelector('.open-mobile-menu');
    const menu_button_close = document.querySelector('.close-mobile-menu');
    const menu = document.querySelector('.nav-menu-wrapper');
    menu_button_open.addEventListener('click', function(){
      menu.classList.add('mobile-menu');
    });
    menu_button_close.addEventListener('click', function(){
      menu.classList.remove('mobile-menu');
    });
  })();