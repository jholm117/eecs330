filterSelection("all")

function filterSelection(selector) {
  const recipeItems = Array.from(document.getElementById("recipe-ul").getElementsByTagName("li"))
  if (selector == "all") selector = ""
  recipeItems.forEach(item => {    
    	tags = recipes[item.id].tags
	item.style.display = tags.indexOf(selector) > -1 ? "block" : "none" 
	})
}
