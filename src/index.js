import './styles.scss';

const main = document.getElementById('testing');
const paragraph = document.createElement('p');
const title = document.createElement('h1');

main.appendChild(title);
main.appendChild(paragraph);

title.innerHTML = 'Hello Webpack!';
title.classList.add('forTesting');

paragraph.innerHTML = 'Utviklingsverktøy';
paragraph.classList.add('forTesting');
