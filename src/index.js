import logoImage from './logo.png';
import { createNavigationButton, createImageElement } from './utilities';
import './style.css';
import backgroundImage from './bg-image.jpg';

// create header of page
const createHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const logo = createImageElement(logoImage, 'logo','logo');
    logo.height = 'auto';
    logo.width = '5%';

    header.appendChild(logo);
    header.appendChild(navigationTabs());

    return header;
}

const navigationTabs = () => {
    const navigationBar = document.createElement('div');
    navigationBar.classList.add('navigation');

    navigationBar.appendChild(createNavigationButton('Home'));
    navigationBar.appendChild(createNavigationButton('Menu'));
    navigationBar.appendChild(createNavigationButton('Contact'));

    return navigationBar;
}

const createMainPage = () => {
    const mainPage = document.createElement('div');
    mainPage.setAttribute('id','main');

    return mainPage;
}

(function heroPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMainPage());
})();
