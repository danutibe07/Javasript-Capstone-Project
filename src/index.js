import './index.css';
import img from './images/logo.jpg';
import getSeries from './module/getSeries.js';


const image = document.getElementById('imageDiv');
image.setAttribute("src", img);

window.addEventListener("load" , getSeries)

