import recipes from './recipes.js'
import { buildRecipe, addToShoppingList, removeFromSaved } from './recipe-util.js'

const recipesInSaved = JSON.parse(localStorage.getItem("recipesInSaved"))

const buttons =  {
	top: {
		icon: "delete",
		onClick: removeFromSaved,
	},
	bottom: {
		icon: "list",
		onClick: addToShoppingList,
	},
}

recipesInSaved.forEach(recipeID => {
        const recipeData= recipes[recipeID]
        const recipeLi = buildRecipe(recipeData, buttons)
        document.getElementById("saved-recipes").appendChild(recipeLi)
})
