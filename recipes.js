const recipes = {
	"gingerSoyChicken" : {
		name: "Ginger Soy Chicken",
		id: "gingerSoyChicken",
		imgSrc: "images/chicken.jpg",
		cookTime: "30 min",
		calories: "600 cal"}
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
