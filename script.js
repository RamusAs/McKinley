const slider = document.getElementById("timelineSlider")
document.getElementById("scrollLeft").onclick = () => {
  slider.scrollBy({ left: -300, behavior: "smooth" })
}
document.getElementById("scrollRight").onclick = () => {
  slider.scrollBy({ left: 300, behavior: "smooth" })
}

const looksSlider = document.getElementById("looksSlider")

document.getElementById("lookScrollLeft").onclick = () => {
  looksSlider.scrollBy({ left: -300, behavior: "smooth" })
}
document.getElementById("lookScrollRight").onclick = () => {
  looksSlider.scrollBy({ left: 300, behavior: "smooth" })
}
