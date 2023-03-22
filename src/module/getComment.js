// eslint-disable-next-line operator-linebreak
const baseURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bcgJRMnQ1dKWghvE6rmX';

const getComment = async () => {
  const comments = document.getElementById('comment');
  const span = document.getElementById('spanComment');
  const { name } = comments.dataset;
  const response = await fetch(`${baseURL}/comments?item_id=${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  span.innerText = `(${response.status === 200 ? data.length : ''})`;

  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p>${item.creation_date}</p>
      <h3>${item.username}:</h3>
      <p>${item.comment}</p>
      `;
    comments.appendChild(li);
  });
};

export default getComment;
