document.addEventListener("menuButton", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
      navMenu.style.display = "flex";
    } else {
      navMenu.style.display = "none";
    }
  });
});
// rating stars

const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");

let currentRating = 5;
setRating(currentRating);

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-value"));
    currentRating = rating;
    setRating(rating);
    updateRatingText(rating);
  });

  star.addEventListener("mouseover", () => {
    const hoverRating = parseInt(star.getAttribute("data-value"));
    highlightStars(hoverRating);
  });

  star.addEventListener("mouseout", () => {
    resetStars();
    highlightStars(currentRating);
  });
});

function setRating(rating) {
  stars.forEach((star) => {
    star.classList.remove("selected");
  });

  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
}

function updateRatingText(rating) {
  ratingText.textContent = `${rating}.0 Shopify Rating`;
}

function highlightStars(rating) {
  stars.forEach((star) => {
    star.style.color = "#ddd";
  });

  for (let i = 0; i < rating; i++) {
    stars[i].style.color = "gold";
  }
}

function resetStars() {
  stars.forEach((star) => {
    star.style.color = "#ddd";
  });
}
// 28X

let initialValue = 28;

function updateText() {
  const dynamicText = document.getElementById("dynamic-text");
  dynamicText.textContent = `${initialValue}X`;
}

window.onload = updateText;

// ..........

// 17 Days

let initialDays = 19;

function updateDaysText() {
  const dynamicText = document.getElementById("dynamic-text-days");
  dynamicText.textContent = `${initialDays}Days`;
}

window.onload = updateDaysText;

//  mail chart

const data = {
  "Direct mail": 90,
  Email: 40,
};

function updateChart(data) {
  const directMailBar = document.getElementById("direct-mail-bar");
  const emailBar = document.getElementById("email-bar");
  const directMailPercentage = document.getElementById(
    "direct-mail-percentage"
  );
  const emailPercentage = document.getElementById("email-percentage");

  directMailBar.style.height = `${data["Direct mail"] * 3}px`;
  directMailPercentage.textContent = `${data["Direct mail"]}%`;

  emailBar.style.height = `${data["Email"] * 3}px`;
  emailPercentage.textContent = `${data["Email"]}%`;
}
updateChart(data);
