const popUp = document.getElementById('popUp');
const closePopUp = () => {
  const cancel = document.getElementById('close');
  cancel.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
};

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

    fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bcgJRMnQ1dKWghvE6rmX/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      },
    );

    form.reset();
  });
};

const getComment = async () => {
  const comments = document.getElementById('comment');
  const { name } = comments.dataset;
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bcgJRMnQ1dKWghvE6rmX/comments?item_id=${name}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();

  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p>${item.creation_date}</p>
    <h3>${item.username}</h3>
    <p>${item.comment}</p>
    `;
    comments.appendChild(li);
  });
};

const renderPopUp = async () => {
  const btns = document.querySelectorAll('#commentBtn');
  const dataStream = await fetch('https://api.tvmaze.com/shows');
  const dataResponse = await dataStream.json();

  btns.forEach((e) => {
    e.addEventListener('click', (e) => {
      popUp.innerHTML = '';
      const { id } = e.target.dataset;
      popUp.style.display = 'initial';

      const newData = dataResponse.find((item) => item.id === +id);

      const div = document.createElement('div');
      div.classList.add('singlePopUp');

      const element = `
      <button class="closeIcon" id="close">
      <span class="material-symbols-outlined">close</span>
      </button>
      <div class="popUpImage"><img src='${newData.image.medium}'/></div>
      <h2>${newData.name}</h2>
      <div class='description'>
      <h3>
      <p>View:</p>
      <span>0</span>
      </h3>
      <h3>
      <p>Comments:</p>
      <span>0</span>
      </h3>
      <h3>
      <p>Download:</p>
      <span>0</span>
      </h3>
      <h3>
      <p>Episodes:</p>
      <span>0</span>
      </h3>
      </div>
      <h3>Comment</h3>
      <ul class='comment' id='comment' data-name='${newData.name}'>
      <p>This is the best serie ever</p>
      </ul>
      <h4>Add a comment</h4>
      <form action="#" method="post" id="form" data-id='${newData.name}'>
      <label for="name">
        <input type="text" name="name" id="name" placeholder="Your Name" required />
      </label>
      <label for="message">
        <textarea name="message" id="message" placeholder="Your insights" required ></textarea>
      </label>
      <button type="submit" class='Submit-btn'>Comment</button>
    </form>
      `;

      div.innerHTML = element;
      popUp.appendChild(div);
      closePopUp();
      renderComment();
      getComment();
    });
  });
};

export default renderPopUp;
