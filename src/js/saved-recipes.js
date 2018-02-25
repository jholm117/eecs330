import { addToShoppingList, removeFromSaved, addSearchHandler, populateList} from './recipe-util.js'
import { getCurrentUser } from './login-utils.js';

const user = getCurrentUser()
const favoriteRecipeListId = 'saved-recipes'
const buttons =  {
	top: {
		icon: "delete",
		text: "Remove",
		onClick: removeFromSaved,
	},
	bottom: {
		icon: "list",
		text: "Add to List",
		onClick: addToShoppingList,
	},
}

populateList(user.favoriteRecipes,buttons, favoriteRecipeListId)
addSearchHandler(favoriteRecipeListId)