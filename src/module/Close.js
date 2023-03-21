const closePopUp = () => {
  const cancel = document.getElementById('close');
  cancel.addEventListener('click', () => {
    console.log('clicked');
  });
};

export default closePopUp();
