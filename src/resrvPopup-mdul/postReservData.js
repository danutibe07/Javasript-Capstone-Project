const url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hV5We5kGTFT3TcdAU60w/reservations/"
import getReservation from "./getReservation.js";
const reservation = () => {
	const form = document.getElementById('formData');
	const username = document.querySelector('.name');
	const startDate = document.querySelector('.startDate');
	const endDate = document.querySelector('.endDate');
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const id = form.dataset.id;
		const objectdata = {
			item_id: id,
			username: username.value,
			date_start: startDate.value,
			date_end: endDate.value
		};
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(objectdata)
		})
		form.reset();
		getReservation();
	})
	
};

export default reservation;
