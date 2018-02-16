function buildRecipe(recipeInfo) {
	const template = document.getElementById("recipeLiTemplate")
	template.setAttribute("id",recipeInfo.id)
	template.getElementsByClassName("recipe-image")[0].setAttribute("src",recipeInfo.imgSrc)
	template.getElementsByClassName("cook-time")[0].getElementsByTagName("span")[0].innerHTML = recipeInfo.cookTime
	template.getElementsByClassName("card-title")[0].innerHTML=recipeInfo.name
	template.getElementsByClassName("calorie-count")[0].innerHTML=recipeInfo.calories
	template.style.display=""
	return template
}
