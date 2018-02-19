const recipes = {
	"gingerSoyChicken" : {
		name: "Ginger Soy Chicken",
		id: "gingerSoyChicken",
		imgSrc: "images/chicken.jpg",
		cookTime: "30 min",
		calories: "600 cal",
		tags: ["","Asian","Cheap"]},
	"garlicRoastedBroccoli" : {
		name: "Garlic Roasted Broccoli",
		id: "garlicRoastedBroccoli",
		imgSrc: "images/garlicRoastedBroccoli.jpg",
		cookTime: "20 min",
		calories: "150 cal",
		tags: ["","Vegetarian"]},
	"squashTaco" : {
		name: "Roasted Butternut Squash Tacos",
		id: "squashTaco",
		imgSrc: "images/squashTaco.jpg",
		cookTime: "50 min",
		calories: "400 cal",
		tags: ["","Mexican","Vegetarian","Cheap"]},
	"shrimpSoup" : {
		name: "Shrimp Tomato Soup",
		id: "shrimpSoup",
		imgSrc: "images/shrimpSoup.jpg",
		cookTime: "50 min",
		calories: "520 cal",
		tags: ["","Fusion"]},
	"porkChop" : {
		name: "Cinnamon Chipotle Pork Chops",
		id: "porkChop",
		imgSrc: "images/porkChop.jpg",
		cookTime: "25 min",
		calories: "800 cal",
		tags: ["","Mexican","Fusion"]}
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
