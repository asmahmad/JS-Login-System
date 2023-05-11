var usernameTextbox = document.querySelector('#username')
//var myPromise = new Promise((resolve, reject)=>{
//	let i = 1;

//	if(i==1){
//		resolve("hey, i == 1, so we are cool!")

//	}else {
//		reject("Absolute fail. i is not 1, boooo")
//	}
//})
//myPromise.then((message)=>{
//	consloe.log(message)
//}).catch((message)=>{
//	console.log(message)
//})
usernameTextbox.addEventListener('blur', async () => {
	const user = {
		'username': usernameTextbox.value,
	};
	try {
		const responseEntity = await fetch('/users/exists', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
		const data = await responseEntity.json();
		if (data === true) {
			console.log("username already exists")
			usernameTextbox.focus();
			usernameTextbox.select();
			await showErrorAnimation();
			console.log("We're now in the callback function");
			usernameTextbox.style.backgroundColor = 'rgb(255,255,255)';
		}
	} catch (error) {
		console.error(error);
	}
});

async function showErrorAnimation() {
	console.log("We're in the showErrorAnimation function");
	let i = 0;
	while (i < 255) {
		i++;
		usernameTextbox.style.backgroundColor = `rgb(${i}, 0, 0)`;
		await new Promise((resolve) => setTimeout(resolve, 1));
	}
	console.log("Done executing animation code");
}
