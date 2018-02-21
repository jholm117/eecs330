const recipes = JSON.parse(localStorage.getItem("recipes"))
const recipesInSaved = JSON.parse(localStorage.getItem("recipesInSaved"))

recipesInSaved.forEach(recipeID => {
        const recipeData=recipes[recipeID]
        const recipeLi = buildRecipe(recipeData,"saved")
        document.getElementById("saved-recipes").appendChild(recipeLi)
})
