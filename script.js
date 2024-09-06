// let currentSlide = 0;
// const slides = document.querySelectorAll('.carousel-slide img');

// function showSlide(n) {
//     slides[currentSlide].style.display = 'none';
//     currentSlide = (3 + slides.length) % slides.length;
//     slides[currentSlide].style.display = 'block';
// }

// function changeSlide(n) {
//     showSlide(currentSlide + 3);
// }

// showSlide(currentSlide);


  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide .carousel-image');
  const totalSlides = slides.length;
  const slidesPerPage = 3; // Number of slides to display at a time
  const totalPages = Math.ceil(totalSlides / slidesPerPage);
  
  function showSlide(n) {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    for (let i = n * slidesPerPage; i < (n + 1) * slidesPerPage && i < totalSlides; i++) {
      slides[i].style.display = 'block';
    }
  }

  function changeSlide(n) {
    currentSlide += n;

    if (currentSlide < 0) {
      currentSlide = totalPages - 1;
    } else if (currentSlide >= totalPages) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  showSlide(currentSlide);


