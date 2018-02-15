filterSelection("all")

function filterSelection(selector) {
  const recipeItems = Array.from(document.getElementsByClassName("recipe-items"))
  if (selector == "all") selector = ""
  recipeItems.forEach(item =>     
    item.style.display = item.className.search(selector) > -1 ? "block" : "none"
  ) 
}