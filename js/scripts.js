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




var upperLeftLogo = document.querySelector('#facelogo');

function homepageLogosSwitch() {
	//HOMEPAGE LOGOS SWITCH
	var hpNameLogo = document.querySelector('#namegraphic');

	hpNameLogo.addEventListener("mouseover", function(){
		hpNameLogo.setAttribute("src","images/face_logo_170px.png");
		upperLeftLogo.setAttribute("src","images/ar_logo_70px.png");
	});

	hpNameLogo.addEventListener("mouseout", function(){
		hpNameLogo.setAttribute("src","images/ar_logo_170px.png");
		upperLeftLogo.setAttribute("src","images/face_logo.png");
	});

	upperLeftLogo.addEventListener("mouseover", function(){
		hpNameLogo.setAttribute("src","images/face_logo_170px.png");
		upperLeftLogo.setAttribute("src","images/ar_logo_70px.png");
	});

	upperLeftLogo.addEventListener("mouseout", function(){
		hpNameLogo.setAttribute("src","images/ar_logo_170px.png");
		upperLeftLogo.setAttribute("src","images/face_logo.png");
	});
}

homepageLogosSwitch();




var aboutMe = document.querySelector('#aboutme');
var homepage = document.querySelector('#homepage');
var desktopMenuSection = document.querySelector('#desktop_menu_section');
var desktopMenuLink = document.querySelectorAll('#menu a');

for (var i = 0; i < desktopMenuLink.length; i++) {
	desktopMenuLink[i].style.color = "#E8DBD2";
};

// MENU HOVER
desktopMenuLink[0].addEventListener("mouseover", function(){
	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[0].style.color = "#F05559";
		desktopMenuLink[0].style.textShadow = "none"
	}
});
desktopMenuLink[0].addEventListener("mouseout", function(){
	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[0].style.color = "#E8DBD2";
		desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
	}
});

desktopMenuLink[1].addEventListener("mouseover", function(){
	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[1].style.color = "#F05559";
		desktopMenuLink[1].style.textShadow = "none"
	}
});
desktopMenuLink[1].addEventListener("mouseout", function(){
	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[1].style.color = "#E8DBD2";
		desktopMenuLink[1].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
	}
});

desktopMenuLink[2].addEventListener("mouseover", function(){
	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[2].style.color = "#F05559";
		desktopMenuLink[2].style.textShadow = "none"
	}
});
desktopMenuLink[2].addEventListener("mouseout", function(){
	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[2].style.color = "#E8DBD2";
		desktopMenuLink[2].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
	}
});

// SCROLLING
window.addEventListener("scroll", function(){
	// console.log(window.scrollY);

	if (window.scrollY >= homepage.offsetTop && window.scrollY < aboutMe.offsetTop) {

		//HOMEPAGE MENU
		desktopMenuSection.style.backgroundColor = "#E8DBD2";

		for (var i = 0; i < desktopMenuLink.length; i++) {
			desktopMenuLink[i].style.color = "#E8DBD2";
		};

		desktopMenuLink[0].setAttribute('class','');
		desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
		desktopMenuLink[0].addEventListener("mouseout", function(){
			for (var i = 0; i < desktopMenuLink.length; i++) {
				desktopMenuLink[0].style.color = "#E8DBD2";
				desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
			}
		});

		upperLeftLogo.setAttribute('src','images/face_logo.png');

		//HOMEPAGE SOCIAL
		//...

		console.log('homepage');
	
	} else if (window.scrollY >= aboutMe.offsetTop) {
	
		desktopMenuSection.style.backgroundColor = "#E8E8E0";

		for (var i = 0; i < desktopMenuLink.length; i++) {
			desktopMenuLink[i].style.color = "#E8E8E0";
		};

		desktopMenuLink[0].setAttribute('class','currentsection');
		desktopMenuLink[0].style.color = "#F05559";
		desktopMenuLink[0].style.textShadow = "none";
		desktopMenuLink[0].addEventListener("mouseout", function(){
			desktopMenuLink[0].style.color = '#F05559';
			desktopMenuLink[0].style.textShadow = "none";
		});

		upperLeftLogo.setAttribute('src','images/ar_logo_70px.png');

		console.log('about me');
	}
});


































