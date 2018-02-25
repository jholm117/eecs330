
export const addLoginHandler = () =>{
	const loginHandler = () =>{
		createUser('user1')
		setCurrentUser('user1')
	}
	document.getElementById('login').addEventListener('click', loginHandler)
}

const createUser = (username) =>{
	const userObject = JSON.stringify({
		name: username,
		favoriteRecipes: [],
		listRecipes: [],
    })
    
	localStorage.setItem(username, userObject)
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