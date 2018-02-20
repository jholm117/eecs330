function buildRecipe(recipeInfo, forBrowser) {
        const template = document.getElementById("recipeLiTemplate").cloneNode(true)
        template.setAttribute("id",recipeInfo.id)
        template.getElementsByClassName("recipe-image")[0].setAttribute("src",recipeInfo.imgSrc)
        template.getElementsByClassName("cook-time")[0].getElementsByTagName("span")[0].innerHTML = recipeInfo.cookTime
        template.getElementsByClassName("card-title")[0].innerHTML=recipeInfo.name
        template.getElementsByClassName("calorie-count")[0].innerHTML=recipeInfo.calories
        if (forBrowser){
                template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("img")[1].setAttribute("onclick","addToShoppingList('" + recipeInfo.id + "')")
        }
        else
        {
                template.getElementsByClassName("recipe-buttons")[0].getElementsByTagName("img")[0].setAttribute("onclick","removeFromShoppingList('" + recipeInfo.id + "')")
        }
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


