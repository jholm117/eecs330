import { redirectIfLoggedOut, getCurrentUser, logOut } from "./login-utils.js";

function updateInfo(){
    const user = getCurrentUser()
    document.getElementById('image').src = user.imageSource
    document.getElementById("profile-name").innerHTML = user.name
}

function addLogOutHandler(){
    document.getElementById('logout').addEventListener('click', logOut)
}

redirectIfLoggedOut()
updateInfo()
addLogOutHandler()
