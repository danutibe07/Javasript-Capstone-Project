const displaySeries = (data) => {
  const seriesapp = document.querySelector('.boxes');
  const series = document.createElement('div');
  series.classList.add('series');
  series.innerHTML = `
    <div> <img class="series-img" src="${data.image.medium}" alt=""></div>
    <div class="details">
        <h4 class="series-name">${data.name}</h4>
        <div class="likebtn">
        <span class="heart"></span>
        <span class="countlike">34</span>
        <span class="text">Likes</span>
        </div>
        <button id="comment">comment</button>
    </div>`;
  seriesapp.appendChild(series);
};

export default displaySeries;
