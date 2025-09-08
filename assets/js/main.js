
const hamburger = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.querySelector('.menu-wrap');

// Initial state
hamburger.classList.add('show');
closeIcon.classList.add('hide');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');

  hamburger.classList.add('hide');
  hamburger.classList.remove('show');

  closeIcon.classList.add('show');
  closeIcon.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('active');

  closeIcon.classList.add('hide');
  closeIcon.classList.remove('show');

  hamburger.classList.add('show');
  hamburger.classList.remove('hide');
});


// slider js
const swiper = new Swiper(".slide-wrap", {
    direction: "vertical",
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

const swiper2 = new Swiper(".slide-wrapper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets", // Up top indicator
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiper3 = new Swiper(".slide-wrapperInitive", {
   slidesPerView: 3.3,      // 3 full + 4th partial
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,

  },

  breakpoints: {
    320: { slidesPerView: 1.2 },
    768: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3.3 },
  },

  
});







// Accordian js
document.querySelectorAll(".accordian-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".accordian-item").forEach(i => {
      i.classList.remove("active");

      const pTag = i.querySelector(".accordian-content p");
      if (pTag && !pTag.classList.contains("content-close")) {
        pTag.classList.add("content-close");
      }
    });

    item.classList.add("active");

    const pTag = item.querySelector(".accordian-content p");
    if (pTag && pTag.classList.contains("content-close")) {
      pTag.classList.remove("content-close");
    }
  });
});

document.getElementById("view-more").addEventListener("click", function () {
  const hiddenItems = document.querySelectorAll(".event-item.hidden");
  
  hiddenItems.forEach(item => {
    
    item.classList.remove("hidden"); // hidden class remove
    item.classList.add("show");      // show class add
  });

  this.style.display = "none"; // button hide করা
});