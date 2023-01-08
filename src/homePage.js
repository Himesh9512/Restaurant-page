import loadMenuPage from "./menuPage";

const addMainText = () => {
    const mainContentText = document.createElement('div');
    mainContentText.classList.add('content-text');
    mainContentText.innerHTML = 'Fake Cookies & <span>Smiles</span>';

    return mainContentText;
}

const createMenuButton = () => {
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-button');

    const button = document.createElement('button');
    button.innerText = 'Menu';

    button.addEventListener('click', () => {
        loadMenuPage();
    });

    menuButton.appendChild(button);

    return menuButton;
}

export default function loadHomePage() {
    const main = document.getElementById('main');

    main.innerHTML = '';
    main.appendChild(addMainText());
    main.appendChild(createMenuButton());
}