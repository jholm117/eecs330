function applySearch(listName) {
	const searchBox = document.getElementById("search")
	const filter = searchBox.value.toUpperCase()
	const list = Array.from(document.getElementById(listName).getElementsByTagName('li'))
	
	list.forEach(listItem => {
		const titleElement = listItem // this will need to pull something from listItem once recipe list items implemented
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
