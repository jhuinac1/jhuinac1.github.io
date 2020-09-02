// const randColor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const o = Math.random();

//   return `rgb(${r},${g},${b},${o})`;
// };

const showMeal = () => {
  event.preventDefault();
  $("#mealsContainer").children().remove();
  const meal = $("#mealInput").val();
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal,
    type: "GET",
  }).then(
    (data) => {
      for (let meal of data.meals) {
        const divCont = $(`<div id=${meal.idMeal}>`);
        const mealName = $("<h3>").text(meal.strMeal);
        const image = $("<img>").attr("src", meal.strMealThumb);
        divCont.append(image, mealName);
        divCont.on("click", getRecipe);

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
    for (let category of data.categories) {
      if (category.strCategory === "Miscellaneous") {
        continue;
      }
      const div = $("<div>").addClass("meals");
      const categoryName = $("<h3>").text(category.strCategory);
      const image = $("<img>")
        .attr("src", category.strCategoryThumb)
        .addClass("show-p");
      const description = $("<p>").text(category.strCategoryDescription);
      description.addClass("hide-paragraph");
      div.append(categoryName, image, description);
      $("#description-container").append(div);
    }
  },
  (error) => {
    console.log(error);
  }
);

const getRecipe = () => {
  const div = $(event.currentTarget);
  const id = div.attr("id");
  const name = div.children().eq(1).text();
  console.log(name);
  console.log(id);
  const mealList = div.parent().children().hide();
  console.log(mealList);
  div.show();
  //   $("#modal").css("display", "block");
  $("#modal").show();
  $("#back").on("click", () => {
    //   add a funtion to hide the modal and put back the all the items...
    mealList.show();
    $("#modal").hide();
    $("#video-instructions").attr("src", "");
  });
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id,
    type: "GET",
  }).then(
    (data) => {
      console.log(data);
      //   $("#meal-name").text(name);
      $("#category").text("Category: " + data.meals[0].strCategory);
      $("#region").text(data.meals[0].strArea);

      //   adding the ingredients and the amount needed
      let i = 1;
      console.log(data.meals[0]["strIngredient" + i]);
      while (data.meals[0]["strIngredient" + i] !== "") {
        const li = $('<li class="ingredient">');
        li.text(
          `${data.meals[0]["strMeasure" + i]}  ${
            data.meals[0]["strIngredient" + i]
          }`
        );
        $("#ingredients").append(li);
        i++;
      }
      $("#instructions").text(data.meals[0].strInstructions);
      //   addding a youtube link... concatinating to a new format in order to run in my website
      if (data.meals[0].strYoutube) {
        const youtube = "https://www.youtube.com/embed/";
        const link = data.meals[0].strYoutube;
        // console.log(link);
        const endLink = link.slice(link.indexOf("=") + 1, link.length);
        console.log(endLink);
        $("#video-instructions").attr("src", youtube + endLink);
      }
    },
    (error) => {
      console.log(error);
    }
  );
  return false;
};

$("#lookMeal").on("click", showMeal);
