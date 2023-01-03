import './style.css';

function helloWorld(){
    const content = document.getElementById('content');
    const testElement = document.createElement('div');
    testElement.classList.add('test');
    testElement.innerText = "Hello guys this is under construction website";
    content.appendChild(testElement);
    console.log("hello world");
}

helloWorld();