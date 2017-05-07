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

//HOMEPAGE LOGOS SWITCH
function homepageLogosSwitch() {
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




var homepage = document.querySelector('#homepage');
var aboutMe = document.querySelector('#aboutme');
var myWork = document.querySelector('#mywork');
var myWorkMenuAppend = document.querySelector('#mywork_append');
var myWorkMenuAppendSpan = document.querySelectorAll('#mywork_append > span');
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
		desktopSocialImages[6].setAttribute('src','images/social/yt_black.png');
	
	} else if(window.scrollY >= aboutMe.offsetTop && window.scrollY < myWork.offsetTop) {
	
		// ABOUT ME MENU
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

		desktopMenuLink[1].setAttribute('class','');
		desktopMenuLink[1].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
		desktopMenuLink[1].addEventListener("mouseout", function(){
			for (var i = 1; i < desktopMenuLink.length; i++) {
				desktopMenuLink[1].style.color = "#E8DBD2";
				desktopMenuLink[1].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
			}
		});

		upperLeftLogo.setAttribute('src','images/ar_logo_70px.png');

		// ABOUT ME SOCIAL
		desktopSocialImages[0].setAttribute('src','images/social/snapchat_pink.png');
		desktopSocialImages[1].setAttribute('src','images/social/pinterest_pink.png');
		desktopSocialImages[2].setAttribute('src','images/social/linkedin_pink.png');
		desktopSocialImages[3].setAttribute('src','images/social/insta_pink.png');
		desktopSocialImages[4].setAttribute('src','images/social/twitter_pink.png');
		desktopSocialImages[5].setAttribute('src','images/social/fb_pink.png');
		desktopSocialImages[6].setAttribute('src','images/social/yt_pink.png');

		myWorkMenuAppend.style.opacity = "0";
		for (var i = 0; i < myWorkMenuAppendSpan.length; i++) {
			myWorkMenuAppendSpan[i].style.marginTop = "-30px";
		};

	} else if(window.scrollY >= myWork.offsetTop){

		// MY WORK MENU
		var myWorkMenuColor = "#E8DBD2";
		desktopMenuSection.style.backgroundColor = myWorkMenuColor;

		for (var i = 0; i < desktopMenuLink.length; i++) {
			desktopMenuLink[i].style.color = "#E8DBD2";
		};

		desktopMenuLink[0].setAttribute('class','');
		desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
		desktopMenuLink[0].addEventListener("mouseout", function(){
			desktopMenuLink[0].style.color = '#E8DBD2';
			desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
		});
		desktopMenuLink[1].setAttribute('class','currentsection');
		desktopMenuLink[1].style.color = "#F05559";
		desktopMenuLink[1].style.textShadow = "none";
		desktopMenuLink[1].addEventListener("mouseout", function(){
			desktopMenuLink[1].style.color = '#F05559';
			desktopMenuLink[1].style.textShadow = "none";
		});

		// MY WORK EXTRA MENU EXPAND
		myWorkMenuAppend.style.opacity = "1";
		for (var i = 0; i < myWorkMenuAppendSpan.length; i++) {
			myWorkMenuAppendSpan[i].style.marginTop = "0px";
		};

		// MY WORK PHOTO/TEXT SCROLL
		var myWorkPhoto = document.querySelector('#mywork_photo');
		var workContainer = document.querySelector('#work_container');
		var workContainerChildren = document.querySelectorAll('#work_container > section');
		var agency = document.querySelector('#agency');
		var influencer = document.querySelector('#influencer');

		myWorkMenuAppendSpan[0].addEventListener("click", function(){
			myWork.style.backgroundColor = "#E8DBD2"
			desktopMenuSection.style.backgroundColor = "#E8DBD2"
				desktopMenuLink[0].style.color = "#E8DBD2"; //link color
				desktopMenuLink[2].style.color = "#E8DBD2";
			myWorkPhoto.style.backgroundPosition = "0% 55%"
			agency.style.marginLeft = "0px"
			upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

			// planet easter egg
			planetIcon.style.marginLeft = "85%";

			//book easter egg disappear
			bookIcon.style.marginLeft = "150%";
			bookPopup.style.opacity = "0";
		});

		myWorkMenuAppendSpan[1].addEventListener("click", function(){
			myWork.style.backgroundColor = "#2230A4"
			desktopMenuSection.style.backgroundColor = "#2230A4"
				desktopMenuLink[0].style.color = "#2230A4"; //link color
				desktopMenuLink[0].addEventListener("mouseout", function(){
					desktopMenuLink[0].style.color = '#2230A4';
				});
				desktopMenuLink[2].style.color = "#2230A4";
				desktopMenuLink[2].addEventListener("mouseout", function(){
					desktopMenuLink[2].style.color = '#2230A4';
				});
			myWorkPhoto.style.backgroundPosition = "50% 55%";
			agency.style.marginLeft = "-74%";
			upperLeftLogo.setAttribute('src','images/ar_logo_70px_white.png'); //white logo

			//planet easter egg disappear
			planetIcon.style.marginLeft = "-30%";
			planetPopup.style.opacity = "0";

			//book easter egg appear
			bookIcon.style.marginLeft = "70%";
		});

		myWorkMenuAppendSpan[2].addEventListener("click", function(){
			myWork.style.backgroundColor = "#E8DBD2"
			desktopMenuSection.style.backgroundColor = "#E8DBD2"
				desktopMenuLink[0].style.color = "#E8DBD2"; //link color
				desktopMenuLink[2].style.color = "#E8DBD2";
			myWorkPhoto.style.backgroundPosition = "100% 55%"
			agency.style.marginLeft = "-100%";
			upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

			//planet easter egg disappear
			planetIcon.style.marginLeft = "-30%";
			planetPopup.style.opacity = "0";
			//book easter egg disappear
			bookIcon.style.marginLeft = "150%";
			bookPopup.style.opacity = "0";
		});
	}
});



//MENU CLICK AUTO SCROLL
desktopMenuLink[0].addEventListener("click", function(){ 
	if (window.scrollY < aboutMe.offsetTop){
		var i = window.scrollY;
		var scrolldown = setInterval(function(){
			window.scrollBy(0,i);
			i++;

			if (window.scrollY >= aboutMe.offsetTop){
				clearInterval(scrolldown);
			}
		}, 20)
	}

	else if (window.scrollY === aboutMe.offsetTop){
	 	window.scrollBy(0,aboutMe.offsetTop);
	}
		
	/* else if (window.scrollY > myWork.offsetTop){
		var i = window.scrollY;
		var scrollup = setInterval(function(){
			window.scrollBy(0,i);
			i--;

			if (window.scrollY <= aboutMe.offsetTop){
				clearInterval(scrollup);
			}
		}, 20)
	} */
});


// FLOWER EASTER EGG
var flowerIcon = document.querySelector('#flowericon');
var flowerPopup = document.querySelector('#flower_popup');
	flowerIcon.addEventListener("click",function(){
		flowerPopup.style.opacity = i
		var i = 0
		if(i == 0){
			flowerPopup.style.opacity = "1";
			i = 1;
		} 
		else if(i == 1){
		 	flowerPopup.style.opacity = "0";
		 	i = 0;
		}
	});
	flowerPopup.addEventListener("click",function(){
		flowerPopup.style.opacity = i
		var i = 1
		if(i == 1){
			flowerPopup.style.opacity = "0";
		}
	});

// CAMERA EASTER EGG
var cameraIcon = document.querySelector('#camera');
var cameraPopup = document.querySelector('#camera_popup');
	cameraIcon.addEventListener("click",function(){
		cameraPopup.style.opacity = i
		var i = 0
		if(i == 0){
			cameraPopup.style.opacity = "1";
			i = 1;
		} 
		else if(i == 1){
		 	cameraPopup.style.opacity = "0";
		 	i = 0;
		}
	});
	cameraPopup.addEventListener("click",function(){
		cameraPopup.style.opacity = i
		var i = 1
		if(i == 1){
			cameraPopup.style.opacity = "0";
		}
	});

// PLANET EASTER EGG
var planetIcon = document.querySelector('#planet');
var planetPopup = document.querySelector('#planet_popup');
	planetIcon.addEventListener("click",function(){
		planetPopup.style.opacity = i
		var i = 0
		if(i == 0){
			planetPopup.style.opacity = "1";
			i = 1;
		} 
		else if(i == 1){
		 	planetPopup.style.opacity = "0";
		 	i = 0;
		}
	});
	planetPopup.addEventListener("click",function(){
		planetPopup.style.opacity = i
		var i = 1
		if(i == 1){
			planetPopup.style.opacity = "0";
		}
	});

// BOOK EASTER EGG
var bookIcon = document.querySelector('#book');
var bookPopup = document.querySelector('#book_popup');
	bookIcon.addEventListener("mouseover",function(){
		console.log('book');
	})
	bookIcon.addEventListener("click",function(){
		bookPopup.style.opacity = i
		var i = 0
		if(i == 0){
			bookPopup.style.opacity = "1";
			i = 1;
		} 
		else if(i == 1){
		 	bookPopup.style.opacity = "0";
		 	i = 0;
		}
	});
	bookPopup.addEventListener("click",function(){
		bookPopup.style.opacity = i
		var i = 1
		if(i == 1){
			bookPopup.style.opacity = "0";
		}
	});

































