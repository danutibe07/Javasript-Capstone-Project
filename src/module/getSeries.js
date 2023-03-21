import renderPopUp from './getItems.js';

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
          <div class="likebtn">
          <span class="heart"></span>
          <span class="countlike">34</span>
          <span class="text">Likes</span>
          </div>
          <button id="commentBtn" data-id=${element.id}>Comment</button>
          <button id="reserve">Reservation</button>
      </div>`;
    seriesapp.appendChild(series);
  });
  renderPopUp();
};

export default getSeries;
