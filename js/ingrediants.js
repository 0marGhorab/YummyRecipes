const URL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const ingrediantsCartona = document.getElementById("ingrediants-cartona");

const fetchIngrediants = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.json);
  }
};

const displayIngrediants = async () => {
  const data = await fetchIngrediants();
  let cartona = "";
  for (let i = 0; i < 20; i++) {
    cartona += `<a href="/filter.html?i=${data.meals[i].strIngredient}" class="col-md-3">
            <i class="fa-solid fa-bowl-food"></i>
            <h2>${data.meals[i].strIngredient}</h2>
            <p class="ingrediant-desc">
              ${data.meals[i].strDescription}
            </p>
          </a>`;
  }
  ingrediantsCartona.innerHTML = cartona;
};

displayIngrediants();
