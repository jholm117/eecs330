function buildRecipe(recipeInfo) {
	const template = document.getElementById("recipeLiTemplate").cloneNode(true)
	template.setAttribute("id",recipeInfo.id)
	template.getElementsByClassName("recipe-image")[0].setAttribute("src",recipeInfo.imgSrc)
	template.getElementsByClassName("cook-time")[0].getElementsByTagName("span")[0].innerHTML = recipeInfo.cookTime
	template.getElementsByClassName("card-title")[0].innerHTML=recipeInfo.name
	template.getElementsByClassName("calorie-count")[0].innerHTML=recipeInfo.calories
	template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("img")[1].setAttribute("onclick","addToShoppingList('" + recipeInfo.id + "')")
	template.style.display=""
	return template
}
