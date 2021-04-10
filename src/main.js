//Query Selectors
var sideRadio = document.querySelector('#side')
var mainRadio = document.querySelector('#mainDish')
var dessertRadio = document.querySelector('#dessert')

var footer = document.querySelector('#foot')

var main = document.querySelector('main')

var recipeType = document.querySelector('#recipeType')
var recipeName = document.querySelector('#recipeName')

var addRecipeButton = document.querySelector('#addRecipe')
var letsCookButton = document.querySelector('#letsCook')
var addNewButton = document.querySelector('#addNew')
var viewFavoritesButton = document.querySelector('#viewFavorites')

var favoriteBtn = document.querySelector('#favorite') //query selector for button added to DOM through displayRecipe()
var rightArticle = document.querySelector('.right') // query selector for parent of display-card

var displayCard = document.querySelector('.display-card') // query selector for display-card

var mainSection = document.querySelector('.main-section')
var favoriteSection = document.querySelector('.favorite-section')

var homeBtn = document.querySelector('#goHome') // FIX HOME BUTTON SWAP
var favoriteCard = document.querySelector('.favorite')
var articleFavorite = document.querySelector('#targetHere')

//Event Listeners
letsCookButton.addEventListener('click', createRecipe);
addRecipeButton.addEventListener('click', displayForm);
addNewButton.addEventListener('click', addRecipe)
displayCard.addEventListener('click', addFavorite)
favoriteCard.addEventListener('click', goHome)
// favoriteSection.addEventListener('click', deleteFavorite)

//Event handlers
window.addEventListener('load', pageLoad)
function pageLoad(){
}

function addFavorite(event){
  // debugger
  if(!meal.favoritedRecipes.includes(recipe)){
    if(event.target.className === 'favoriteBtn') {
      meal.favoritedRecipes.push(recipe)
    }
  }
  if(event.target.className === 'viewFavorites') {
    toggleDisplay()
    display()
  }
}
/*
  find index of specific click (create button to go with each index being printed to DOM to be deletable)
   splice out at index
  find way to append 'Add a Recipe' array
*/


function separateList(){
  var separateIndexes;
  for(var i = 0; i < meal.favoritedRecipes.length;i++){
    separateIndexes = meal.favoritedRecipes[i]
  }
  display(separateIndexes)
}



// onclick="remove(this)"
//if event at click == 
function display(){
  favoriteCard.innerHTML = " ";
  for(var i = 0; i < meal.favoritedRecipes.length;i++){
    favoriteCard.innerHTML += `<div class="removeMe" onclick="remove(this)">
    <span>${meal.favoritedRecipes[i]}</span>
    <button class="deleteRecipe">Delete</button></div>
    `
  }
  favoriteCard.innerHTML += `<button class="go-home">Home</button>`
}
// onclick="remove(this)"
function displayRecipe(recipe){
  event.preventDefault()
  displayCard.innerHTML = `
  <p>You should make:</p>
  <h2>${recipe}</h2>
  <button class="favoriteBtn" id="favorite">Favorite</button>
  <button class="viewFavorites" id="viewFavorites">View Favorites</button> 
  `
}

function addRecipe(){
  event.preventDefault()
  
  if(recipeType.value === 'Side'){
    meal.sides.push(recipeName.value)
  } else if (recipeType.value === 'Main Dish'){
    meal.mains.push(recipeName.value)
  } else if (recipeType.value === 'Dessert'){
    meal.desserts.push(recipeName.value)
  } else {
    meal[recipeType.value] = [];
    meal[recipeType.value].push(recipeName.value)
  }
  displayRecipe(recipeName.value)
}

function createRecipe(){
  if(sideRadio.checked){
    recipe = getRandomElement(meal.sides)
    displayRecipe(recipe)
  } else if(mainRadio.checked){
    recipe = getRandomElement(meal.mains)
    displayRecipe(recipe)
  } else if (dessertRadio.checked){
    recipe = getRandomElement(meal.desserts)
    displayRecipe(recipe)
  }
}
/*
how to target div? then once targeted,,,remove from array with splice?
how to delete now that i have buttons set up? delete whole DIV and remove from 
meals.favoriteRecipes array?
linked through 'delete button' to activate/click the parent div. listener
is only on the parent div. so when delete button is clicked, it takes out whole div.
when delete button clicked, that event.target.className invokes another function
to delelte WHOLE div to remove from DOM. 
then shuld be able to go onto localstorage

*/
function goHome(event){
  if(event.target.className === 'go-home'){
    toggleDisplay()
  }
  if(event.target.className === 'deleteRecipe'){
    //trigger event to target and remove <div> with classname of 'removeMe'
    meal.favoritedRecipes.indexOf(event)
    var index1 = meal.favoritedRecipes.indexOf(event)
    meal.favoritedRecipes.splice(index1, 1)
    console.log(index1);
  }
}

// function deleteFavorite(event){
//   var deleteIndex = meal.favoritedRecipes.indexOf(event.target.closest)
//   console.log('clicked recipe name', deleteIndex)
// }

function displayForm(){
  footer.classList.toggle('hidden')
}

function toggleDisplay(){
  mainSection.classList.toggle('hidden')
  favoriteSection.classList.toggle('hidden')
}

function getRandomElement(array) {
  return array[getRandomIndex(array)]
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function remove(el) {
  var element = el;
  element.remove();
}
// onclick="remove(this)"