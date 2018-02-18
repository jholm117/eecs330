const recipes = JSON.parse(localStorage.getItem("recipes"))
const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))

recipesInList.forEach(recipeID => {
	const recipeData=recipes[recipeID]
	const recipeLi = buildRecipe(recipeData,false)
	document.getElementById("shopping-list-recipes").appendChild(recipeLi)
})

function removeFromShoppingList(recipeId){
	document.getElementById(recipeId).outerHTML = ""

	const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))
        idx = recipesInList.indexOf(recipeId)
	if (idx > -1){
		recipesInList.splice(idx, 1)
	}
        localStorage.setItem("recipesInList", JSON.stringify(recipesInList))
}
