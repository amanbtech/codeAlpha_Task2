function filterImages(category) {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

