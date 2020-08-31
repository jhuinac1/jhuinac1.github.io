console.log("Hello");
const randColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const o = Math.random();

  return `rgb(${r},${g},${b},${o})`;
};

const showMeal = () => {
  event.preventDefault();
  $("#mealsContainer").children().remove();
  const meal = $("#mealInput").val();
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal,
    type: "GET",
  }).then(
    (data) => {
      console.log(data.meals[0]);
      // for (let element of data.meals) {
      //   console.log(element.strMeal);
      //   console.log(element.strMealThumb);
      // }
      console.log(data);
      for (let meal of data.meals) {
        const divCont = $("<div>");
        const mealName = $("<h3>").text(meal.strMeal);
        const image = $("<img>").attr("src", meal.strMealThumb);
        divCont.append(image, mealName);

        $("#mealsContainer").append(divCont);
      }
    },
    (error) => {
      console.log(error);
    }
  );
  $("form").trigger("reset");
};

$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/categories.php",
  type: "GET",
}).then(
  (data) => {
    console.log(data.categories);

    for (let category of data.categories) {
      if (category.strCategory === "Miscellaneous") {
        continue;
      }
      const div = $("<div>");
      const categoryName = $("<h3>").text(category.strCategory);
      console.log(category.strCategory);
      const image = $("<img>").attr("src", category.strCategoryThumb);
      const description = $("<p>").text(category.strCategoryDescription);
      div.append(categoryName, image, description);
      $("#description-container").append(div);
    }
  },
  (error) => {
    console.log(error);
  }
);

$("#lookMeal").on("click", showMeal);
