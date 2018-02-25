import recipes from './recipes.js'
import { buildRecipe, removeFromShoppingList, addToSaved, addSearchHandler } from './recipe-util.js'

const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))

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
recipesInList.forEach(recipeID => {
	const recipeData=recipes[recipeID]
	const recipeLi = buildRecipe(recipeData, buttons)
	document.getElementById("shopping-list-recipes").appendChild(recipeLi)
})

addSearchHandler('shopping-list-recipes')