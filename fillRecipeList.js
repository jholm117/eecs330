const recipes = JSON.parse(localStorage.getItem("recipes"))
const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))

recipesInList.forEach(recipeID => {
	const recipeData=recipes[recipeID]
	const recipeLi = buildRecipe(recipeData)
	document.getElementById("shopping-list-recipes").appendChild(recipeLi)
})
