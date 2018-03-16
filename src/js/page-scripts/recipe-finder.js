import recipes from '../recipes.js'
import { addToShoppingList, addToSaved, addSearchHandler, populateRecipeFinderList, removeFromSaved, addFavoriteTag, finderButtons } from '../utils/recipe-util.js'
import { redirectIfLoggedOut, getCurrentUser } from '../utils/login-utils.js';
import { addNavToPage } from '../utils/nav-utils.js';

const recipeFinderListId = "recipe-ul"
const favoritesId = "favorites-ul"

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

function markFavorites() {
	const favorites = getCurrentUser().favoriteRecipes
	favorites.forEach(addFavoriteTag)
}

// must be first
redirectIfLoggedOut()

addNavToPage()
populateRecipeFinderList(Object.keys(recipes), recipeFinderListId)
markFavorites()
addHandlersToFilters()
filterSelection("All")
addSearchHandler(recipeFinderListId)
