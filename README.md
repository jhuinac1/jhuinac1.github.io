# jhuinac1.github.io

# FOOD RECIPE APP

## Description

    This application helps users find the recipe by typing the name of the meal in the search bar. 
    multiple options might appear. once the meal has been selected, 
    a new window will pop up that shows the category for the food, area, ingredients, 
    a short description with steps to prepare the meal, and at the end (if link available) 
    a youtube video will show up with steps to create the meal.

## Technology Used

    I used a meal recipe API provided by TheMealDB. This API allowed me to complete, and deliver an application that renders enough information in order for the user to feel confident to prepare meals. The API provides a free apikey which allows its user to get limited items, up to 100 recipes. The full access & extra features to all recipes can be used after signing up as a Patreon supporter.

### Other technologies used to complete the application:

    (https://css-tricks.com) got a refresh of memory for positioning and more
    (https://w3schools.com) helpful to get more information on css and HTML
    (https://stackoverflow.com/) I used this to clarify some doubts I had about my code.

---

## Approach Taken

    I started by reading the documentation they provided in order for me to understand and get familiar with the url.
    I noticed that they had different ways to find a meal. However I decided to pick 3 different urls. one that would give me all the categories and display a small information about each of them. the second url I used to evaluate the user input and render multiple meal options related to it. Since this url did not provide me with the recipe directly, I instead store the unique meal ID once the user selects the meal they want its recipe shown. hence the third URL that I can use to search the specific meal recipe with the ID stored and my application able to display the information needed.
    The API also provides a youtube link for each recipe, which I manipulated in order to embed on my website instead of transferring the user to the youtube website.

## Link to Live site

    https://jhuinac1.github.io/Food-recipe-app/

### Unsolved problems

    So far the only thing I can think of is with my input and search button.
    I noticed that my search button on hover did not affect the inputs transiton. since the input is placed above the button. therefore I was not able to find a way to target the input in order for my transition to fully function.

### Things that can/need improvement

    -After looking at my website multiple times, I realized that I could change some of the background to make it easier on the eyes. Meaning I think there are many things and colors going on at the same time, and the user might want something less complex and more user friendly.

    -I wish I had more time to implement a search bar for meals by ingredient, region, or category.

    -Also I wish I had full access to the meal recipe API, I would be able to fully test my application, rather 100 recipe meals
