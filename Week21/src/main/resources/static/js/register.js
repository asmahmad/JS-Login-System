var usernameTextbox = document.querySelector('#username')

usernameTextbox.addEventListener('blur', () => {
	var user = {
		'username': usernameTextbox.value,
	}
	fetch('/users/exists', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then((responseEntity) => responseEntity.json())
		.then((data) => {
			if (data === true) {
				// this users already exists!
				console.log("username already exists")
				usernameTextbox.focus()
				usernameTextbox.select()
				showErrorAnimation(() => {
					// animation is completed at this point
					console.log("We are now in the callback function")
					usernameTextbox.style.backgroundColor ='rgb(255,255,255)'
				})
			}
		})
})

function showErrorAnimation(callback) {
	console.log("We are in the showErrorAnimation function")
	var i = 0
	setInterval(() => {
		i++
		usernameTextbox.style.backgroundColor = `rgb(${i},0,0)`
		if (i >= 255) {
			clearInterval(animationInterval)
			consloe.log("Done executing animation code")
			callback()
		}
	}, 1)

}