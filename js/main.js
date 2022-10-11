const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});
