import logoImage from './assets/images/logo.png';
import githubLogo from './assets/images/github.png';
import { createNavigationButton, createImageElement } from './utilities';
import './style.css';
import loadHomePage from './homePage';

// create header of page
const createHeader = () => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const logo = createImageElement(logoImage, 'logo', 'logo');

    header.appendChild(logo);
    header.appendChild(navigationTabs());

    return header;
}

// create navigation bar in header
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
    mainPage.setAttribute('id', 'main');

    return mainPage;
}

const createFooter = () => {
    const footer = document.createElement('div');
    footer.setAttribute('id','footer');

    const footerContent = document.createElement('div');
    footerContent.innerText = 'Copyright © Himesh9512';

    const footerIcon = document.createElement('a');
    footerIcon.href = 'https://github.com/Himesh9512/';
    footerIcon.appendChild(createImageElement(githubLogo,'github','github-logo'));
    
    footer.appendChild(footerContent);
    footer.appendChild(footerIcon);

    return footer;
}

(function heroPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMainPage());
    content.appendChild(createFooter());

    loadHomePage();
})();
