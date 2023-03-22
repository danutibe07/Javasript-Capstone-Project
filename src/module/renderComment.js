import getComment from './getComment.js';

// eslint-disable-next-line operator-linebreak
const baseURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bcgJRMnQ1dKWghvE6rmX';

const renderComment = () => {
  const form = document.getElementById('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { id } = form.dataset;
    const name = document.getElementById('name');
    const message = document.getElementById('message');

    const obj = {
      item_id: id,
      username: name.value,
      comment: message.value,
    };
    await fetch(`${baseURL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    form.reset();
    getComment();
  });
};

export default renderComment;
