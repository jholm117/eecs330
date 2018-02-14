function applySearch(listName) {
	let searchBox, filter, list, currentItem
	searchBox = document.getElementById("search")
	filter = searchBox.value.toUpperCase()
	list = Array.from(document.getElementById(listName).getElementsByTagName('li'))
	
	list.forEach(listItem => {
		titleElement = listItem // this will need to pull something from listItem once recipe list items implemented
		if (titleElement.innerHTML.toUpperCase().indexOf(filter) > -1)
		{
			listItem.style.display = ""
		}
		else
		{
			listItem.style.display = "none"
		}
	})
}
