import { getCurrentUser, logOut } from "./login-utils.js";

function makeNavbar(){
    return `
    <nav class="navbar navbar-expand-xl navbar-dark bg-primary fixed-top">            
        <div class="container">
            <div class="navbar-brand mb-0 h1">BB</div>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav mr-auto">
                    <a class="nav-item nav-link icon-link" href="recipe-finder.html"><i class="material-icons">search</i><span>Find Recipes</span></a>
                    <a class="nav-item nav-link icon-link" href="shopping-list.html"><i class="material-icons">list</i><span>Shopping List</span></a>
                    <a class="nav-item nav-link icon-link" href="nutrition-history.html"><i class="material-icons">trending_up</i><span>Nutrition Tracking</span></a>
                </div>
                <div class="navbar-nav ml-auto">
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="profile-name" data-toggle="dropdown" id="profile-tab" href="#">
                            <img id="profpic" height="30" width="30" alt="prof-pic" class="rounded-circle">
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item text-danger" id="logout" href="/index.html">Log out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `
}

function setActivePage(){
    const path = window.location.pathname
    const page = path.substr(path.lastIndexOf('/')+1)
    const aTag = document.querySelector(`a[href='${page}'`)
    aTag.className += " active"
    aTag.href = "#"
}

function setProfPicAndName(){
    const user = getCurrentUser()
    document.getElementById("profpic").src = user.imageSource
    const tag = document.getElementById("profile-name")
    tag.innerHTML = tag.innerHTML + user.name
}

function addLogoutHandler(){
    document.getElementById("logout").addEventListener("click", logOut)
}

export function addNavToPage(){
    const body = document.getElementsByTagName('body')[0]
    const navbar = makeNavbar()
    body.innerHTML = navbar + body.innerHTML
    setActivePage()
    setProfPicAndName()
    addLogoutHandler()
}