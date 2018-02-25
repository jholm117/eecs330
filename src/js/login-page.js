import { loginFormHandler, CreateAllUsers } from './login-utils.js' 

document.getElementById('submit').addEventListener('click', loginFormHandler)
const usernames = [
    { name: 'Devon', password: 'hi', imageSource: '../../images/devon-pro-pic.jpg' },
    { name: 'Jeff'},
    { name: 'JoshuaShiXXD420Blazze', imageSource: '../../images/josh.jpg'}
]

CreateAllUsers(usernames)