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

	icons = Array.from(template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("img"))
	icons.forEach(icon => {
		onclickString=icon.getAttribute("onclick")
		onclickString=onclickString.insert(onclickString.indexOf(")"),"'"+recipeInfo.id+"'")
		icon.setAttribute("onclick",onclickString)
	})

        template.style.display=""
        return template
}

function addToShoppingList(recipeId) {
        const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))
        recipesInList.push(recipeId)
        localStorage.setItem("recipesInList", JSON.stringify(recipesInList))
}

function removeFromShoppingList(recipeId){
        document.getElementById(recipeId).outerHTML = ""

        const recipesInList = JSON.parse(localStorage.getItem("recipesInList"))
        idx = recipesInList.indexOf(recipeId)
        if (idx > -1){
                recipesInList.splice(idx, 1)
        }
        localStorage.setItem("recipesInList", JSON.stringify(recipesInList))
}

// should eventually combine these and make saved vs list an arg
function addToSaved(recipeId) {
	const recipesInSaved = JSON.parse(localStorage.getItem("recipesInSaved"))
	recipesInSaved.push(recipeId)
	localStorage.setItem("recipesInSaved", JSON.stringify(recipesInSaved))
}

function removeFromSaved(recipeId) {
	document.getElementById(recipeId).outerHTML = ""

	const recipesInSaved = JSON.parse(localStorage.getItem("recipesInSaved"))
	idx = recipesInSaved.indexOf(recipeId)
	if (idx > -1){
		recipesInSaved.splice(idx,1)
	}
	localStorage.setItem("recipesInSaved", JSON.stringify(recipesInSaved))
}
