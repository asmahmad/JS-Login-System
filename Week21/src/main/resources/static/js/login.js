var submitBtn = document.querySelector('#submitBtn')
var users = []
submitBtn.addEventListener('click', () => {
	var username = document.querySelector('#username')
	var password = document.querySelector('#password')

	if (username.value == '' || password.value == '') {
		alert(`Please enter username or password`)
	} else {
		console.log(`Inputs look valid, proceed with form submission`)
		var user = {
			'username': username.value,
			'password': password.value
		}
		users.push(user)
	}
})
username.addEventListener('blur', () => {
	var username = document.querySelector('#username')
	var password = document.querySelector('#password')
	var user = {
		'username' : username.value,
		'password' : password.value
	}
	console.log('we have a blur event')
	fetch(`http://localhost:8080/users/exists`,{
		method: 'Post',
		headers:{
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then((response) => response.json())
		.then((data)=>{
			console.log(data) 
		})
})