const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
const totalItems = carousel.children.length;
const itemWidth = carousel.offsetWidth;

function showItem(index) {
  carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

function prevItem() {
  currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
  showItem(currentIndex);
}

function nextItem() {
  currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
  showItem(currentIndex);
}

prevButton.addEventListener("click", prevItem);
nextButton.addEventListener("click", nextItem);

setInterval(nextItem, 8000); // Auto rotate every 5 seconds
