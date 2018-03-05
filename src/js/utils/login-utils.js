const createUser = ({ name, password = 'password', imageSource = '../../images/blankProfile.png' }) =>{
	const userObject = JSON.stringify({
		name,
		password,
		imageSource,
		favoriteRecipes: [],
		listRecipes: [],
    })
    
	localStorage.setItem(name, userObject)
}

const setCurrentUser = (name) => {
	sessionStorage.setItem('currentUser', name)
}

export const getCurrentUser = () =>{
	if(!sessionStorage.hasOwnProperty('currentUser')){
		// login()
	}
    const name = sessionStorage.getItem('currentUser')
    
    const jsonUser = localStorage.getItem(name)
    return JSON.parse(jsonUser)
}

export const updateUser = (user) => {
    localStorage.setItem(user.name, JSON.stringify(user))
}

export const loginFormHandler = () => {
	const username = document.getElementById('usernameInput').value
	const password = document.getElementById('passwordInput').value
	if(userExists(username) && isValidPassword(username,password)){
		setCurrentUser(username)
		navigateToRecipeFinder()
	} else {
		handleFailedLogin()
	}
}

function navigateToRecipeFinder(){
	window.location = 'recipe-finder.html'
}

function userExists(name){
	return localStorage.hasOwnProperty(name)
}

function isValidPassword(name, password){
	const jsonUser = localStorage.getItem(name)
	const user = JSON.parse(jsonUser)
	return user.password === password
}

export function CreateAllUsers(usernames){
    usernames.forEach(user=>{
        if(!userExists(user.name)){
            createUser(user)
        }
    })
}

function handleFailedLogin(){
	alert("Invalid Credentials")
	document.getElementById('usernameInput').value = ""
	document.getElementById('passwordInput').value = ""
}

export function redirectIfLoggedOut(){
	if(!sessionStorage.hasOwnProperty('currentUser') || sessionStorage.getItem('currentUser') === null){
		window.location = 'index.html'
	}
}

export function logOut(){
	sessionStorage.setItem('currentUser', null)
}