const URL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

const areaCartona = document.getElementById("area-cartona");

const fetchArea = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.json);
  }
};

const displayArea = async () => {
  const data = await fetchArea();
  let cartona = "";
  for (let i = 0; i < data.meals.length; i++) {
    cartona += `<a class="col-md-3" href="/filter.html?a=${data.meals[i].strArea}">
            <i class="fa-solid fa-house-laptop p-3"></i>
            <h2>${data.meals[i].strArea}</h2>
          </a>`;
  }
  areaCartona.innerHTML = cartona;
};

displayArea();
