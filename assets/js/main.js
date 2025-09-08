
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
// document.querySelectorAll(".accordian-item").forEach(item => {
//   item.addEventListener("click", () => {
//     document.querySelectorAll(".accordian-item").forEach(i => {
//       i.classList.remove("active");

//       const pTag = i.querySelector(".accordian-content p");
//       if (pTag && !pTag.classList.contains("content-close")) {
//         pTag.classList.add("content-close");
//       }
//     });

//     item.classList.add("active");

//     const pTag = item.querySelector(".accordian-content p");
//     if (pTag && pTag.classList.contains("content-close")) {
//       pTag.classList.remove("content-close");
//     }
//   });
// });



const accordianItems = document.querySelectorAll(".accordian-item");

// ডিফল্টে প্রথম item ওপেন থাকবে
if (accordianItems.length > 0) {
  accordianItems[0].classList.add("active");
  const firstP = accordianItems[0].querySelector(".accordian-content p");
  if (firstP) {
    firstP.style.maxHeight = firstP.scrollHeight + "px";
  }
}

accordianItems.forEach(item => {
  item.addEventListener("click", () => {
    accordianItems.forEach(i => {
      i.classList.remove("active");
      const pTag = i.querySelector(".accordian-content p");
      if (pTag) {
        pTag.style.maxHeight = null; // smooth close
      }
    });

    item.classList.add("active");
    const pTag = item.querySelector(".accordian-content p");
    if (pTag) {
      pTag.style.maxHeight = pTag.scrollHeight + "px"; // smooth open
    }
  });
});


// filter

const filters = document.querySelectorAll('.filter-row select');
  const events = document.querySelectorAll('.event-item');

  filters.forEach(filter => {
    filter.addEventListener('change', () => {
      const selectedValues = Array.from(filters).map(f => f.value);

      events.forEach(event => {
        const eventType = event.querySelector('.event-btn').textContent.trim();
        const eventLocation = event.querySelectorAll('.event-info-item p')[1].textContent.trim();
        const eventDate = event.querySelectorAll('.event-info-item p')[0].textContent.trim();

        let show = true;

        // Recent/Oldest filter (এখানে শুধু ধরছি Recent = show all)
        if(selectedValues[0] === "Oldest") {
          // Example: শুধু Date অনুযায়ী filter করতে চাইলে এখানে logic দিবে
          // show = someCondition;
        }

        // Location filter
        if(selectedValues[1] !== "Location" && selectedValues[1] !== eventLocation) {
          show = false;
        }

        // Event Type filter
        if(selectedValues[2] !== "Event Type" && selectedValues[2] !== eventType) {
          show = false;
        }

        // Date filter
        if(selectedValues[3] !== "Date" && !eventDate.includes(selectedValues[3])) {
          show = false;
        }

        event.style.display = show ? "block" : "none";
      });
    });
  });