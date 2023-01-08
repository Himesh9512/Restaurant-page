import { createMenuItem } from "./utilities";

const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    menuTitle.innerText = 'Cookies';

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    menuContent.appendChild(createMenuItem('Cookie Butter Brownie', '$10', 'Trader Joe\'s Speculoos Cookie Butter; tastes like a Graham Cracker Brownie'));
    menuContent.appendChild(createMenuItem('Jelly Tart', '$14', 'Thumbprint coated in WALNUTS filled with Raspberry Preserves'));
    menuContent.appendChild(createMenuItem('Nutella Brownie', '$6', 'Fudgy Nutella brownie with a dollop of Nutella & toasted HAZELNUT'));
    menuContent.appendChild(createMenuItem('Peanut Butter Cream Cheese Brownie', '$33', 'Fudgy brownie with a Peanut Butter swirl Cheesecake topping'));
    menuContent.appendChild(createMenuItem('Dirty Cookie Dough', '$76', 'Shortbread base with Eggless Cookie Dough, Salted Caramel and Ganache Topping'));

    menu.appendChild(menuTitle);
    menu.appendChild(menuContent);

    return menu;
}

export default function loadMenuPage() {
    const mainPage = document.getElementById('main');

    mainPage.innerHTML = '';
    mainPage.appendChild(createMenu());
}