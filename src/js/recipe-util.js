import { getCurrentUser, updateUser } from './login-utils.js'
import recipes from './recipes.js'

const listRecipesKey = "listRecipes"
const favoriteRecipesKey = "favoriteRecipes"

function buildRecipe(recipeInfo, buttons) {
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
						<div class="btn-group-vertical recipe-buttons">
							<button class="btn btn-outline-secondary top-button border-0"><i class="material-icons">${buttons.top.icon}</i><span>${buttons.top.text}</span></button>
							<button class="btn btn-outline-secondary border-0"><i class="material-icons">${buttons.bottom.icon}</i><span>${buttons.bottom.text}</span></button>
						</div>
			    </div>
			  </div>
			</div>`
	
	const recipeButtons = template.getElementsByClassName("btn")
	recipeButtons[0].addEventListener("click", buttons.top.onClick.bind(null,recipeInfo.id))
	recipeButtons[1].addEventListener("click", buttons.bottom.onClick.bind(null,recipeInfo.id))	
	return template
}

export const populateList = (idList, buttons, listId) => {
	idList.forEach(id =>{
		const recipeNode = buildRecipe(recipes[id], buttons)
		document.getElementById(listId).appendChild(recipeNode)
	})
}

export function addToShoppingList(recipeId) {
	addToList(listRecipesKey,recipeId)
	alert("Recipe added to your shopping list")
}

export function removeFromShoppingList(recipeId){
	removeFromList(listRecipesKey,recipeId)	
}

export function addToSaved(recipeId) {
	addToList(favoriteRecipesKey,recipeId)	
	alert("Recipe added to your favorites")
}

export function removeFromSaved(recipeId) {
	removeFromList(favoriteRecipesKey,recipeId)
}

function addToList(listKey,recipeId) {
	const user = getCurrentUser()
	const list = user[listKey]
	if(list.indexOf(recipeId)<0){
		list.push(recipeId)
		updateUser(user)
	}
}

function removeFromList(listKey,recipeId) {
	document.getElementById(recipeId).outerHTML = ""
	const user = getCurrentUser()
	user[listKey] = user[listKey].filter(id => id !== recipeId)
	updateUser(user)
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