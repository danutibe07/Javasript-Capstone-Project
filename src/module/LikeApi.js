const likes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uzNO5VA16ikpeSeHOP0M/likes';

export const getLikes = async () => {
  const counts = document.querySelectorAll('#count');
  const request = await fetch(likes, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const response = await request.json();
  counts.forEach((count) => {
    response.forEach((item) => {
      if (item.item_id === count.dataset.id) {
        count.textContent = `${item.item_id ? item.likes : 'seen'}`;
      }
    });
  });
};

export const toggleLike = () => {
  const btns = document.querySelectorAll('.btnlike');
  btns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      getLikes();
      const serieId = e.target.dataset.id;
      const objectLike = {
        item_id: serieId,
      };
      fetch(likes, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objectLike),
      });
    });
  });
};
