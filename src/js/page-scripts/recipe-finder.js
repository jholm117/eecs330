import recipes from '../recipes.js'
import { addToShoppingList, addToSaved, addSearchHandler, populateRecipeFinderList, removeFromSaved, addFavoriteTag, finderButtons, filterSelection, markFavorites } from '../utils/recipe-util.js'
import { redirectIfLoggedOut, getCurrentUser } from '../utils/login-utils.js';
import { addNavToPage } from '../utils/nav-utils.js';

const recipeFinderListId = "recipe-ul"
const favoritesId = "favorites-ul"

const addHandlersToFilters = () => {
	const filters = Array.from(document.getElementsByClassName('filter'))
	filters.forEach(filter =>{
		filter.addEventListener('click', filterSelection.bind(null, recipeFinderListId, filter.innerHTML))
	})
	
}

// must be first
redirectIfLoggedOut()

addNavToPage()
populateRecipeFinderList(Object.keys(recipes), recipeFinderListId)
markFavorites()
addHandlersToFilters()
filterSelection(recipeFinderListId,"All")
addSearchHandler(recipeFinderListId)
