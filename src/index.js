import './style.css';
import BGImage from './bg-image.png'

function heroPage(){
    const content = document.getElementById('content');
    createHeader(content);
};

function createHeader(content) {
    const header = document.createElement('div');
    header.setAttribute('id','header');
    header.innerText = "Hello guys";
    content.appendChild(header);
}

heroPage();