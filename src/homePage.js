const addMainText = () => {
    const mainContentText = document.createElement('div');
    mainContentText.classList.add('content-text');

    mainContentText.innerHTML = 'Fake Cookies & <span>Smiles</span>';

    return mainContentText;
}

export default function loadHomePage () {
    const main = document.getElementById('main');

    main.innerHTML = '';
    main.appendChild(addMainText());
}