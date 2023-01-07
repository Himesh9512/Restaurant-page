import logoImage from './logo.png';

// create header of page
function createHeader(){
    const header = document.createElement('div');
    header.setAttribute('id','header');
    
    const logo = new Image();
    logo.src = logoImage;
    logo.alt = 'logo';
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

function createNavigationButton(buttonName){
    const button = document.createElement('div');
    button.classList.add('nav-item');
    button.innerText = buttonName;

    return button;
}

function heroPage(){
    const content = document.getElementById('content');
    
    content.appendChild(createHeader());
};

heroPage();