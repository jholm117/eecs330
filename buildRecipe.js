function buildRecipe(recipeInfo, forBrowser) {
	const template = document.getElementById("recipeLiTemplate").cloneNode(true)
	template.setAttribute("id",recipeInfo.id)
	template.getElementsByClassName("recipe-image")[0].setAttribute("src",recipeInfo.imgSrc)
	template.getElementsByClassName("cook-time")[0].getElementsByTagName("span")[0].innerHTML = recipeInfo.cookTime
	template.getElementsByClassName("card-title")[0].innerHTML=recipeInfo.name
	template.getElementsByClassName("calorie-count")[0].innerHTML=recipeInfo.calories
	if (forBrowser){
		template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("i")[1].setAttribute("onclick","addToShoppingList('" + recipeInfo.id + "')")
	}
	else
	{
		template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("i")[0].setAttribute("onclick","removeFromShoppingList('" + recipeInfo.id + "')")
	}
	template.style.display=""
	return template
}
