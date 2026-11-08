const them = document.querySelector(".nav-dark");
const light = document.querySelector(".dark-p");
const logo = document.querySelector(".logo");
const img = document.querySelector(".theme-img");
const hero = document.querySelector(".hero");
const main = document.querySelector(".main");

them.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("dark_light");

  hero.classList.toggle("search_shadow", isLight);
  main.classList.toggle("search_shadow", isLight);

  if (isLight) {
    light.textContent = "DARK";
    logo.src = "./img/devfinder.png";
    img.src = "./img/moon.svg";
  } else {
    light.textContent = "LIGHT";
    logo.src = "./img/devfinder-dark.png";
    img.src = "./img/sun.svg";
  }
});
