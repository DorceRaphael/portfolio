/*------------------------------------------- LOADER */

// $(window).load(function () {
//   $(".loader-overlay").fadeOut("1000");
// });

window.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    // waterEffect();
    waveEffect();
  }
  navSwitch();
});

/*------------------------------------------- EFFET EAU */

// function waterEffect() {
//   $(document).ready(function () {
//     $(".hero-article").ripples("show");
//   });
//   $(document).ready(function () {
//     $(".projet-preview-img").ripples("show");
//   });
// }

/*------------------------------------------- EFFET VAGUE */

function waveEffect() {
  const wave = document.querySelectorAll(".wave");
  wave.forEach((label) => {
    label.innerHTML = label.textContent
      .split("")
      .map((text, letter) => `<span style="--index: ${letter}">${text}</span>`)
      .join("");
  });
}

/*------------------------------------------- NAV SWITCH */
console.log();
const nav = document.querySelector("nav");
const navh1 = document.querySelector("nav h1");
const hero = document.querySelector(".hero-section");
const icons = document.querySelectorAll(".social-icon");
const rdLogo = document.querySelector(".rd-logo");

function navSwitch() {
  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    const heroHeight = hero.getBoundingClientRect().height;
    if (scrollHeight > heroHeight - navHeight) {
      nav.classList.add("nav-active");
      rdLogo.classList.add("rd-logo-active");
      navh1.classList.remove("display-none");
      icons.forEach(function (icon) {
        icon.classList.add("social-icon-active");
      });
    } else {
      nav.classList.remove("nav-active");
      rdLogo.classList.remove("rd-logo-active");
      navh1.classList.add("display-none");
      icons.forEach(function (icon) {
        icon.classList.remove("social-icon-active");
      });
    }
  });
}

/*------------------------------------------- MODAL */
// Get the button that opens the modal!!!
var modalBtn = document.querySelectorAll(".projets-article");
// All page modals
var modals = document.querySelectorAll(".modal-overlay");
// Get the <span> element that closes the modal
var closeBtn = document.querySelectorAll(".close-btn");

// When the user clicks the button, open the modal
for (var i = 0; i < modalBtn.length; i++) {
  modalBtn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.currentTarget.getAttribute("href"));
    $(modal).fadeIn();
    $("nav").fadeOut();
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        $(modals[index]).fadeOut();
      $("nav").fadeIn();
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal-overlay")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        $(modals[index]).fadeOut();
      $("nav").fadeIn();
    }
  }
};
