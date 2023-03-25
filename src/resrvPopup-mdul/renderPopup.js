import './popupStyle.css';
import reservation from './postReservData.js';
import getReservation from './getReservation.js';

const url = 'https://api.tvmaze.com/shows';

const overlay = document.querySelector('.overlay');

const renderPopup = async (e) => {
  const imgPop = document.createElement('div');
  const { id } = e.target.dataset;
  overlay.innerHTML = '';
  const res = await fetch(url);
  const data = await res.json();
  const movie = data.find((item) => item.name === id);
  const container = `
 <div class="pop-in">
  <button class="material-symbols-outlined close" id="closeBtn">close</button>
  <div class="img">
    <img src="${movie.image.medium}" alt="image">
    </div>
  <h3 class="img-title">${movie.name}</h3>
  <div class="info">
    <ul>
        <li class="i-info">Language: ${movie.language}</li>
        <li class="i-info">premiered: ${movie.premiered}</li>
        <li class="i-info">genres: ${movie.genres[0]} ${movie.genres[1]} </li>
        <li class="i-info"><a href="${movie.url}">Click here</a> to Watch</li>
    </ul>
    </div>
    <div class="reservation">
      <h2 <h2 style="
      text-align: center;"> Reservations <span id="resrvHeading"></span></h2>
      <ul class="listReservations" data-id="${movie.name}">
      </ul>
    </div>
    <div>
    <h2 id="headingresr">Add a reservation</h2>
    <form action="#" method="post" id="formData" data-id="${movie.name}">
    <label for="name">
       <input class="inputElm name" type="text" name="name" placeholder="Your Name" required>
     </label>
     <label for="startDate">
      <input class="inputElm startDate" name="startDate" type="date" placeholder="Start Date" required>
     </label>
     <label for="endDate">
    <input class="inputElm endDate" name="endDate" type="date" placeholder="End Date" required>
     </label>
      <Button type="submit" id="reserveButton">Reserve</Button>
    </form>
   </div>
   `;

  imgPop.classList.add('img-pop');
  imgPop.classList.add('show');
  imgPop.innerHTML = container;

  overlay.appendChild(imgPop);
  overlay.style.display = 'initial';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    imgPop.style.display = 'none';
    overlay.style.display = 'none';
  });
  reservation();
  getReservation(movie);
};

const showPopup = () => {
  const reservetBtn = document.querySelectorAll('#reserve');
  reservetBtn.forEach((item) => {
    item.addEventListener('click', renderPopup);
  });
};

export default showPopup;
