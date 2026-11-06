// Gabriel Dos Santos - Portfolio scripts

// ---------- Portfolio lightbox ----------
// One modal is reused for every project. When a card is clicked,
// its data- attributes are copied into the modal.
const projectButtons = document.querySelectorAll('[data-project-title]');
const modalTitle = document.querySelector('#projectModalLabel');
const modalImage = document.querySelector('#modalImage');
const modalText = document.querySelector('#modalText');

projectButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    modalTitle.textContent = this.dataset.projectTitle;
    modalImage.src = this.dataset.projectImage;
    modalImage.alt = this.dataset.projectTitle;
    modalText.textContent = this.dataset.projectText;
  });
});

// ---------- Contact form check ----------
// Uses Bootstrap's validation styles. The form is not connected
// to an email service, so it just shows a message when it is filled in.
const form = document.querySelector('.needs-validation');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const status = document.querySelector('.form-status');

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields.';
    } else {
      status.textContent = 'Thanks! Your message is ready. (This form is not connected to email yet.)';
      form.reset();
      form.classList.remove('was-validated');
      return;
    }

    form.classList.add('was-validated');
  });
}

// ---------- Footer year ----------
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
