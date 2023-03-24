const getReservation = async (movie) => {
	const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hV5We5kGTFT3TcdAU60w/reservations?item_id=${movie.name}`;
	const listReservations = document.querySelector('.listReservations')
	const resrvHeading = document.getElementById('resrvHeading');
	const response = await fetch(url, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	if (response.status === 200) {
		const data = await response.json();
		resrvHeading.innerText = `(${data.length})`
		data.forEach((item) => {
			const li = document.createElement('li');
			li.innerHTML = `
			<p id="reservItem">${item.date_start} - ${item.date_end} by ${item.username}</p>
			`
			listReservations.appendChild(li);
		});
	}
}

export default getReservation;
