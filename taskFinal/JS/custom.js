// got some help from google in input legnth cause couldn't attend most of the lecture today, thank you for your effort <3 


const controlForm = document.querySelector('#controlForm');
const inputCollect = document.querySelector('#inputCollect');
const outputDisplay = document.querySelector('#outputDisplay');

controlForm.addEventListener('click', function() {
  inputCollect.classList.toggle('d-none');
  controlForm.innerText == "Show Form"?
  controlForm.innerText="Hide Form"
  :
  controlForm.innerText="Show Form"
});

inputCollect.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = inputCollect.elements.title.value;
  const description = inputCollect.elements.description.value;
  const status = inputCollect.elements.status.checked ? "Yes" : "No";

  let errorMessages = [];

  if (!title.length) {
    errorMessages = [...errorMessages, "Title Is Empty"];
    inputCollect.elements.title.insertAdjacentHTML('afterend', '<div class="alert alert-danger">Title Is Empty</div>');
  }
  else if (title.length < 5 || title.length > 20) {
    errorMessages = [...errorMessages, "Title should be between 5 and 20 characters."];
    inputCollect.elements.title.insertAdjacentHTML('afterend', '<div class="alert alert-danger">Title should be between 5 and 20 characters.</div>');
  }
  else {
   inputCollect.elements.title.nextElementSibling?.remove(); // remove error message if input is valid
  }

  if (!description.length) {
    errorMessages = [...errorMessages, "Description Is Empty"];
    inputCollect.elements.description.insertAdjacentHTML('afterend', '<div class="alert alert-danger">Description Is Empty</div>');
  }
  else if (description.length < 5 || description.length > 300) {
    errorMessages = [...errorMessages, "Description should be between 5 and 300 characters."];
    inputCollect.elements.description.insertAdjacentHTML('afterend', '<div class="alert alert-danger">Description should be between 5 and 300 characters.</div>');
  }
  else {
    inputCollect.elements.description.nextElementSibling?.remove(); // remove error message if input is valid
  }

  if (errorMessages.length > 0) {
    return;
  }

  const element = document.createElement('div');
  const sent = `
  <h3>Title: ${title}</h3>
  <h4>Description: ${description}</h4>
  <p>Status: ${status}</p>
  <div>
    <button class="btn btn-danger">delete</button>
    <button class="btn btn-warning">complete</button>
  </div>
`;
  element.innerHTML += sent;

  outputDisplay.appendChild(element);
   const deleteButton = element.querySelector('.btn-danger');
  deleteButton.addEventListener('click', function() {
    element.remove;
  });
  const completeButton = element.querySelector('.btn-warning');
  completeButton.addEventListener('click', function() {
    element.style.backgroundColor = '#d4edda';
  });
  inputCollect.reset();
});

