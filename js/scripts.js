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

	var desktopSocialImages = document.querySelectorAll('.social_images');

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
		desktopSocialImages[0].setAttribute('src','images/social/snapchat_black.png');
		desktopSocialImages[1].setAttribute('src','images/social/pinterest_black.png');
		desktopSocialImages[2].setAttribute('src','images/social/linkedin_black.png');
		desktopSocialImages[3].setAttribute('src','images/social/insta_black.png');
		desktopSocialImages[4].setAttribute('src','images/social/twitter_black.png');
		desktopSocialImages[5].setAttribute('src','images/social/fb_black.png');
			desktopSocialImages[5].style.marginRight = "30px";
		desktopSocialImages[6].setAttribute('src','images/social/yt_black.png');

		console.log('homepage');
	
	} else if (window.scrollY >= aboutMe.offsetTop) {
	
		// ABOUT ME HOMEPAGE
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

		// ABOUT ME SOCIAL
		desktopSocialImages[0].setAttribute('src','images/social/snapchat_pink.png');
		desktopSocialImages[1].setAttribute('src','images/social/pinterest_pink.png');
		desktopSocialImages[2].setAttribute('src','images/social/linkedin_pink.png');
		desktopSocialImages[3].setAttribute('src','images/social/insta_pink.png');
		desktopSocialImages[4].setAttribute('src','images/social/twitter_pink.png');
		desktopSocialImages[5].setAttribute('src','images/social/fb_pink.png');
			desktopSocialImages[5].style.marginRight = "34px";
		desktopSocialImages[6].setAttribute('src','images/social/yt_pink.png');

		console.log('about me');
	}
});


//MENU CLICK
// desktopMenuLink[0].addEventListener("click", function(){
// 	var i = window.scrollY;
// 	var scrolldown = setInterval(function(){
// 		window.scrollBy(0,i); 
// 		i++; // 50 + 1 +1 +1+1+1

// 		if (i === aboutMe.offsetTop){
// 			clearInterval(scroll)
// 		}
// 	}, 1000)
// });

// desktopMenuLink[0].addEventListener("click", function(){
// 	function pageScroll() {
//     	window.scrollBy(0,10); // scroll increments
//     	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
// 	}
// 	pageScroll();
// });




































