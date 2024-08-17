// Function is display the recipe
function displayRecipe(response) {
  // Log a message to the console indicating that the recipe has been generating
  console.log("Recipe Generated");

  //   Create a typewriter effect to display the recipe text
  new Typewriter("#recipe", {
    strings: response.data.answer, // Using the recipe text from the API response
    autoStart: true, // Start typing immediately
    delay: 10, // Speed of typing
    cursor: "", // No blinking cursor
  });
}

// Function that runs when the form is submitted
function generateRecipe(event) {
  // Stop the form from refreshing the page
  event.preventDefault();

  // Build the API Url
  // Make a call to the API
  // Display the generated recipe

  //   Select the input element where the user is enters their instructions
  let instructionsInput = document.querySelector("#user-instructions");
  //   API key is used to authenicate the request
  let apiKey = "7234f45027aaaebe61adb63cdoated57";
  //   Context for the AI to be able to guide the instruction of the food recipe
  let context =
    "You are a creative food recipe expert and love to write short food recipes. Your mission is to generate a food recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the food recipe. Sign the food recipe with 'Food Recipe Generator AI' inside a <strong> element at the end of the recipe and NOT at the beginning of the recipe.";
  //   Created a prompt using the user's instructions from the input field
  let prompt = `User instructions: Generate a food recipe about ${instructionsInput.value}`;
  //   Constructed the full API Url with the prompt, context and API key
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //   Logged messages to the console to be able to indicate that the recipe instructions has started
  console.log("Generating Recipe... Please Wait...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  //   Send a GET request from to the API and call to the displayRecipe function when a response is received
  axios.get(apiUrl).then(displayRecipe);
}

// Get the form element by getting its ID
let recipeFormElement = document.querySelector("#recipe-generator-form");
// Run the generateRecipe function when the form is submitted
recipeFormElement.addEventListener("submit", generateRecipe);
