const recipes = {
	"gingerSoyChicken" : {
		name: "Ginger Soy Chicken",
		id: "gingerSoyChicken",
		imgSrc: "images/chicken.jpg",
		cookTime: "30 min",
		calories: "600 cal"},
	"lasagna" : {
		name: "Lasagna",
		id: "lasagna",
		imgSrc: "images/chicken.jpg",
		cookTime: "3 hr",
		calories: "900 cal"}
}

const recipeList = document.getElementById("recipe-ul")
for (var recipeId in recipes) {
	recipeLi=buildRecipe(recipes[recipeId],true);
	recipeList.appendChild(recipeLi)
}

if (localStorage.getItem("recipes") == null){
	localStorage.setItem("recipes", JSON.stringify(recipes))
}

if (localStorage.getItem("recipesInList") == null){
	const recipesInList = []
	localStorage.setItem("recipesInList", JSON.stringify(recipesInList))
}

function addToShoppingList(recipeId) {
	const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))
	recipesInList.push(recipeId)
	localStorage.setItem("recipesInList", JSON.stringify(recipesInList))
}
