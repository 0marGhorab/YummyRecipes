const mainMeals = document.getElementById("main-meals");

const URL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?" +
  window.location.search.split("?")[1];

const fetchMain = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.json);
  }
};

const displayMain = async () => {
  const { meals: data } = await fetchMain();
  mainCartona = "";
  for (let i = 0; i < data.length; i++) {
    mainCartona += `<a class="col-lg-3 col-md-6" href="/description.html?id=${data[i].idMeal}">
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
  mainMeals.innerHTML = mainCartona;
};

displayMain();
