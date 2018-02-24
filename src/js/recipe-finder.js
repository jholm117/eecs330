import recipes from './recipes.js'
import { buildRecipe, addToShoppingList, addToSaved } from './recipe-util.js'

const buttons = {
	top: {
		icon: "favorite",
		onClick: addToSaved,
	},
	bottom: {
		icon: "add_shopping_cart",
		onClick: addToShoppingList,
	},
}

const recipeList = document.getElementById("recipe-ul")

for (let recipeId in recipes) {
	const recipeLi=buildRecipe(recipes[recipeId], buttons);
	recipeList.appendChild(recipeLi)
}

if (localStorage.getItem("recipesInList") == null){
	localStorage.setItem("recipesInList", "[]")
}

if (localStorage.getItem("recipesInSaved") == null) {
	localStorage.setItem("recipesInSaved", "[]")
}


function filterSelection(selector) {
	const recipeItems = Array.from(document.getElementById("recipe-ul").getElementsByTagName("li"))
	if (selector == "All") selector = ""
	recipeItems.forEach(item => {    
		const tags = recipes[item.id].tags
		item.style.display = tags.indexOf(selector) > -1 ? "" : "none" 
	})
}

const addHandlersToFilters = () => {
	const filters = Array.from(document.getElementsByClassName('dropdown-item'))
	filters.forEach(filter =>{
		filter.addEventListener('click', filterSelection.bind(null, filter.innerHTML))
	})
	
}


addHandlersToFilters()
filterSelection("All")