import recipes from './recipes.js'
import { buildRecipe, addToShoppingList, addToSaved } from './recipe-util.js'

const buttons = {
	top: {
		icon: "favorite",
		onClick: addToSaved,
	},
	bottom: {
		icon: "add_shopping_cart",
		onClick: addToShoppingList,
	},
}

const recipeList = document.getElementById("recipe-ul")

for (let recipeId in recipes) {
	const recipeLi=buildRecipe(recipes[recipeId], buttons);
	recipeList.appendChild(recipeLi)
}

if (localStorage.getItem("recipesInList") == null){
	localStorage.setItem("recipesInList", "[]")
}

if (localStorage.getItem("recipesInSaved") == null) {
	localStorage.setItem("recipesInSaved", "[]")
}
