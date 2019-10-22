const express = require('express');
const router = express.Router();

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app')
    .innerText = "Hello World!";
    
    Axios.get('./app').then(response => console.log(response))
});



