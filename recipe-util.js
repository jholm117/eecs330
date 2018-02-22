String.prototype.insert = function(insertAtIndex, stringToInsert) {
	return this.slice(0,insertAtIndex) + stringToInsert + this.slice(insertAtIndex,this.length)
}

function buildRecipe(recipeInfo) {
        const template = document.getElementById("recipeLiTemplate").cloneNode(true)
        template.setAttribute("id",recipeInfo.id)
        template.getElementsByClassName("recipe-image")[0].setAttribute("src",recipeInfo.imgSrc)
        template.getElementsByClassName("cook-time")[0].getElementsByTagName("span")[0].innerHTML = recipeInfo.cookTime
        template.getElementsByClassName("card-title")[0].innerHTML=recipeInfo.name
        template.getElementsByClassName("calorie-count")[0].innerHTML=recipeInfo.calories

	const icons = Array.from(template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("img"))
	icons.forEach(icon => {
		onclickString=icon.getAttribute("onclick")
		onclickString=onclickString.insert(onclickString.indexOf(")"),"'"+recipeInfo.id+"'")
		icon.setAttribute("onclick",onclickString)
	})

        template.style.display=""
        return template
}

function addToShoppingList(recipeId) {
        addToList("recipesInList",recipeId)
}

function removeFromShoppingList(recipeId){
        removeFromList("recipesInList",recipeId)	
}

function addToSaved(recipeId) {
	addToList("recipesInSaved",recipeId)
}

function removeFromSaved(recipeId) {
	removeFromList("recipesInSaved",recipeId)
}

function addToList(listKey,recipeId) {
	const list = JSON.parse(localStorage.getItem(listKey))
	list.push(recipeId)
	localStorage.setItem(listKey, JSON.stringify(list))
}

function removeFromList(listKey,recipeId) {
	document.getElementById(recipeId).outerHTML = ""

	const list = JSON.parse(localStorage.getItem(listKey))
	const recipeIdxInList = list.indexOf(recipeId)
	if (recipeIdxInList > -1){
		list.splice(recipeIdxInList,1)
	}
	localStorage.setItem(listKey, JSON.stringify(list))
}
