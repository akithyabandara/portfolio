document.documentElement.lang = "en";
//CAROUSEL
document.querySelectorAll('.zoom-carousel img').forEach(img => {
  img.addEventListener('click', function() {
    const parentCarousel = this.closest('.zoom-carousel');
    const allImages = parentCarousel.querySelectorAll('img');
    const clickedIndex = this.getAttribute('data-bs-index');
    const modalInner = document.getElementById('modal-inner-content');
    
    modalInner.innerHTML = '';

    allImages.forEach((image, index) => {
      const activeClass = index == clickedIndex ? 'active' : '';
      modalInner.innerHTML += `
        <div class="carousel-item ${activeClass}">
          <img src="${image.src}" class="d-block w-100 vh-100" style="object-fit: contain;">
        </div>`;
    });

    const myModal = new bootstrap.Modal(document.getElementById('maxModal'));
    myModal.show();
  });
});

//TEXT RISE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('active');
    } else {
      
      entry.target.classList.remove('active');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

