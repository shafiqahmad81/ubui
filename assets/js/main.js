// slider js
const swiper = new Swiper(".slide-wrap", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,       // scrollbar টেনে slide করা যাবে
      dragSize: 50,          // scrollbar এর size
    },
    mousewheel: true, // mouse scroll support
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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