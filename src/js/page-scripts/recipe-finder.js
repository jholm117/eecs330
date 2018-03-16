import recipes from '../recipes.js'
import { addToShoppingList, addToSaved, addSearchHandler, populateList, removeFromSaved, addFavoriteTag, filterSelection, markFavorites } from '../utils/recipe-util.js'
import { redirectIfLoggedOut, getCurrentUser } from '../utils/login-utils.js';
import { addNavToPage } from '../utils/nav-utils.js';

const recipeFinderListId = "recipe-ul"
const favoritesId = "favorites-ul"
const finderButtons = {
	top: {
		icon: "favorite",
		text: "Favorite",
		onClick: addToSaved,
	},
	bottom: {
		icon: "playlist_add",
		text: "Add to List",
		onClick: addToShoppingList,
	},
}

const favoritesButtons =  {
	top: {
		icon: "clear",
		text: "Unfavorite",
		onClick: (id) => removeFromSaved(id,favoritesId),
	},
	bottom: {
		icon: "playlist_add",
		text: "Add to List",
		onClick: addToShoppingList,
	},
}


const addHandlersToFilters = () => {
	const filters = Array.from(document.getElementsByClassName('filter'))
	filters.forEach(filter =>{
		filter.addEventListener('click', filterSelection.bind(null, recipeFinderListId, filter.innerHTML))
	})
	
}

// must be first
redirectIfLoggedOut()

addNavToPage()
populateList(Object.keys(recipes), finderButtons, recipeFinderListId)
markFavorites()
addHandlersToFilters()
filterSelection(recipeFinderListId,"All")
addSearchHandler(recipeFinderListId)
