(()=>{window.addEventListener("DOMContentLoaded",(function(){window.matchMedia("(min-width: 768px)").matches&&document.querySelectorAll(".wave").forEach((function(e){e.innerHTML=e.textContent.split("").map((function(e,t){return'<span style="--index: '.concat(t,'">').concat(e,"</span>")})).join("")})),window.addEventListener("scroll",(function(){var i=window.pageYOffset,c=e.getBoundingClientRect().height;i>n.getBoundingClientRect().height-c?(e.classList.add("nav-active"),r.classList.add("rd-logo-active"),t.classList.remove("display-none"),o.forEach((function(e){e.classList.add("social-icon-active")}))):(e.classList.remove("nav-active"),r.classList.remove("rd-logo-active"),t.classList.add("display-none"),o.forEach((function(e){e.classList.remove("social-icon-active")})))}))})),console.log();var e=document.querySelector("nav"),t=document.querySelector("nav h1"),n=document.querySelector(".hero-section"),o=document.querySelectorAll(".social-icon"),r=document.querySelector(".rd-logo"),i=.95,c={root:null,rootMargin:"0px",threshold:i};new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>i&&(document.querySelector(".citation-article").style.animation="1s ease-in-out 0s 1 forwards running articleBorder",document.querySelector(".citation-article h3:nth-of-type(1)").style.animation="1s ease-in-out 0.25s 1 forwards running articleEaseInOut",document.querySelector(".citation-article h3:nth-of-type(2)").style.animation="1s ease-in-out 0.5s 1 forwards running articleEaseInOut",document.querySelector(".citation-article p").style.animation="1s ease-in-out 2s 1 forwards running articleEaseInOut",t.unobserve(e.target))}))}),c).observe(document.querySelector(".citation-section")),new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>i&&(document.querySelector(".intro-article").style.animation="1s ease-in-out 0s 1 forwards running articleBorder",document.querySelector(".intro-article p:nth-of-type(1)").style.animation="1s ease-in-out 0.25s 1 forwards running articleEaseInOut",document.querySelector(".intro-article p:nth-of-type(2)").style.animation="1s ease-in-out 0.5s 1 forwards running articleEaseInOut",document.querySelector(".cv-btn").style.animation="1s ease-in-out 0.75s 1 forwards running articleEaseInOut",t.unobserve(e.target))}))}),c).observe(document.querySelector(".intro-section")),new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>i&&(document.querySelector(".bienvenue-article").style.animation="1s ease-in-out 0s 1 forwards running articleBorder",document.querySelector(".bienvenue-article p").style.animation="1s ease-in-out 0.25s 1 forwards running articleEaseInOut",t.unobserve(e.target))}))}),c).observe(document.querySelector(".bienvenue-section")),new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>i&&(document.querySelectorAll(".projets-article").forEach((function(e){e.style.animation="1s ease-in-out 0s 1 forwards running articleBorder"})),document.querySelectorAll(".projet-preview").forEach((function(e){e.style.animation="1.5s ease-in-out 0.5s 1 forwards running articleEaseInOut"})),t.unobserve(e.target))}))}),c).observe(document.querySelector(".projets-section")),new IntersectionObserver((function(e,t){e.forEach((function(e){e.intersectionRatio>i&&(document.querySelector(".competences-article").style.animation="1s ease-in-out 0s 1 forwards running articleBorder",document.querySelectorAll(".competences-article h5").forEach((function(e){e.style.opacity="1"})),t.unobserve(e.target))}))}),c).observe(document.querySelector(".competences-section")),console.log("bruhh");for(var a=document.querySelectorAll(".projets-article"),s=document.querySelectorAll(".modal-overlay"),u=document.querySelectorAll(".close-btn"),l=0;l<a.length;l++)a[l].onclick=function(e){e.preventDefault(),modal=document.querySelector(e.currentTarget.getAttribute("href")),$(modal).fadeIn(),$("nav").fadeOut()};for(l=0;l<u.length;l++)u[l].onclick=function(){for(var e in s)void 0!==s[e].style&&$(s[e]).fadeOut(),$("nav").fadeIn()};window.onclick=function(e){if(e.target.classList.contains("modal-overlay"))for(var t in s)void 0!==s[t].style&&$(s[t]).fadeOut(),$("nav").fadeIn()}})();