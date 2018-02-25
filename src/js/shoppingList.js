import { removeFromShoppingList, addToSaved, addSearchHandler, populateList } from './recipe-util.js'
import { getCurrentUser } from './login-utils.js'

const user = getCurrentUser()
const shoppingListId = 'shopping-list-recipes'

const buttons = {
	top: {
		icon: "delete",
		onClick: removeFromShoppingList,
	},
	bottom: {
		icon: "favorite",
		onClick: addToSaved,
	},
}

populateList(user.listRecipes, buttons, shoppingListId)
addSearchHandler(shoppingListId)