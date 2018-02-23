function applySearch(listName) {
	const searchBox = document.getElementById("search")
	const filter = searchBox.value.toUpperCase()
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
