String.prototype.insert = function(insertAtIndex, stringToInsert) {
	return this.slice(0,insertAtIndex) + stringToInsert + this.slice(insertAtIndex,this.length)
}

export function buildRecipe(recipeInfo, buttons) {
	const template = document.createElement("li")
	template.setAttribute("id",recipeInfo.id)
	template.innerHTML = 
			`<div class="recipe-card border">
			  <img class="recipe-image" src="${recipeInfo.imgSrc}" alt="Card image cap">
			    <div class="card border-0">
			      <div class="card-body">
							<div class="recipe-info">
				  			<h2 class="card-title">${recipeInfo.name}</h2>
								<div class="stats">
									<div class="cook-time">  
										<i class="material-icons">access_time</i>
										<span class="minutes">${recipeInfo.cookTime}</span>
									</div>
								<div class="calorie-count">${recipeInfo.calories}</div>
							</div>
						</div>
						<div class="recipe-buttons">
							<div><i class="material-icons top-icon">${buttons.top.icon}</i></div>
							<div><i class="material-icons">${buttons.bottom.icon}</i></div>
						</div>
			    </div>
			  </div>
			</div>`
	
	const iTags = template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("i")
	iTags[0].addEventListener("click", buttons.top.onClick.bind(null,recipeInfo.id))
	iTags[1].addEventListener("click", buttons.bottom.onClick.bind(null,recipeInfo.id))	
	return template
}



export function addToShoppingList(recipeId) {
	addToList("recipesInList",recipeId)
	alert("Recipe added to your shopping list")
}

export function removeFromShoppingList(recipeId){
	removeFromList("recipesInList",recipeId)	
}

export function addToSaved(recipeId) {
	addToList("recipesInSaved",recipeId)	
	alert("Recipe added to your favorites")
}

export function removeFromSaved(recipeId) {
	removeFromList("recipesInSaved",recipeId)
}

function addToList(listKey,recipeId) {
	const list = JSON.parse(window.localStorage.getItem(listKey))
	if(list.indexOf(recipeId)<0){
		list.push(recipeId)
		localStorage.setItem(listKey, JSON.stringify(list))
	}
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
 function applySearch(listName) {
	const filter = this.value.toUpperCase()
	const list = Array.from(document.getElementById(listName).getElementsByTagName('li'))
	
	list.forEach(listItem => {
		const title = listItem.getElementsByClassName("card-title")[0].innerHTML // this will need to pull something from listItem once recipe list items implemented
		if (title.toUpperCase().indexOf(filter) > -1)
		{
			listItem.style.display = ""
		}
		else
		{
			listItem.style.display = "none"
		}
	})
}

export const addSearchHandler = (listName) =>{
	const searchBox = document.getElementById("search")
	searchBox.addEventListener('keyup', applySearch.bind(searchBox, listName))
}