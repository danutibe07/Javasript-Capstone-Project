const getReservation = async () => {
  const listReservations = document.querySelector('.listReservations');
  const { id } = listReservations.dataset;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hV5We5kGTFT3TcdAU60w/reservations?item_id=${id}`;
  const resrvHeading = document.getElementById('resrvHeading');
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  listReservations.innerHTML = '';
  resrvHeading.innerText = `(${data.length === undefined ? '' : data.length})`;
  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p id="reservItem">${item.date_start} - ${item.date_end} by ${item.username}</p>
    `;
    listReservations.appendChild(li);
  });
};

export default getReservation;
