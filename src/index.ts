import { UISystem } from "./classes/UISystem";
import Store from "./classes/store";

(function () {
    const store = new Store();
    
    window.store = store;

    window.addEventListener('DOMContentLoaded', () => {
        new UISystem();
    
    });
    
    window.addEventListener('resize', () => {
        new UISystem();
    });    
})();
