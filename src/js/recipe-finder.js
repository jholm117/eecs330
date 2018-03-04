import recipes from './recipes.js'
import { addToShoppingList, addToSaved, addSearchHandler, populateList, removeFromSaved, makeVisible, makeInvisible, updateList } from './recipe-util.js'
import { redirectIfLoggedOut, getCurrentUser } from './login-utils.js';
import { addNavToPage } from './nav-utils.js';

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


function filterSelection(selector) {
	const recipeItems = Array.from(document.getElementById(recipeFinderListId).getElementsByTagName("li"))
	if (selector == "All") selector = ""
	if (selector == "Favorites"){
		updateList(favoritesId, favoritesButtons)
		makeInvisible(recipeFinderListId)
		makeVisible(favoritesId)
	} else{
		recipeItems.forEach(item => {    
			makeInvisible(favoritesId)
			makeVisible(recipeFinderListId)
			const tags = recipes[item.id].tags
			item.style.display = tags.indexOf(selector) > -1 ? "" : "none" 
		})
	}
}

const addHandlersToFilters = () => {
	const filters = Array.from(document.getElementsByClassName('filter'))
	filters.forEach(filter =>{
		filter.addEventListener('click', filterSelection.bind(null, filter.innerHTML))
	})
	
}
// must be first
redirectIfLoggedOut()

addNavToPage()
populateList(Object.keys(recipes), finderButtons, recipeFinderListId)
populateList(getCurrentUser().favoriteRecipes, favoritesButtons, favoritesId)
addHandlersToFilters()
filterSelection("All")
addSearchHandler(recipeFinderListId)