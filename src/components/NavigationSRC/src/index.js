import './style.css';
import MenuExternalElements from './menu-external-elements';
import MenuToggle from './menu-toggle';

export default () => {
    const navigations = [];

    document.querySelectorAll('.block-navigation').forEach((module, index, modules) => {
        const navigation = new Navigation(module);
        // Last navigation on page used to add single block-navigation--initialized class to body
        const isLastNavigation = index === modules.length - 1;

        navigation.init(isLastNavigation);
        navigations.push(navigation);
    });

    document.addEventListener('click', (event) => {
        navigations.forEach((navigation) => {
            navigation.registerDocumentEffects(event);

            // Close menu when clicked outside
            if (navigation.isToggleEnabled) {
                navigation.toggle.registerDocumentEffects(event);
            }
        });
    });
};

class Navigation {
    constructor(element) {
        this.element = element;
        this.initializedClass = 'block-navigation--initialized';
        this.menuContainer = element.querySelector('.block-navigation__container');
        this.beforeWrapper = this.menuContainer.querySelector('.block-navigation__before-wrapper');
        this.afterWrapper = this.menuContainer.querySelector('.block-navigation__after-wrapper');
        this.toggleOption = element.dataset.mobileToggle;
        this.isToggleEnabled = this.toggleOption !== 'off';
        this.mobileBreakpoint = this.toggleOption === 'custom' ? parseInt(element.dataset?.mobileBreakpoint, 10) : 1024;
        this.mediaQueryList = window.matchMedia(`(max-width: ${this.mobileBreakpoint}px)`);
        // this.submenuItems = [
        //     ...element.querySelectorAll(
        //         '.block-navigation__item.block-navigation__item--has-sub-menu:not(.block-navigation__container .block-navigation .block-navigation__item.block-navigation__item--has-sub-menu)'
        //     ),
        // ].map((item) => new SubmenuItem(item, this));

        this.submenuItems = [];


        if (this.isToggleEnabled) {
            this.toggle = new MenuToggle(this.element.querySelector('.block-navigation__mobile-toggle'), this);
            this.element.gravity = new MenuExternalElements(this);
        }
    }

    get openedSubmenuItems() {
        return this.submenuItems.filter((item) => item.isOpen);
    }

    get isMobile() {
        return this.mediaQueryList.matches;
    }

    init(isLastNavigation = false) {
        this.registerSubmenuEffects();

        if (this.isToggleEnabled) {
            this.toggle.init();
            this.initExternalElements();
            this.registerResizeEffects();
        }

        this.element.classList.add(this.initializedClass);

        if (isLastNavigation) {
            document.body.classList.add(this.initializedClass);
        }
    }

    registerSubmenuEffects() {
        this.submenuItems.forEach((item) => item.registerEffects());
    }

    registerDocumentEffects(event) {
        if (event.target.closest('.block-navigation__sub-menu--open')) {
            return;
        }

        this.closeSubmenus();
    }

    registerResizeEffects() {
        this.mediaQueryList.addEventListener('change', () => {
            this.toggle.toggleMobileClasses();
            this.element.gravity.moveElements();

            this.submenuItems.forEach((item) => item.toggleFocusoutEffect());
        });
    }

    closeSubmenus() {
        this.openedSubmenuItems.forEach((submenuItem) => {
            submenuItem.close();
        });
    }

    initExternalElements() {
        this.element.gravity.init();
    }
}