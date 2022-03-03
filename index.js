const input = document.querySelector(".search__box-input");
const searchBtn = document.querySelector(".btn__search");
const clearBtn = document.querySelector(".btn__clear");
const searchBox = document.querySelector('.search__box')
const grid = document.querySelector(".grid");
let url =
  "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=1UqonYFFlnWmTlwaZXBqz5-fNuHW0ETJo2RnkYgExzo";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  let array = data.results.map((result) => result.urls.regular);
  for (let item of array) {
    showData(item);
  }

  input.focus();
}

getData();

function showData(item) {
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = item;
  img.alt = "image";
  grid.appendChild(img);
}

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.classList.add("hide");
    clearBtn.classList.remove("hide");
    let searchResults = input.value;
    grid.innerHTML = "";
    url = `https://api.unsplash.com/search/photos?query=${searchResults}&per_page=30&orientation=landscape&client_id=1UqonYFFlnWmTlwaZXBqz5-fNuHW0ETJo2RnkYgExzo`;
    getData();
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  input.focus();
});
