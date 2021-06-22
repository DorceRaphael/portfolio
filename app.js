/*------------------------------------------- LOADER */

$(window).load(function () {
  $(".loader-overlay").fadeOut("1000");
});

window.addEventListener("DOMContentLoaded", function () {
  waterEffect();
  waveEffect();
  navSwitch();
});

/*------------------------------------------- EFFET EAU */

function waterEffect() {
  $(document).ready(function () {
    $(".hero-article").ripples("show");
  });
  $(document).ready(function () {
    $(".projet-preview-img").ripples("show");
  });
}

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

/*------------------------------------------- INTERSECTION OBSERVER */

const ratio = 0.8;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const observerCitation = new IntersectionObserver(citationAnimation, options);
observerCitation.observe(document.querySelector(".citation-section"));

function citationAnimation(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      document.querySelector(".citation-article").style.animation =
        "1s ease-in-out 0s 1 forwards running articleBorder";
      document.querySelector(
        ".citation-article h3:nth-of-type(1)"
      ).style.animation =
        "1s ease-in-out 0.25s 1 forwards running articleEaseInOut";
      document.querySelector(
        ".citation-article h3:nth-of-type(2)"
      ).style.animation =
        "1s ease-in-out 0.5s 1 forwards running articleEaseInOut";
      document.querySelector(".citation-article p").style.animation =
        "1s ease-in-out 2s 1 forwards running articleEaseInOut";
      observer.unobserve(entry.target);
    }
  });
}

const observerIntro = new IntersectionObserver(introAnimation, options);
observerIntro.observe(document.querySelector(".intro-section"));

function introAnimation(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      document.querySelector(".intro-article").style.animation =
        "1s ease-in-out 0s 1 forwards running articleBorder";
      document.querySelector(
        ".intro-article p:nth-of-type(1)"
      ).style.animation =
        "1s ease-in-out 0.25s 1 forwards running articleEaseInOut";
      document.querySelector(
        ".intro-article p:nth-of-type(2)"
      ).style.animation =
        "1s ease-in-out 0.5s 1 forwards running articleEaseInOut";
      document.querySelector(".cv-btn").style.animation =
        "1s ease-in-out 0.75s 1 forwards running articleEaseInOut";
      observer.unobserve(entry.target);
    }
  });
}

const observerBienvenue = new IntersectionObserver(bienvenueAnimation, options);
observerBienvenue.observe(document.querySelector(".bienvenue-section"));

function bienvenueAnimation(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      document.querySelector(".bienvenue-article").style.animation =
        "1s ease-in-out 0s 1 forwards running articleBorder";
      document.querySelector(".bienvenue-article p").style.animation =
        "1s ease-in-out 0.25s 1 forwards running articleEaseInOut";
      observer.unobserve(entry.target);
    }
  });
}

const observerProjet = new IntersectionObserver(projetsAnimation, options);
observerProjet.observe(document.querySelector(".projets-section"));

function projetsAnimation(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      document.querySelectorAll(".projets-article").forEach(function (projet) {
        projet.style.animation =
          "1s ease-in-out 0s 1 forwards running articleBorder";
      });
      document.querySelectorAll(".projet-preview").forEach(function (preview) {
        preview.style.animation =
          "1s ease-in-out 1s 1 forwards running articleEaseInOut";
      });
      observer.unobserve(entry.target);
    }
  });
}

const observerCompetences = new IntersectionObserver(
  competencesAnimation,
  options
);
observerCompetences.observe(document.querySelector(".competences-section"));

function competencesAnimation(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      document.querySelector(".competences-article").style.animation =
        "1s ease-in-out 0s 1 forwards running articleBorder";
      document
        .querySelectorAll(".competences-article h5")
        .forEach(function (h5) {
          h5.style.opacity = "1";
        });
      observer.unobserve(entry.target);
    }
  });
}

/*------------------------------------------- MODAL */

// Get the button that opens the modal
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
    nav.classList.add("display-none");
    modal.classList.add("open-modal");
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].classList.remove("open-modal");
      nav.classList.remove("display-none");
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal-overlay")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].classList.remove("open-modal");
      nav.classList.remove("display-none");
    }
  }
};
