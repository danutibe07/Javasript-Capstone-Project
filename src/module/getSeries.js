import { toggleLike, getLikes } from './LikeApi.js';
import showPopup from '../resrvPopup-mdul/renderPopup.js';
import renderPopUp from './createPopUp.js';

const getSeries = async () => {
  const dataStream = await fetch('https://api.tvmaze.com/shows');
  const dataResponse = await dataStream.json();
  dataResponse.forEach((element) => {
    const seriesapp = document.querySelector('.boxes');
    const series = document.createElement('div');
    series.classList.add('series');
    series.innerHTML = `
      <div> <img class="series-img" src="${element.image.medium}" alt=""></div>
      <div class="details">
          <h4 class="series-name">${element.name}</h4>
          <div class="likebtn" >
          <button class="btnlike material-symbols-outlined" data-id="${element.name}">favorite</button>
          <span class="countlike"  id="count" data-id="${element.name}">0</span>
          <span class="text"> Likes</span>
          </div>
          <button id="commentBtn" data-id=${element.id}>Comment</button>
          <button id="reserve" data-id="${element.name}">Reservation</button>
      </div>`;
    seriesapp.appendChild(series);
  });
  toggleLike();
  getLikes();
  renderPopUp();
  showPopup();
};
export default getSeries;
