import { addSearchHandler, populateShoppingList } from '../utils/recipe-util.js'
import { getCurrentUser, redirectIfLoggedOut } from '../utils/login-utils.js'
import { addNavToPage } from '../utils/nav-utils.js';

const user = getCurrentUser()
const shoppingListId = 'shopping-list-recipes'
const recipeFilterId = 'recipe-filter'
const ingredientFilterId = 'ingredient-filter'

function recipeFilterHandler(){
	filterSelection("recipe-card")
}

function ingredientFilterHandler(){
	filterSelection("ingredient-card")
}

function filterSelection(selector) {
	const recipeItems = Array.from(document.getElementById(shoppingListId).getElementsByTagName("li"))
    recipeItems.forEach(item => {    
        item.style.display = item.firstChild.className.indexOf(selector) > -1 ? "block" : "none" 
    })
}

function addFilterHandlers(){
	document.getElementById(recipeFilterId).addEventListener('click', recipeFilterHandler)
	document.getElementById(ingredientFilterId).addEventListener('click', ingredientFilterHandler)
}

redirectIfLoggedOut()

addNavToPage()
populateShoppingList(user.listRecipes, shoppingListId)
addFilterHandlers()
