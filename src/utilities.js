import loadHomePage from './homePage.js';
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
        console.log('showing home page');
        loadHomePage();
    } else if (button === 'Menu') {
        console.log('showing menu page');
        // loadMenuPage();
    } else {
        console.log('showing contact page');
        // loadContactPage();
    }
}