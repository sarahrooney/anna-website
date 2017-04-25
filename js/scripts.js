//HOMEPAGE MOBILE MENU
var mobileMenuIcon = document.querySelector('#mobilemenu');
var mobileMenuExpand = document.querySelector('#mobilemenuexpand');

mobileMenuIcon.addEventListener ("click", function(){
	mobileMenuExpand.style.display = "flex"
});

var exitMobileMenu = document.querySelector('#exitmobilemenu');

exitMobileMenu.addEventListener ("click", function(){
 	mobileMenuExpand.style.display = "none";
});


//CURRENT SECTION LINK IMAGE
/*
	when a menu link is active, or when scrollY's value is corresponds to a section,
	give that link's div a ".currentsection" class
*/
// /*element*/.setAttribute('class', 'currentsection')



//HOMEPAGE LOGOS
var hpNameLogo = document.querySelector('#namegraphic');
var hpFaceLogo = document.querySelector('#facelogo');

hpNameLogo.addEventListener ("mouseover", function(){
	hpNameLogo.setAttribute("src","images/face_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/ar_logo_70px.png");
});

hpNameLogo.addEventListener ("mouseout", function(){
	hpNameLogo.setAttribute("src","images/ar_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/face_logo.png");
});

hpFaceLogo.addEventListener ("mouseover", function(){
	hpNameLogo.setAttribute("src","images/face_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/ar_logo_70px.png");
});

hpFaceLogo.addEventListener ("mouseout", function(){
	hpNameLogo.setAttribute("src","images/ar_logo_170px.png");
	hpFaceLogo.setAttribute("src","images/face_logo.png");
});



// ABOUT SECTION MOBILE MENU
// var abtMobileMenu = document.querySelector('#abt_menuexpand');
// var abtMobileMenuExpanded = document.querySelector('#abt_mobilemenuexpand');

// abtMobileMenu.addEventListener ("click", function(){
// 	abtMobileMenuExpanded.style.display = "flex"
// });



//SCROLLING
// window.scrollY value from homepage to about me = 0 to 814

/*
	if 'about me' button is clicked,
	window.scrollY increments from its current number
	to a value of 814

playbutton.addEventListener("click", function(e){

	var titlescreen = document.getElementById('titlescreen');
	var i = 1;
		var fade = setInterval(function(){
			playbutton.style.opacity = i;
			titlescreen.style.opacity = i;
			i -= 0.05;

			if (i <= 0) {
				clearInterval(fade)
				playbutton.style.display = "none";
				titlescreen.style.display = "none";
			}
		}, 50)
	});
*/

var abtmeButton = document.querySelector('.aboutme')

var currentPosition = window.scrollY





































