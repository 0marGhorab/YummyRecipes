const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const categoryMeals = document.getElementById("categories-meals");

const fetchCategories = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.json);
  }
};

const displayCategories = async () => {
  const data = await fetchCategories();
  console.log(data);
  categoriesCartona = "";
  for (let i = 0; i < data.categories.length; i++) {
    categoriesCartona += `<a class="col-lg-3 col-md-6" href="/filter.html?c=${data.categories[i].strCategory}">
            <div class="bullet position-relative rounded-4">
              <img src="${data.categories[i].strCategoryThumb}" alt="${data.categories[i].strCategory}" class="w-100" />
              <div class="slider">
                <div class="slider-text p-3 justify-content-center flex-wrap">
                  <h3>${data.categories[i].strCategory}</h3>
                  <p class="fs-6">
                    ${data.categories[i].strCategoryDescription}
                  </p>
                </div>
              </div>
            </div>
          </a>`;
  }
  categoryMeals.innerHTML = categoriesCartona;
};

displayCategories();
