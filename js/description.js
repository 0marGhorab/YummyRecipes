const URL =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
  window.location.search.split("=")[1];
const descCartona = document.getElementById("desc-cartona");
// ?i=52772

const fetchDesc = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.json);
  }
};

fetchDesc();

const displayDesc = async () => {
  const data = await fetchDesc();

  const cartona = `<div class="col-md-4">
            <img src="${data.meals[0].strMealThumb}" alt="${
    data.meals[0].strMeal
  }" class="w-100 rounded-3"/>
          </div>
          <div class="col-md-7">
            <h2>Instructions</h2>
            <p class="mb-2">
              ${data.meals[0].strInstructions}
            </p>
            <h3>Area : ${data.meals[0].strArea}</h3>
            <h3>Category : ${data.meals[0].strCategory}</h3>
            <h3>Recipes : ${data.meals[0].strMeal}</h3>
            <div class="recipe d-flex flex-wrap gy-3">
              ${Object.entries(data.meals[0])
                .map(([x, y]) =>
                  y && x.startsWith("strIngredient")
                    ? `<span class="badge m-1 px-3 py-2 bg-primary d-flex justify-content-center align-items-center fs-6 fw-normal">${y}</span>`
                    : ""
                )
                .join("")}
            </div>
            <h3 class="mt-2">Tags :</h3>
            <span class="btn btn-danger mb-3">${
              data.meals[0].strCategory
            }</span>
            <div class="buttons">
              <a href="${
                data.meals[0].strSource
              }" class="btn btn-success">Source</a>
              <a href="${
                data.meals[0].strYoutube
              }" class="btn btn-danger">Youtube</a>
            </div>
          </div>`;

  descCartona.innerHTML = cartona;
};

displayDesc();
