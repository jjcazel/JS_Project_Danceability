import './styles/index.scss';
import Axios from 'axios';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app')
    .innerText = "Hello World!";
    
    Axios.get('./app').then(response => console.log(response))
});



