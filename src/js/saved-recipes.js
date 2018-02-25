import recipes from './recipes.js'
import { buildRecipe, addToShoppingList, removeFromSaved, addSearchHandler} from './recipe-util.js'

const recipesInSaved = JSON.parse(localStorage.getItem("recipesInSaved"))

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

recipesInSaved.forEach(recipeID => {
        const recipeData= recipes[recipeID]
        const recipeLi = buildRecipe(recipeData, buttons)
        document.getElementById("saved-recipes").appendChild(recipeLi)
})

addSearchHandler('saved-recipes')