console.log(document);
const heading = document.querySelector("h1");
console.log(heading);

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  console.log(ratingValue);
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.computedStyleMap.fontWeight = "bold";
  }
  rating.innerHTML = ratingValue;
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event)=> {
//     console.log("You clicked the button", event);
// });

const allBtns = document.querySelectorAll(".rate-button");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

const nameSorter = document.querySelector("#name-sorter");

nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  const main = document.querySelector("main");
  const parksList = main.querySelectorAll(".park-display");
  main.innerHTML ="";
  const parksArray = Array.from(parksList);
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if(parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
  });

  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded!");
});

console.log("After!");