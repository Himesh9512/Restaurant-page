import loadHomePage from './homePage.js';
import loadMenuPage from './menuPage.js';

export const createNavigationButton = (buttonName) => {
    const button = document.createElement('div');
    button.classList.add('nav-item');
    button.innerText = buttonName;

    button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('selected')) return;
        setActiveButton(button);
        loadScreen(buttonName);
    })

    return button;
}

export const createImageElement = (source,alter,className) => {
    let image = new Image();
    image.src = source;
    image.alt = alter;
    image.classList.add(className);
    return image;
}

export const setActiveButton = (button) => {
    const navButtons = document.querySelectorAll('.nav-item');

    navButtons.forEach((button)=>{
        if(button != this){
            button.classList.remove('selected');
        }
    })

    button.classList.add('selected');
}

export const loadScreen = (button) => {
    if(button === 'Home'){
        loadHomePage();
    } else if (button === 'Menu') {
        loadMenuPage();
    } else {
        console.log('showing contact page');
        // loadContactPage();
    }
}

export const createMenuItem = (cookieName,cookiePrice,cookieDescription) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemInformation = document.createElement('div');
    itemInformation.classList.add('item-info');

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.innerText = cookieName;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.innerText = cookiePrice;

    itemInformation.appendChild(itemName);
    itemInformation.appendChild(itemPrice);

    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-des');
    itemDescription.innerText = cookieDescription;

    menuItem.appendChild(itemInformation);
    menuItem.appendChild(itemDescription);

    return menuItem;
}