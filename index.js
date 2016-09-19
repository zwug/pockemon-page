document.querySelector('.modal-toggle').addEventListener('click', function() {
    new Modal({el: document.getElementById('static-modal')}).show();
  });
