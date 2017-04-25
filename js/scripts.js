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


var hpNameLogo = document.querySelector('#namegraphic');
var hpFaceLogo = document.querySelector('#facelogo');

hpNameLogo.addEventListener ("mouseover", function(){
	hpNameLogo.setAttribute("src","images/face_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/ar_logo_70px.png");
})

hpNameLogo.addEventListener ("mouseout", function(){
	hpNameLogo.setAttribute("src","images/ar_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/face_logo.png");
})

hpFaceLogo.addEventListener ("mouseover", function(){
	hpNameLogo.setAttribute("src","images/face_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/ar_logo_70px.png");
})

hpFaceLogo.addEventListener ("mouseout", function(){
	hpNameLogo.setAttribute("src","images/ar_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/face_logo.png");
})



// ABOUT SECTION

var abtMobileMenu = document.querySelector('#abt_menuexpand');
var abtMobileMenuExpanded = document.querySelector('#abt_mobilemenuexpand');

abtMobileMenu.addEventListener ("click", function(){
	abtMobileMenuExpanded.style.display = "flex"
});