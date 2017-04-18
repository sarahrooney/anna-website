var mobileMenuExpand = document.querySelector('#mobilemenuexpand');
var expanded = document.querySelector('#expanded');
var sub = document.querySelector('#sub');
var mobileMenu = document.querySelector('#mobilemenu');

mobileMenu.addEventListener ("click", function(){
	mobileMenuExpand.style.display = "flex"
});

var exitMobileMenu = document.querySelector('#exit');

exitMobileMenu.addEventListener ("click", function(){
	mobileMenuExpand.style.display = "none"
});