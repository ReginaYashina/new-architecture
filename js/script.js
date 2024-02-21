(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setHeight();
  window.addEventListener("resize", setHeight);
})();

// header
const header = document.getElementById("header");

const headerHeight = header.offsetHeight;
window.addEventListener("scroll", function () {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= headerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

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
    prevEl: ".fullscreen-about-prev",
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

// calculator
let calculators = document.querySelectorAll(".calculator-js");

if (!!calculators) {
  calculators.forEach(function (calc) {
    let checkboxes = calc.querySelectorAll(".calculator-input-square");
    let area = calc.querySelector(".calculator-area-input");
    checkboxes.forEach(function (item) {
      item.addEventListener("input", calculator);
    });
    area.addEventListener("input", calculator);
    function calculator() {
      let finishPrice = 0;
      let checkedPrice;
      let commonFinishPrice = 0;
      let areaValue = calc.querySelector(".calculator-area-input").value;
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

        calc.querySelector(".calculator-finish-price span").innerText =
          commonFinishPrice;
      }
    }
  });
}

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

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.querySelector("body").style.opacity = "1";
    document.querySelector("body").style.transition = "1.5s";
  }

  let gallery = document.querySelector(".new-project-gallery");
  if (!!gallery) {
    baguetteBox.run(".new-project-gallery");
  }
};
