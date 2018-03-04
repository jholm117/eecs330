import { removeFromShoppingList, addToSaved, addSearchHandler, populateList } from './recipe-util.js'
import { getCurrentUser, redirectIfLoggedOut } from './login-utils.js'

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
populateList(user.listRecipes, buttons, shoppingListId)
addSearchHandler(shoppingListId)