function applySearch(listName) {
	var searchBox, filter, list, listItems, currentItem, i;
	searchBox = document.getElementById("search");
	filter = searchBox.value.toUpperCase();
	list = document.getElementById(listName);
	//list = document.getElementById("recipe-ul");
	listItems = list.getElementsByTagName('li');

	for (i = 0; i < listItems.length; i++)
	{
		currentItem = listItems[i]; // this will need to be updated once we have list items implemented to pull the recipe name
		if (currentItem.innerHTML.toUpperCase().indexOf(filter) > -1)
		{
			listItems[i].style.display = "";
		}
		else
		{
			listItems[i].style.display = "none";
		}
	}
}
