const nameMeals = document.getElementById("name-meals");
const nameInput = document.getElementById("byName");
const letterInput = document.getElementById("byLetter");

const nameURL = "https://www.themealdb.com/api/json/v1/1/search.php";

nameInput.addEventListener("keyup", (e) => displayName({ s: e.target.value }));
letterInput.addEventListener("keyup", (e) => {
  e.target.value.length
    ? displayName({ f: e.target.value })
    : displayName({ s: "" });
});

const fetchName = async (query) => {
  try {
    const res = await fetch(nameURL + "?" + query);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.json);
  }
};

let displaySub = -1;

const displayName = async (searchTerm) => {
  clearTimeout(displaySub);
  displaySub = setTimeout(async () => {
    const query = new URLSearchParams(searchTerm);
    const { meals: data } = await fetchName(query.toString());
    nameCartona = "";
    for (let i = 0; i < (data || []).length; i++) {
      nameCartona += `<a class="col-lg-3 col-md-6" href="/description.html?id=${data[i].idMeal}">
                <div class="bullet position-relative rounded-4">
                <img src="${data[i].strMealThumb}" alt="${data[i].strMeal}" class="w-100" />
                <div class="slider">
                <div class="slider-text p-3">
                <h2>${data[i].strMeal}</h2>
                </div>
                </div>
                </div>
                </a>`;
    }
    nameMeals.innerHTML = nameCartona;
  }, 500);
};

displayName({ s: "" });
