// Function that runs when the form is submitted
function generateRecipe(event) {
  // Stop the form from refreshing the page
  event.preventDefault();

  //   Create a typewriter effect to display the recipe text
  new Typewriter("#recipe", {
    strings: ["Crack the egg into a bowl and whisk it lightly."], // Text to display
    autoStart: true, // Start typing immediately
    delay: 10, // Speed of typing
    cursor: "", // No blinking cursor
  });
}

// Get the form element by getting its ID
let recipeFormElement = document.querySelector("#recipe-generator-form");
// Run the generateRecipe function when the form is submitted
recipeFormElement.addEventListener("submit", generateRecipe);
