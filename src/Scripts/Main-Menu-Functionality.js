//
//Main Menu Functionality
//

import { TimelineLite, TweenLite, Power0 } from 'gsap/all';


(function(){

    //Variables -- -- -- -- -- -- -- --
        //Desktop
            const MenuIcon = document.getElementById('Menu-Bar-Icon-Inner');
            const MenuIconLine1 = document.getElementById('Menu-Bar-Icon-Line1');
            const MenuIconLine2 = document.getElementById('Menu-Bar-Icon-Line2');
            const MenuIconMenu = document.getElementById('Menu-Bar-Icon-Text-Menu');
            const MenuIconClose = document.getElementById('Menu-Bar-Icon-Text-Close');

    //Variables -- -- -- -- -- -- -- --


    //State -- -- -- -- -- -- -- --
        //Main Menu
            let MainMenuOpen = false;

        //Main Menu Icon
            let MainMenuIconActive = false;

        //Main Menu





    //Tweens -- -- -- -- -- -- -- --

        //Menu Icon Hover
            TweenLite.to(MenuIcon, .3, {opacity: 0, 'z-index': 1, ease: Power0.ease});
            TweenLite.to(MenuIconMenu, .3, {opacity: 0, 'z-index': 1, ease: Power0.ease});


    
    console.log('Test From Main Menu Func');
    

}());