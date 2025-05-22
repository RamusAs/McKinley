const slider = document.getElementById("timelineSlider");
document.getElementById("scrollLeft").onclick = () => {
  slider.scrollBy({ left: -400, behavior: "smooth" });
};
document.getElementById("scrollRight").onclick = () => {
  slider.scrollBy({ left: 400, behavior: "smooth" });
};

const looksSlider = document.getElementById("looksSlider");

document.getElementById("lookScrollLeft").onclick = () => {
  looksSlider.scrollBy({ left: -400, behavior: "smooth" });
};
document.getElementById("lookScrollRight").onclick = () => {
  looksSlider.scrollBy({ left: 400, behavior: "smooth" });
};

const burger = document.getElementById("burger");
const navLinks = document.getElementsByClassName("nav-links")[0];
const listItems = navLinks.querySelectorAll("li");

burger.onclick = () => {
  navLinks.classList.toggle("active");
};

listItems.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
