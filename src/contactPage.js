import { createImageElement, createContactItem } from "./utilities";
import locationImage from './assets/images/location.jpg';

const createContactPage = () => {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    const location = createImageElement(locationImage, 'location', 'location-image');

    contactPage.appendChild(createContactItem('call', '12345-67890'));
    contactPage.appendChild(createContactItem('mail', 'fakecookies00@fakemail.com'));
    contactPage.appendChild(createContactItem('place', ' '));
    contactPage.appendChild(location);

    return contactPage;
}

export default function loadContactPage() {
    const main = document.getElementById('main');

    main.innerHTML = '';
    main.appendChild(createContactPage());
}