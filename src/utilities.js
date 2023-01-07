export const createNavigationButton = (buttonName) => {
    const button = document.createElement('div');
    button.classList.add('nav-item');
    button.innerText = buttonName;

    return button;
}

export const createImageElement = (source,alter,className) => {
    let image = new Image();
    image.src = source;
    image.alt = alter;
    image.classList.add(className);
    return image;
}