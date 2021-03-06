import { getCurrentUser, updateUser } from './login-utils.js'
import recipes from '../recipes.js'

const listRecipesKey = "listRecipes"
const favoriteRecipesKey = "favoriteRecipes"

const shoppingListId = 'shopping-list-recipes'


let currentSelector = ""

function buildRecipe(recipeInfo, buttons) {
	const template = document.createElement("li")
	template.setAttribute("id",recipeInfo.id)
	template.innerHTML = 
			`<div class="card-shadow my-card recipe-card">
			  <img class="recipe-image" src="${recipeInfo.imgSrc}" alt="Card image cap">
			      <div class="card-body">
						<div class="recipe-info">
				  			<h2 class="card-title">${recipeInfo.name}</h2>
								<div class="stats">
									<div class="stat">  
										<i class="material-icons">access_time</i>
										<span>${recipeInfo.cookTime}</span>
									</div>
								<div class="stat">
									<i class="material-icons">trending_up</i>
									<span>${recipeInfo.calories}</span>
								</div>
							</div>
						</div>
						<div class="btn-group-vertical recipe-buttons">
							<button class="btn btn-outline-${buttons.top.color} top-button border-0"><i class="material-icons">${buttons.top.icon}</i><span>${buttons.top.text}</span></button>
							<button class="btn btn-outline-secondary border-0"><i class="material-icons">${buttons.bottom.icon}</i><span>${buttons.bottom.text}</span></button>
						</div>
			  </div>
			</div>`
	
	const recipeButtons = template.getElementsByClassName("btn")
	recipeButtons[0].addEventListener("click", buttons.top.onClick.bind(null,recipeInfo.id))
	recipeButtons[1].addEventListener("click", buttons.bottom.onClick.bind(null,recipeInfo.id))	
	return template
}

export function swapTopButton(id,button){
	const icon = `<i class="material-icons">${button.icon}</i><span>${button.text}</span>`
	const redButton = document.createElement("button")
	redButton.className = `btn btn-outline-${button.color} top-button border-0`
	redButton.innerHTML = icon
	redButton.addEventListener('click', button.onClick.bind(null, id))

	const card = document.getElementById(id)
	const favoriteButton = card.getElementsByClassName('top-button')[0]
	card.getElementsByClassName('recipe-buttons')[0].insertBefore(redButton,favoriteButton)
	favoriteButton.remove()
}

function buildIngredientCard(ingredientInfo){
	const template = document.createElement("li")
	template.id = ingredientInfo.item.name
	template.innerHTML = `<div class="card-shadow my-card ingredient-card">
								<div class="card-body">
									<div class="recipe-info">
										<h2 class="card-title">${ingredientInfo.item.name}</h2>
										<div class="ingredient-toolbar">
											<span class="input-group plus-minus">
												<div class="input-group-prepend">
													<button class="btn btn-outline-secondary minus-button" type="button">-</button>
												</div>
												<input type="text" class="form-control" value="${ingredientInfo.amount}">
												<div class="input-group-append">
													<button class="btn btn-outline-secondary plus-button" type="button">+</button>
												</div>
											</span>
											<span class="units">${ingredientInfo.item.units}</span>
										</div>
									</div>
									<button class="btn btn-outline-danger ex border-0"><i class="material-icons">clear</i></button>										
								</div>
							</div>`
	const input = template.getElementsByTagName("input")[0]
	const plus = template.getElementsByClassName("plus-button")[0]
	const minus = template.getElementsByClassName("minus-button")[0]
	const ex = template.getElementsByClassName("ex")[0]
	const makeCardInvisible =() =>{
		template.remove()
	}
	ex.addEventListener('click', makeCardInvisible)
	const changeValue = (inputField, amount) => {
		input.value = parseInt(input.value) + amount
		if(input.value <= 0) makeCardInvisible()
	}
	input.addEventListener('change', ()=>{
		if(input.value <= 0) makeCardInvisible()
	})
	plus.addEventListener('click', ()=>changeValue(input,1))
	minus.addEventListener('click', ()=>changeValue(input,-1))
	
	return template
}

export const populateShoppingList = (idList, listId) => {
	populateList(idList, removeFromListButton, listId)
	idList.forEach(id => makeInvisible(id))
	const ingredients = idList.map(id => recipes[id].ingreds.map(buildIngredientCard))
		.reduce((prev, curr) => prev.concat(curr), [])	
	ingredients.forEach(node => document.getElementById(listId).appendChild(node))
}

export const populateRecipeFinderList = (idList, listId) => {
	populateList(idList,addToListButton,listId)
}

export const populateList = (idList, bottomButton, listId) => {
	idList.forEach(id =>{
		const isIdInFavorites = getCurrentUser().favoriteRecipes.indexOf(id) > -1
		const buttons = isIdInFavorites ? { top: unfavoriteButton, bottom : bottomButton } : { top: favoriteButton, bottom : bottomButton }
		const recipeNode = buildRecipe(recipes[id], buttons)
		document.getElementById(listId).appendChild(recipeNode)
	})
}

export function addToShoppingList(recipeId) {
	addToList(listRecipesKey,recipeId)
	alert("Recipe added to your shopping list")
}

export function removeFromShoppingList(recipeId,listId){
	removeFromList(listRecipesKey,recipeId, listId)	
	recipes[recipeId].ingreds.forEach(ingredient => {
		const card = document.getElementById(ingredient.item.name)
		if(card){
			const input  = card.getElementsByTagName('input')[0]
			input.value = parseInt(input.value) - ingredient.amount
			if(input.value <= 0) card.remove()
		}
	})
}

export function addToSaved(recipeId) {
	addFavoriteTag(recipeId)
	addToList(favoriteRecipesKey,recipeId)	
}

export function removeFromSaved(recipeId, favoritesId) {
	removeFavoriteTag(recipeId)
	removeFromList(favoriteRecipesKey,recipeId, favoritesId, true)
}


export function addFavoriteTag(recipeId) {
	recipes[recipeId].tags.push("Favorites")
}

export function removeFavoriteTag(recipeId) {
	recipes[recipeId].tags = recipes[recipeId].tags.filter(word => word != "Favorites")
}

export function markFavorites() {
        const favorites = getCurrentUser().favoriteRecipes
        favorites.forEach(addFavoriteTag)
}

function addToList(listKey,recipeId) {
	const user = getCurrentUser()
	const list = user[listKey]
	if(list.indexOf(recipeId)<0){
		list.push(recipeId)
		updateUser(user)
	}
}

function removeFromList(listKey,recipeId, listId, isFavorite = false) {
	if(!isFavorite)document.querySelector(`#${listId} #${recipeId}`).outerHTML = ""
	const user = getCurrentUser()
	user[listKey] = user[listKey].filter(id => id !== recipeId)
	updateUser(user)
}

export function filterSelection(listId,selector) {
        const recipeItems = Array.from(document.getElementById(listId).getElementsByTagName("li"))
        if (selector == "All") selector = ""
        recipeItems.forEach(item => {
                const tags = recipes[item.id].tags
                item.style.display = tags.indexOf(selector) > -1 ? "" : "none"
        })
}

function applySearch(listName) {
	const filter = this.value.toUpperCase()
	let currentSelector = document.getElementsByClassName("list-group-item list-group-item-action filter active")[0].innerHTML
	if (currentSelector == "All") currentSelector = ""
	let list = Array.from(document.getElementById(listName).getElementsByTagName('li'))
	list = list.filter(listItem => recipes[listItem.id].tags.indexOf(currentSelector) > -1)

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

export function makeInvisible(id){
	document.getElementById(id).style.display = "none"
}

export function makeVisible(id){
	document.getElementById(id).style.display = "block"
}

const favoriteButton = {
	icon: "favorite",
	text: "Favorite",
	color: "secondary",
	onClick: (id) => {
		addToSaved(id)
		swapTopButton(id, unfavoriteButton)
	},
}

const addToListButton = {
	icon: "playlist_add",
	text: "Add to List",
	color: "secondary",
	onClick: (id) => { 
		addToShoppingList(id)
	},
}

const unfavoriteButton = {
	icon: "favorite",
	text: "Unfavorite",
	color: "danger",
	onClick: (id) =>{
		swapTopButton(id, favoriteButton)
		removeFromSaved(id)
		disappearIfFavoriteFilter(id)
	},
}

const removeFromListButton = {
	icon: "clear",
	text: "Remove",
	color: "secondary",
	onClick: (id) => {
		removeFromShoppingList(id,shoppingListId)
	},
}

function disappearIfFavoriteFilter(id){
	const favoritesFilter = document.getElementById('favorites-filter') 
	if(favoritesFilter && favoritesFilter.className.indexOf('active')>-1){
		makeInvisible(id)
	}
}

markFavorites()
