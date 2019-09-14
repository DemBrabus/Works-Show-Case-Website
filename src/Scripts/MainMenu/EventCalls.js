//
//Event Calls
//

import GSAP from './GSAP';

    const gsap = new GSAP;




class MainMenu {

    ToggleMainMenu(){
        gsap.AnimateMainMenu();
        
    }

    ToggleMobileMenu(){
        gsap.AnimateMobileMainMenu();
    }

}

export default MainMenu;



