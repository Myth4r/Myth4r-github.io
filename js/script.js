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

// ---------- Contact form ----------
// Uses Bootstrap's validation styles. When the form is filled in,
// the message is sent to my email using FormSubmit (formsubmit.co).
const form = document.querySelector('.needs-validation');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const status = document.querySelector('.form-status');

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields.';
      form.classList.add('was-validated');
      return;
    }

    status.textContent = 'Sending...';

    fetch('https://formsubmit.co/ajax/Dossantosgabriel143@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (response) { return response.json(); })
      .then(function (data) {
        if (String(data.success) === 'true') {
          status.textContent = 'Thanks! Your message has been sent.';
          form.reset();
          form.classList.remove('was-validated');
        } else {
          status.textContent = 'Sorry, the message could not be sent. Please email me instead.';
        }
      })
      .catch(function () {
        status.textContent = 'Sorry, the message could not be sent. Please email me instead.';
      });
  });
}

// ---------- Footer year ----------
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
