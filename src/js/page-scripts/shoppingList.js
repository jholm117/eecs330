import { removeFromShoppingList, addToSaved, addSearchHandler, populateList } from '../utils/recipe-util.js'
import { getCurrentUser, redirectIfLoggedOut } from '../utils/login-utils.js'
import { addNavToPage } from '../utils/nav-utils.js';

const user = getCurrentUser()
const shoppingListId = 'shopping-list-recipes'

const buttons = {
	top: {
		icon: "favorite",
		text: "Favorite",
		onClick: addToSaved,
	},
	bottom: {
		icon: "clear",
		text: "Remove",
		onClick: (id) => removeFromShoppingList(id,shoppingListId),
	},
}
redirectIfLoggedOut()

addNavToPage()
populateList(user.listRecipes, buttons, shoppingListId)
addSearchHandler(shoppingListId)