export const createNavigationButton = (buttonName) => {
    const button = document.createElement('div');
    button.classList.add('nav-item');
    button.innerText = buttonName;

    return button;
}