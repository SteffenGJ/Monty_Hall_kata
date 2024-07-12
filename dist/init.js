import { UI } from './ui.js';
import { initApp } from './myapp.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp(new UI());
});