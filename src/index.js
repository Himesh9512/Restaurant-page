import './style.css';

function heroPage(){
    const content = document.getElementById('content');
    createHeader(content);
    const header = document.createElement('div');
    header.setAttribute('id','header');
    header.innerText = "Hello guys";
    content.appendChild(header);
};

function createHeader(content) {
    const header = document.createElement('div');
    header.setAttribute('id','header');
    header.innerText = "Hello guys";
    content.appendChild(header);
};

heroPage();
