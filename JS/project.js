

document.addEventListener("DOMContentLoaded", function load() {
  let hambergerBtn = document.querySelector(".hamburger")
  hambergerBtn.addEventListener("click", active_drawer)
  function active_drawer() {
  
    let drawer = document.querySelector(".hamburger-drawer")
    drawer.classList.add("active")
  }


  function closeDrawer() {
    let drawer = document.querySelector(".hamburger-drawer")
    drawer.classList.remove("active")
  }

  let closeBtn = document.querySelector(".close-button")
  closeBtn.addEventListener("click", closeDrawer)

  let overlay = document.querySelector(".hamburger-drawer__overlay")
  overlay.addEventListener("click", closeDrawer)


  document.querySelector(".js-shop-slider") && new Swiper('.js-shop-slider', {
    loop: true,
    navigation: {
      nextEl: ".js-shop-slider .next-arrow",
      prevEl: " .js-shop-slider .preview-arrow",
    },
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2.4,
        spaceBetween: 10
      },
      992: {
        slidesPerView: 3,
      },
      1028: {
        slidesPerView: 4,
        spaceBetween: 30
      }

    }
  });


  document.querySelector(".js-product-slider") && new Swiper('.js-product-slider', {
    loop: true,
    navigation: {
      nextEl: ".js-product-slider .next-arrow",
      prevEl: ".js-product-slider .preview-arrow",
    },
    slidesPerView: 1,

    spaceBetween: 20,

  });
  document.querySelector(".js-potency-slider") && new Swiper('.js-potency-slider', {
    loop: true,
    navigation: {
      nextEl: ".potency-next-arrow",
      prevEl: ".potency-preview-arrow",
    },
    slidesPerView: 1,
    spaceBetween: 20,

  });

})


