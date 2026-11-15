const viewer = document.querySelector('dialog');
const full = viewer.querySelector('img');

// Open the selected event photo in the larger viewer.
document.querySelectorAll('[data-photo]').forEach((button) => {
  button.addEventListener('click', () => {
    full.src = button.dataset.photo;
    full.alt = button.querySelector('img').alt;
    viewer.querySelector('p').textContent = button.dataset.caption;
    viewer.showModal();
  });
});

// Close the viewer with the close button.
viewer.querySelector('.close').addEventListener('click', () => {
  viewer.close();
});

// Clicking outside the dialog also closes it.
viewer.addEventListener('click', (event) => {
  if (event.target === viewer) {
    const bounds = viewer.getBoundingClientRect();
    const isOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (isOutside) {
      viewer.close();
    }
  }
});
