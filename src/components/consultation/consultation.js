const alertSuccess = document.querySelector(".consultation__alert--success")
const alertWarning = document.querySelector(".consultation__alert--warning")

const button = document.querySelector(".consultation__form-button")

const inputs = document.querySelectorAll(".consultation__form-input")

const userName = document.querySelector('.consultation__form-input--name')
const phone = document.querySelector('.consultation__form-input--phone')



button.addEventListener('click', (e) => {
	e.preventDefault()
	let isValid = userName.value.trim() !== '' && phone.value.trim() !== ''

	if (isValid) {
		alertSuccess.style.opacity = '1'
		alertSuccess.style.visibility = 'visible'

		console.log(`%cВаше имя: ${userName.value.trim()}`, "font-size: 24px")
		console.log(`%cВаш телефон: ${phone.value.trim()}`, "font-size: 24px")

		userName.value = ''
		phone.value = ''

		setTimeout(() => {
			alertSuccess.style.opacity = '0'
			alertSuccess.style.visibility = 'hidden'
		}, 3000)
	} else {
		alertWarning.style.opacity = '1'
		alertWarning.style.visibility = 'visible'

		setTimeout(() => {
			alertWarning.style.opacity = '0'
			alertWarning.style.visibility = 'hidden'
		}, 3000)
	}

})