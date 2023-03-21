const popUp = document.getElementById('popUp');
const closePopUp = () => {
  const cancel = document.getElementById('close');
  cancel.addEventListener('click', () => {
    popUp.style.display = 'none';
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
      <div class='comment'>
      <p>This is the best serie ever</p>
      </div>
      <h4>Add a comment</h4>
      <form action="#" method="post" id="form">
      <label for="name">
        <input type="text" name="name" id="name" placeholder="Your Name" />
      </label>
      <label for="message">
        <textarea name="message" id="message" placeholder="Your insights" ></textarea>
      </label>
      <button type="submit" class='Submit-btn'>Comment</button>
    </form>
      `;

      div.innerHTML = element;
      popUp.appendChild(div);
      closePopUp();
    });
  });
};

export default renderPopUp;
