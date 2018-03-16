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

/*
function filterSelection(selector) {
	const recipeItems = Array.from(document.getElementById(recipeFinderListId).getElementsByTagName("li"))
	if (selector == "All") selector = ""
	recipeItems.forEach(item => {    
		const tags = recipes[item.id].tags
		item.style.display = tags.indexOf(selector) > -1 ? "" : "none" 
	})
}
*/

const addHandlersToFilters = () => {
	const filters = Array.from(document.getElementsByClassName('filter'))
	filters.forEach(filter =>{
		filter.addEventListener('click', filterSelection.bind(null, recipeFinderListId, filter.innerHTML))
	})
	
}

/*
function markFavorites() {
	const favorites = getCurrentUser().favoriteRecipes
	favorites.forEach(addFavoriteTag)
}
*/

// must be first
redirectIfLoggedOut()

addNavToPage()
populateList(Object.keys(recipes), finderButtons, recipeFinderListId)
markFavorites()
addHandlersToFilters()
filterSelection(recipeFinderListId,"All")
addSearchHandler(recipeFinderListId)
