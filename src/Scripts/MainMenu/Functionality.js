//
//Main Menu Functionality
//

import MainMenu from './EventCalls';



    const MenuIcon = document.getElementById('Menu-Bar-Icon');
    const MobileMenuIcon = document.getElementById('Mobile-Menu-Bar-Icon');
    const newMM = new MainMenu;

    //State 
        //Main Menu



        //OPEN CLOSE MENU 
            

            const ToggleMainMenu = (e) => {

                newMM.ToggleMainMenu();
            }

            const ToggleMobileMainMenu = (e) => {
                newMM.ToggleMobileMenu();
            }

            

    MenuIcon.addEventListener('click', ToggleMainMenu);
    MobileMenuIcon.addEventListener('click', ToggleMobileMainMenu);

    