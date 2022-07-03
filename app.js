const ratings = document.querySelectorAll(".rate");
const rated = document.querySelector(".rating");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const btn = document.querySelector(".btn");
let spanRating = document.querySelector(".value");
let ratingValue = 0
btn.disabled = true

for (const rating of ratings) {
  rating.addEventListener("mouseover", () => {
    rating.classList.add("rateOnHover");
  });

  rating.addEventListener("click", () => {
    for (const rating of ratings) {
      rating.classList.remove("selected");
    }
    btn.disabled = false
    rating.classList.remove("rateOnHover");
    rating.classList.toggle("selected");
    ratingValue = rating.innerText;
  });

  rating.addEventListener("mouseout", () => {
    rating.classList.remove("rateOnHover");
  });
}

btn.addEventListener("click", () => {
  card1.classList.toggle("hide");
  card2.classList.toggle("hide");
  spanRating.innerText = ratingValue;
});
