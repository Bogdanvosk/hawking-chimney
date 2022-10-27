const burger = document.querySelector('.header__burger')
const headerList = document.querySelector('.header__list')
const headerMenu = document.querySelector('.header__menu')

burger.addEventListener('click', (e) => {
	headerList.classList.toggle('active')
	headerMenu.classList.toggle('active')

	burger.classList.toggle('active')
	document.body.classList.toggle('ovf-hidden')
})