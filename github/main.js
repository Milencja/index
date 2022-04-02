const navBar = document.querySelector('.navbar-toggler')
const navBarCollapse = document.querySelector('.navbar-collapse')
const productText = document.querySelector('.nav-link.dropdown-toggle')
const logoBox = document.querySelector('.logo-box')
const prices = document.querySelector('table')
const links = document.querySelectorAll('.nav-item')
const dropdownLinks = document.querySelectorAll('.dropdown-item')
const footerYear = document.querySelector('.footyear')

// wyblurowanie menu jak rozsuwa sie nawigacja
const blurMenu = () => {
	logoBox.classList.toggle('blur-menu')
}
const blurMenu2 = () => {
	logoBox.classList.remove('blur-menu')
}

// chowanie menu po kliknięciu w linki
const hideMenu = () => {
	navBarCollapse.classList.toggle('show')
}

// aktualna data
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBar.addEventListener('click', blurMenu)
links.forEach(link => link.addEventListener('click', hideMenu))
links.forEach(link => link.addEventListener('click', blurMenu2))
dropdownLinks.forEach(link => link.addEventListener('click', hideMenu))
