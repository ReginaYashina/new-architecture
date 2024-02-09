// header & fixed button & fixed breadcrumbs
// const header = document.getElementById("header");
// const headerFix = document.getElementById("header-fix");
// const headerSimpleFix = document.getElementById("header-simple-fix");
// const fullscreen = document.querySelector(".fullscreen");
// const callbackButton = document.getElementById("callback-button");
// const breadcrumbs = document.querySelector('.breadcrumbs');

// if (!!headerSimpleFix) {
//   const headerSimpleFixHeight = headerSimpleFix.offsetHeight;
//   window.addEventListener("scroll", function () {
//     let scrollDistance = window.scrollY;
//     if (scrollDistance >= headerSimpleFixHeight) {
//       headerSimpleFix.classList.add("sticky");
//       breadcrumbs.classList.add("sticky");
//     } else {
//       headerSimpleFix.classList.remove("sticky");
//       breadcrumbs.classList.remove("sticky");
//     }
//   });
// }

// if (!!fullscreen) {
//   // const fullscreenHeight = fullscreen.offsetHeight; //если после первого экрана должен появляться
//   const headerHeight = header.offsetHeight;
//   window.addEventListener("scroll", function () {
//     let scrollDistance = window.scrollY;
//     // if (scrollDistance >= fullscreenHeight) //если после первого экрана должен появляться
//     if (scrollDistance >= headerHeight) {
//       header.classList.add("sticky");
//       headerFix.classList.add("sticky");
//       callbackButton.classList.add("sticky");
//       breadcrumbs.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//       headerFix.classList.remove("sticky");
//       callbackButton.classList.remove("sticky");
//       breadcrumbs.classList.remove("sticky");
//     }
//   });
// }

// burger
let burgers = document.querySelectorAll(".burger");
let overlay = document.querySelector("#overlay");
let menu = document.querySelector("#menu");
let menuLinks = document.querySelectorAll(".nav  a");
let burgerLine = document.querySelector(".burger-line");
burgers.forEach(function (burger) {
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    document.querySelector("body").classList.toggle("_lock");
    overlay.classList.toggle("is-active");
    menu.classList.toggle("is-active");

    if (overlay.classList.contains("is-active")) {
      overlay.addEventListener("click", function () {
        this.classList.remove("is-active");
        document.querySelector("body").classList.remove("_lock");
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
      });
    }
    if (burger.classList.contains("is-active")) {
      menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          overlay.classList.remove("is-active");
          document.querySelector("body").classList.remove("_lock");
          burger.classList.remove("is-active");
          menu.classList.remove("is-active");
        });
      });
      burgerLine.addEventListener("click", function () {
        overlay.classList.remove("is-active");
        document.querySelector("body").classList.remove("_lock");
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
      });
    }
  });
});

// swiper
new Swiper(".fullscreen-slider", {
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: false,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  speed: 3000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

new Swiper(".fullscreen-about-slider", {
  navigation: {
    nextEl: ".fullscreen-about-next",
    prevEl: ".fullscreen-about-prev"
  },
  speed: 2000,
  // effect: "cube",
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },
  autoHeight: true,
});

//tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
  let tab = tabs[index];
  let tabs_items = tab.querySelectorAll("._tabs-item");
  let tabs_blocks = tab.querySelectorAll("._tabs-block");
  for (let index = 0; index < tabs_items.length; index++) {
    let tabs_item = tabs_items[index];
    tabs_item.addEventListener("click", function (e) {
      for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.classList.remove("_active");
        tabs_blocks[index].classList.remove("_active");
      }
      tabs_item.classList.add("_active");
      tabs_blocks[index].classList.add("_active");
      e.preventDefault();
    });
  }
}

// calculator - page info
let infoButtons = document.querySelectorAll(".calculator-info-btn");
infoButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      item.innerText = "Развернуть";
      item
        .closest(".calculator-info")
        .querySelector(".calculator-info-block")
        .classList.remove("open");
    } else {
      item.classList.add("open");
      item.innerText = "Свернуть";
      item
        .closest(".calculator-info")
        .querySelector(".calculator-info-block")
        .classList.add("open");
    }
  });
});

// calculator
let checkboxes = document.querySelectorAll(".calculator-input-square");
let area = document.querySelector(".calculator-area-input");
let monthInput = document.querySelector(".calculator-input-month");

if (!!area) {
  checkboxes.forEach(function (item) {
    item.addEventListener("input", calculator);
  });
  area.addEventListener("input", calculator);
}

function calculator() {
  let finishPrice = 0;
  let checkedPrice;
  let commonFinishPrice = 0;
  let areaValue = document.querySelector(".calculator-area-input").value;
  for (let i = 0; i < checkboxes.length; i++) {
    checkedPrice = Number(
      checkboxes[i]
        .closest(".calculator-block")
        .querySelector(".calculator-cost span").innerText
    );
    if (checkboxes[i].checked) {
      finishPrice += checkedPrice;
      commonFinishPrice = finishPrice * areaValue;
    }

    document.querySelector(".calculator-finish-price span").innerText =
      commonFinishPrice;
  }
}

// to top button
// let body = document.body,
//   html = document.documentElement;

// let pageHeight = Math.max(
//   body.scrollHeight,
//   body.offsetHeight,
//   html.clientHeight,
//   html.scrollHeight,
//   html.offsetHeight
// );

// let toTopButton = this.document.querySelector(".go-top");
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 400) {
//     toTopButton.classList.add("show");
//   } else {
//     toTopButton.classList.remove("show");
//   }
// });

// toTopButton.addEventListener("click", function backToTop() {
//   if (window.scrollY > 0) {
//     window.scrollBy(0, -50);
//     setTimeout(backToTop, 10);
//   }
// });

// smooth scroll
// document.querySelectorAll('a[href^="#"').forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     let href = this.getAttribute("href").substring(1);

//     const scrollTarget = document.getElementById(href);

//     // const topOffset = document.querySelector('.scrollto').offsetHeight;
//     const topOffset = 0; // если не нужен отступ сверху
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   });
// });

//Popups
let modal = document.getElementById("popup");
let btn = document.querySelectorAll(".popup-link");
let span = document.querySelector(".popup-close");

btn.forEach(function (item) {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    document.querySelector("body").classList.add("_lock");
  });
});

span.onclick = function () {
  modal.style.display = "none";
  document.querySelector("body").classList.remove("_lock");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector("body").classList.remove("_lock");
  }
};
