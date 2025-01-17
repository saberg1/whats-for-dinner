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
favoriteSection.addEventListener('dblclick',deleteFavorite)

//Event handlers
 /* find index of specific click
    splice out at inde
*/

window.addEventListener('load', pageLoad)
function pageLoad(){
}

function deleteFavorite(){
  var deleteMe = meal.favoritedRecipes.indexOf(event.closest)
  console.log(deleteMe)
  // meal.favoritedRecipes.shift()
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

function goHome(event){
  if(event.target.className === 'go-home'){
    toggleDisplay()
  }
}

function display(){
  favoriteCard.innerHTML = `<div>${meal.favoritedRecipes}</div>
  <button class="go-home">Home</button>
  `
}

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
    meal.type = [recipeName.value]
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