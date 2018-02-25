import recipes from './recipes.js'
import { addToShoppingList, addToSaved, addSearchHandler, populateList } from './recipe-util.js'
import { addLoginHandler } from './login-utils.js'

const recipeFinderListId = "recipe-ul"
const buttons = {
	top: {
		icon: "favorite",
		text: "Add to Favorites",
		onClick: addToSaved,
	},
	bottom: {
		icon: "add_shopping_cart",
		text: "Add to List",
		onClick: addToShoppingList,
	},
}

function filterSelection(selector) {
	const recipeItems = Array.from(document.getElementById(recipeFinderListId).getElementsByTagName("li"))
	if (selector == "All") selector = ""
	recipeItems.forEach(item => {    
		const tags = recipes[item.id].tags
		item.style.display = tags.indexOf(selector) > -1 ? "" : "none" 
	})
}

const addHandlersToFilters = () => {
	const filters = Array.from(document.getElementsByClassName('filter'))
	filters.forEach(filter =>{
		filter.addEventListener('click', filterSelection.bind(null, filter.innerHTML))
	})
	
}

populateList(Object.keys(recipes), buttons, recipeFinderListId)
addHandlersToFilters()
filterSelection("All")
addSearchHandler(recipeFinderListId)
addLoginHandler('login-jeff', 'jeff')
addLoginHandler('login-theo','theo')