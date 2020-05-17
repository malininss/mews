if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  console.log('this is a touch device');
} else {
  console.log('this is not a touch device');
  document.body.classList.add('no-touch');
}

if (typeof(SmoothScroll) != 'undefined') {
  var scroll = new SmoothScroll('a[href*="#"]');
}

// menu
const burgerMenu = document.querySelector('.header__burger-wrapper');
const mobileMenu = document.querySelector('.mobile-header__menu');
const mobileBackground = document.querySelector('.mobile-header__background');


burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-header__menu_active');
  mobileBackground.classList.add('mobile-header__background_active');
});

mobileBackground.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-header__menu_active');
  mobileBackground.classList.remove('mobile-header__background_active');
});

//gallery
const prevArrow = document.querySelector('.gallery__prev-arrow');
const nextArrow = document.querySelector('.gallery__next-arrow');

const mainPicture = document.querySelector('.gallery__main-pic img');
const smallPictures = Array.from(document.querySelectorAll('.gallery__prev-pic'));

if (mainPicture && smallPictures && prevArrow && nextArrow) {
  let activePictureIndex = 0;

  const updateActivePicture = () => {
    smallPictures.forEach(elem => {
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      }
    });

    if (activePictureIndex < 0) {
      activePictureIndex = smallPictures.length - 1;
    }

    if (activePictureIndex > smallPictures.length - 1) {
      activePictureIndex = 0;
    }

    mainPicture.src = smallPictures[activePictureIndex].querySelector('img').src;
    smallPictures[activePictureIndex].classList.add('active');
    
  }

  updateActivePicture();

  smallPictures.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      activePictureIndex = smallPictures.indexOf(event.target.parentElement)
      updateActivePicture();
    });
  });


  prevArrow.addEventListener('click', () => {
    activePictureIndex--;
    updateActivePicture();
  });

  nextArrow.addEventListener('click', () => {
    activePictureIndex++;
    updateActivePicture();
  });
}


// price;
const priceLinks = Array.from(document.querySelectorAll('.price__link-container'));
const priceDescriptionContainers = Array.from(document.querySelectorAll('.price__description-container'));

const updateActivePrice = (activePriceIndex = 0) => {
  priceLinks.forEach((elem, index) => {
    if (elem.classList.contains('price__link-container_active')) {
      elem.classList.remove('price__link-container_active');
    }
  })

  priceDescriptionContainers.forEach((elem, index) => {
    if (elem.classList.contains('price__description-container_active')) {
      elem.classList.remove('price__description-container_active');
    }
  })

  priceLinks[activePriceIndex].classList.add('price__link-container_active');
  priceDescriptionContainers[activePriceIndex].classList.add('price__description-container_active');

};

priceLinks.forEach(elem => {
  elem.addEventListener('click', (event) => {
    const currentElemIndex = priceLinks.indexOf(event.target.parentElement);
    if (currentElemIndex >= 0) {
      updateActivePrice(currentElemIndex);
    }

  })
})