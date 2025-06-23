import { createElement } from 'lwc';
import HelloWorld from 'hello/world';

const app = createElement('hello-world', { is: HelloWorld });
document.getElementById('main').appendChild(app);
