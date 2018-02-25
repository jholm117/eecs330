import { removeFromShoppingList, addToSaved, addSearchHandler, populateList } from './recipe-util.js'
import { getCurrentUser, redirectIfLoggedOut } from './login-utils.js'

const user = getCurrentUser()
const shoppingListId = 'shopping-list-recipes'

const buttons = {
	top: {
		icon: "delete",
		text: "Remove",
		onClick: removeFromShoppingList,
	},
	bottom: {
		icon: "favorite",
		text: "Add to Favorites",
		onClick: addToSaved,
	},
}
redirectIfLoggedOut()
populateList(user.listRecipes, buttons, shoppingListId)
addSearchHandler(shoppingListId)