import getImageData from './utils';
const url = 'https://api.tvmaze.com/shows';
import './popupStyle.css';

const overlay = document.querySelector('.overlay');

const renderPopup = async (e) => {
	const imgPop = document.createElement('div');
	overlay.innerHTML = '';
	const id = e.target.dataset.id;
	const res = await fetch(url);
	const data = await res.json();
	const movie = data.find(item => item.name === id);
	console.log(movie);
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
				<li class="i-info">summary: ${movie.summary}</li>
				<li class="i-info"><a href="${movie.url}">Click here</a>to Watch</li>
			</ul>
		</div>
		<div>
		<h2 id="headingresr">Add a reservation</h2>
		<form action="" id="formData">
      <input class="inputElm" type="text" placeholder="Your Name" required>
      <input class="inputElm" type="date" placeholder="Start Date" required>
      <input class="inputElm" type="date" placeholder="End Date" required>
      <Button type="submit" id="reserveButton">Reserve</Button>
    </form>
		</div>
		`;

	imgPop.classList.add('img-pop');
	imgPop.classList.add('show');
	imgPop.innerHTML = container;
	console.log("overlay", overlay);
	
	overlay.appendChild(imgPop);
	overlay.style.display = 'initial';
	
	const closeBtn = document.getElementById('closeBtn');
	closeBtn.addEventListener('click', () => {
		imgPop.style.display = "none";
		overlay.style.display = "none";
	});
};

const showPopup = () => {
  const reservetBtn = document.querySelectorAll('#reserve');
  reservetBtn.forEach((item) => {
		item.addEventListener('click', renderPopup);
  });
};

export default showPopup;