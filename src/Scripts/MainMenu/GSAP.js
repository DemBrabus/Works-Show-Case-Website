//
// GSAP Class
//

import { TimelineLite, Power0 } from 'gsap/all';

//Variables ----- ---- --- -- -
    //Desktop
        //Menu Icon
            const MenuIconLine1 = document.getElementById('Menu-Bar-Icon-Line1');
            const MenuIconLine2 = document.getElementById('Menu-Bar-Icon-Line2');
        //Main Menu
            const MainMenu = document.getElementById('Main-Menu');

    //Mobile
        //Mobile Menu Icon
            const MobileMenuIconLine1 = document.getElementById('Mobile-Menu-Bar-Icon-Line1')
            const MobileMenuIconLine2 = document.getElementById('Mobile-Menu-Bar-Icon-Line2')
        //Mobile Main Menu
            const MobileMenu = document.getElementById('Mobile-Main-Menu');
    

//State ---- --- -- -
    let MainMenuOpen = false;
    let MobileMainMenuOpen = false;

   

    const ToggleMenuTl = new TimelineLite();
            ToggleMenuTl
                .add('wave1')
                    .to(MenuIconLine1, .3, {rotation: 35, top: 15, bottom: 15, ease: Power0.ease}, 'wave1')
                    .to(MenuIconLine2, .3, {rotation: -35, top: 15, bottom: 15, ease: Power0.ease}, 'wave1')
                    .to(MainMenu, .7, {left: 0, ease: Power0.ease}, 'wave1')
                ;
            ToggleMenuTl.pause();


    const ToggleMobileMenuTl = new TimelineLite();
        ToggleMobileMenuTl
            .add('M-wave1')
                .to(MobileMenuIconLine1, .3, {rotation: 35, top: '50%', ease: Power0.ease}, 'M-wave1')
                .to(MobileMenuIconLine2, .3, {rotation: -35, top: '50%', ease: Power0.ease}, 'M-wave1')
                .to(MobileMenu, .5, {bottom: 0, ease: Power0.ease}, 'M-wave1')
            ;
        ToggleMobileMenuTl.pause();


class GSAP {

    //Open / Close Main Menu
        AnimateMainMenu(){
            if(MainMenuOpen === false){
                ToggleMenuTl.play();
                MainMenuOpen = true;
            } else {
                ToggleMenuTl.reverse();
                MainMenuOpen = false;
            }
        }


    //Open / Close Mobile Main Menu
        AnimateMobileMainMenu(){
            if(MobileMainMenuOpen === false){
                ToggleMobileMenuTl.play();
                MobileMainMenuOpen = true;
            } else {
                ToggleMobileMenuTl.reverse();
                MobileMainMenuOpen = false;
            }
        }

}

export default GSAP;


//MenuIcon-Hovers
    // ShowMenuText(){
    //     MenuClosedMenuIconHover.play();
    // }

    // ShowCloseText(){
        
    // }

 // const MenuClosedMenuIconHover = new TimelineLite();
    //         MenuClosedMenuIconHover
    //             .to(MenuIcon, .1, {opacity: 0})
    //             .to(MenuIconMenu, .1, {opacity: 1}, '-=.15')
    //             ;
    //         MenuClosedMenuIconHover.pause();
        // const MenuOpenMenuIconHover = new TimelineLite();
        //     MenuOpenMenuIconHover
        //         .to(MenuIcon, .1, {opacity: 0})
        //         .to(MenuIconClose, .1, {opacity: 1})
        //         ;

        //     MenuOpenMenuIconHover.pause();