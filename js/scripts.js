//HOMEPAGE MOBILE MENU
var mobileMenuIcon = document.querySelector('#mobilemenu');
var mobileMenuExpand = document.querySelector('#mobilemenuexpand');

mobileMenuIcon.addEventListener ("click", function(){
	mobileMenuExpand.style.opacity = "1";
	mobileMenuExpand.style.marginLeft = "0%"
});
//CLOSE MOBILE MENU
var exitMobileMenu = document.querySelector('#exitmobilemenu');
exitMobileMenu.addEventListener ("click", function(){
 	mobileMenuExpand.style.opacity = "0";
 	mobileMenuExpand.style.marginLeft = "150%"
});
var expandedLinks = document.querySelectorAll('.expanded')
for (var i = 0; i < expandedLinks.length; i++) {
	expandedLinks[i].addEventListener ("click", function(){
 		mobileMenuExpand.style.opacity = "0";
 		mobileMenuExpand.style.marginLeft = "150%"
	});
};
//SUB LINK FUNCTIONALITY: 0-3 of var myWorkMenuAppendSpan
var myWorkMenuAppendSpan = document.querySelectorAll('.myworksub');
		var myWorkPhoto = document.querySelector('#mywork_photo');
		var workContainer = document.querySelector('#work_container');
		var workContainerChildren = document.querySelectorAll('#work_container > section');
		var agency = document.querySelector('#agency');
		var influencer = document.querySelector('#influencer');
myWorkMenuAppendSpan[0].addEventListener("click", function(){
	mobileMenuExpand.style.opacity = "0";
 	mobileMenuExpand.style.marginLeft = "150%"
	myWork.style.backgroundColor = "#E8DBD2"
	desktopMenuSection.style.backgroundColor = "#E8DBD2"
		desktopMenuLink[0].style.color = "#E8DBD2"; //link color
		desktopMenuLink[0].addEventListener("mouseout", function(){
			desktopMenuLink[0].style.color = '#E8DBD2';
		});
		desktopMenuLink[2].style.color = "#E8DBD2";
		desktopMenuLink[2].addEventListener("mouseout", function(){
			desktopMenuLink[2].style.color = '#E8DBD2';
		});
	myWorkPhoto.style.backgroundPosition = "0% 55%"
	agency.style.marginLeft = "0px"
	upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

	//book easter egg disappear
	bookIcon.style.marginLeft = "150%";
	//rainbow easter egg disappear
	rainbowIcon.style.marginLeft = "150%";
	//eye easter egg disappear
	eyeIcon.style.marginLeft = "150%";

	// planet easter egg
	planetIcon.style.marginLeft = "72%";
});
myWorkMenuAppendSpan[1].addEventListener("click", function(){
	mobileMenuExpand.style.opacity = "0";
 	mobileMenuExpand.style.marginLeft = "150%"
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
	agency.style.marginLeft = "-119%";
	upperLeftLogo.setAttribute('src','images/ar_logo_70px_white.png'); //white logo

	//planet easter egg disappear
	planetIcon.style.marginLeft = "-30%";
	//rainbow easter egg disappear
	rainbowIcon.style.marginLeft = "150%";
	//eye easter egg disappear
	eyeIcon.style.marginLeft = "150%";

	//book easter egg appear
	bookIcon.style.marginLeft = "69%";
});
myWorkMenuAppendSpan[2].addEventListener("click", function(){
	mobileMenuExpand.style.opacity = "0";
 	mobileMenuExpand.style.marginLeft = "150%"
	myWork.style.backgroundColor = "#E8DBD2"
	desktopMenuSection.style.backgroundColor = "#E8DBD2"
		desktopMenuLink[0].style.color = "#E8DBD2"; //link color
		desktopMenuLink[0].addEventListener("mouseout", function(){
			desktopMenuLink[0].style.color = '#E8DBD2';
		});
		desktopMenuLink[2].style.color = "#E8DBD2";
		desktopMenuLink[2].addEventListener("mouseout", function(){
			desktopMenuLink[2].style.color = '#E8DBD2';
		});
	myWorkPhoto.style.backgroundPosition = "100% 55%"
	agency.style.marginLeft = "-219%";
	upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

	//planet easter egg disappear
	planetIcon.style.marginLeft = "-30%";
	//book easter egg disappear
	bookIcon.style.marginLeft = "-30%";
	//eye easter egg disappear
	eyeIcon.style.marginLeft = "150%";

	//rainbow easter egg appear
	rainbowIcon.style.marginLeft = "69%"
});

myWorkMenuAppendSpan[3].addEventListener("click", function(){
	mobileMenuExpand.style.opacity = "0";
 	mobileMenuExpand.style.marginLeft = "150%"
	myWork.style.backgroundColor = "#E8E8E0"
	desktopMenuSection.style.backgroundColor = "#E8E8E0"
	desktopMenuLink[0].style.color = "#E8E8E0"; //link color
		desktopMenuLink[0].addEventListener("mouseout", function(){
			desktopMenuLink[0].style.color = '#E8E8E0';
		});
		desktopMenuLink[2].style.color = "#E8E8E0";
		desktopMenuLink[2].addEventListener("mouseout", function(){
			desktopMenuLink[2].style.color = '#E8E8E0';
		});
	agency.style.marginLeft = "-334%";
	upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

	//planet easter egg disappear
	planetIcon.style.marginLeft = "-30%";
	//book easter egg disappear
	bookIcon.style.marginLeft = "-30%";
	//rainbow easter egg disappear
	rainbowIcon.style.marginLeft = "-30%";

	//eye easter egg appear
	// eyeIcon.style.marginLeft = "10%"
});

/* ---------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
----------------------------------------END MOBILE MENU SECTION---------------------------------
------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------*/




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
var hireMe = document.querySelector('#hireme');
var myWorkMenuAppend = document.querySelector('#mywork_append');
var desktopMenuSection = document.querySelector('#desktop_menu_section');
var desktopMenuLink = document.querySelectorAll('#menu a');

for (var i = 0; i < desktopMenuLink.length; i++) {
	desktopMenuLink[i].style.color = "#E8DBD2";
};

function menuMouseOver(){
	this.style.color = "#F05559";
	this.style.textShadow = "none";
}
function menuMouseOut(){
	this.style.color = "#E8DBD2";
	this.style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
}

// MENU HOVER
for (var i = 0; i < desktopMenuLink.length; i++) {
	desktopMenuLink[i].addEventListener("mouseover", menuMouseOver);
	desktopMenuLink[i].addEventListener("mouseout", menuMouseOut);
}



function mouseoutMenu(){
	if (window.scrollY >= homepage.offsetTop && window.scrollY < aboutMe.offsetTop) {

		desktopMenuLink[0].style.color = "#E8DBD2";
		desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";	

		desktopMenuLink[1].style.color = "#E8DBD2";
		desktopMenuLink[1].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";	

		desktopMenuLink[2].style.color = "#E8DBD2";
		desktopMenuLink[2].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";	

	} else if(window.scrollY >= aboutMe.offsetTop && window.scrollY < myWork.offsetTop) {
	
		desktopMenuLink[0].style.color = '#F05559';
		desktopMenuLink[0].style.textShadow = "none";

		desktopMenuLink[1].style.color = "#E8E8E0";
		desktopMenuLink[1].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";

		desktopMenuLink[2].style.color = "#E8E8E0";
		desktopMenuLink[2].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";
	
	} else if(window.scrollY >= myWork.offsetTop){

		desktopMenuLink[0].style.color = '#E8DBD2';
		desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";

		desktopMenuLink[1].style.color = '#F05559';
		desktopMenuLink[1].style.textShadow = "none";

	}
}

for (var i = 0; i < desktopMenuLink.length; i++) {
	desktopMenuLink[i].addEventListener("mouseout", mouseoutMenu);
};




/* ---------------------------------------------------------------------------------------------
---------------------------------------LOCATION-SPECIIFIC EVENTS--------------------------------
----------------------------------------------(SCROLLING)---------------------------------------
----------------------------------------------------------------------------------------------*/
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

		desktopMenuLink[1].setAttribute('class','');
		desktopMenuLink[1].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";

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
		myWorkMenuAppend.style.visibility = "hidden";
		for (var i = 4; i <= 7; i++) {
			myWorkMenuAppendSpan[i].style.marginTop = "-50px";
		};

	} else if(window.scrollY >= myWork.offsetTop && window.scrollY < hireMe.offsetTop){

		// MY WORK MENU
		desktopMenuSection.style.backgroundColor = "#E8DBD2";

		for (var i = 0; i < desktopMenuLink.length; i++) {
			desktopMenuLink[i].style.color = "#E8DBD2";
		};

		desktopMenuLink[0].setAttribute('class','');
		desktopMenuLink[0].style.textShadow = "-1px -1px 0 #F05559, 1px -1px 0 #F05559, -1px 1px 0 #F05559, 1px 1px 0 #F05559";

		desktopMenuLink[1].setAttribute('class','currentsection');
		desktopMenuLink[1].style.color = "#F05559";
		desktopMenuLink[1].style.textShadow = "none";

		// MY WORK EXTRA MENU EXPAND
		myWorkMenuAppend.style.opacity = "1";
		myWorkMenuAppend.style.visibility = "visible";
		for (var i = 4; i <= 7; i++) {
			myWorkMenuAppendSpan[i].style.marginTop = "0px";
		};

		// MY WORK PHOTO/TEXT SCROLL
		myWorkMenuAppendSpan[4].addEventListener("click", function(){
			myWork.style.backgroundColor = "#E8DBD2"
			desktopMenuSection.style.backgroundColor = "#E8DBD2"
				desktopMenuLink[0].style.color = "#E8DBD2"; //link color
				desktopMenuLink[0].addEventListener("mouseout", function(){
					desktopMenuLink[0].style.color = '#E8DBD2';
				});
				// desktopMenuLink[2].style.color = "#E8DBD2";
				// desktopMenuLink[2].addEventListener("mouseout", function(){
				// 	desktopMenuLink[2].style.color = '#E8DBD2';
				// });
			myWorkPhoto.style.backgroundPosition = "0% 55%"
			agency.style.marginLeft = "0px"
			upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

			//book easter egg disappear
			bookIcon.style.marginLeft = "150%";
			//rainbow easter egg disappear
			rainbowIcon.style.marginLeft = "150%";
			//eye easter egg disappear
			eyeIcon.style.marginLeft = "150%";

			// planet easter egg
			planetIcon.style.marginLeft = "85%";
		});

		myWorkMenuAppendSpan[5].addEventListener("click", function(){
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
			// agency.style.marginLeft = "-74%";
			upperLeftLogo.setAttribute('src','images/ar_logo_70px_white.png'); //white logo

			//planet easter egg disappear
			planetIcon.style.marginLeft = "-30%";
			//rainbow easter egg disappear
			rainbowIcon.style.marginLeft = "150%";
			//eye easter egg disappear
			eyeIcon.style.marginLeft = "150%";

			//book easter egg appear
			bookIcon.style.marginLeft = "70%";

			//responsive
			if(window.innerWidth > 1024){
				agency.style.marginLeft = "-80%";
			} if(window.innerWidth <= 1024){
				agency.style.marginLeft = "-90%";
			} 
		});

		myWorkMenuAppendSpan[6].addEventListener("click", function(){
			myWork.style.backgroundColor = "#E8DBD2"
			desktopMenuSection.style.backgroundColor = "#E8DBD2"
				desktopMenuLink[0].style.color = "#E8DBD2"; //link color
				desktopMenuLink[0].addEventListener("mouseout", function(){
					desktopMenuLink[0].style.color = '#E8DBD2';
				});
				desktopMenuLink[2].style.color = "#E8DBD2";
				desktopMenuLink[2].addEventListener("mouseout", function(){
					desktopMenuLink[2].style.color = '#E8DBD2';
				});
			myWorkPhoto.style.backgroundPosition = "100% 55%"
			// agency.style.marginLeft = "-174%";
			upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

			//planet easter egg disappear
			planetIcon.style.marginLeft = "-30%";
			//book easter egg disappear
			bookIcon.style.marginLeft = "-30%";
			//eye easter egg disappear
			eyeIcon.style.marginLeft = "150%";

			//rainbow easter egg appear
			rainbowIcon.style.marginLeft = "85%"

			//responsive
			if(window.innerWidth > 1024){
				agency.style.marginLeft = "-180%";
			} if(window.innerWidth <= 1024){
				agency.style.marginLeft = "-190%";
			}
		});

		myWorkMenuAppendSpan[7].addEventListener("click", function(){
			myWork.style.backgroundColor = "#E8E8E0"
			desktopMenuSection.style.backgroundColor = "#E8E8E0"
			desktopMenuLink[0].style.color = "#E8E8E0"; //link color
				desktopMenuLink[0].addEventListener("mouseout", function(){
					desktopMenuLink[0].style.color = '#E8E8E0';
				});
				desktopMenuLink[2].style.color = "#E8E8E0";
				desktopMenuLink[2].addEventListener("mouseout", function(){
					desktopMenuLink[2].style.color = '#E8E8E0';
				});
			// agency.style.marginLeft = "-353%";
			upperLeftLogo.setAttribute('src','images/ar_logo_70px.png'); //blue logo

			//planet easter egg disappear
			planetIcon.style.marginLeft = "-30%";
			//book easter egg disappear
			bookIcon.style.marginLeft = "-30%";
			//rainbow easter egg disappear
			rainbowIcon.style.marginLeft = "-30%";

			//responsive
			if(window.innerWidth > 1024){
				agency.style.marginLeft = "-361%";
				eyeIcon.style.marginLeft = "10%" //eye easter egg appear
			} if(window.innerWidth <= 1024){
				agency.style.marginLeft = "-340%";
				eyeIcon.style.marginLeft = "5%" //eye easter egg appear
			}
		});
	} else if(window.scrollY >= hireMe.offsetTop){
		// MENU
		desktopMenuSection.style.backgroundColor = "#E8E8E0";

		for (var i = 0; i < desktopMenuLink.length; i++) {
			desktopMenuLink[i].style.color = "#E8E8E0";
		};

		// EXTRA MENU HIDE
		myWorkMenuAppend.style.opacity = "0";
		myWorkMenuAppend.style.visibility = "hidden";
		for (var i = 4; i <= 7; i++) {
			myWorkMenuAppendSpan[i].style.marginTop = "-50px";
		};
	}
});
/* ---------------------------------------------------------------------------------------------
--------------------------------------------------END-------------------------------------------
---------------------------------------LOCATION-SPECIIFIC EVENTS--------------------------------
----------------------------------------------(SCROLLING)---------------------------------------
----------------------------------------------------------------------------------------------*/



//MENU CLICK AUTO SCROLL -- not working yet
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
		
	/*else if (window.scrollY >= myWork.offsetTop){
		var i = window.scrollY;
		var scrollup = setInterval(function(){
			window.scrollBy(0,i);
			i--;

			if (window.scrollY <= aboutMe.offsetTop){
				clearInterval(scrollup);
			}
		}, 20)
	}*/
});
desktopMenuLink[1].addEventListener("click", function(){
	if (window.scrollY < myWork.offsetTop){
		var i = window.scrollY;
		var scrolldown = setInterval(function(){
			window.scrollBy(0,i);
			i++;

			if (window.scrollY >= myWork.offsetTop){
				clearInterval(scrolldown);
			}
		}, 20)
	}

	else if (window.scrollY === myWork.offsetTop){
	 	window.scrollBy(0,myWork.offsetTop);
	}
});




/* ---------------------------------------------------------------------------------------------
-------------------------------------------MOBILE READ MORES------------------------------------
----------------------------------------------------------------------------------------------*/
//MOBILE READ MORES :: ABOUT
var aboutContinue = document.querySelector('#abtmobile');
var aboutColumnTwo = document.querySelector('#mobile_abt_column2')
var aboutArrow = document.querySelector('#abtarrow')
	aboutArrow.addEventListener("click",function(){
		if(aboutArrow.getAttribute('src') === "images/scrollarrow_down_pink.png"){
			aboutColumnTwo.style.maxHeight = "530px";
			aboutArrow.setAttribute('src','images/scrollarrow_up_pink.png');
		} else if(aboutArrow.getAttribute('src') === "images/scrollarrow_up_pink.png"){
			aboutColumnTwo.style.maxHeight = "0px";
			aboutArrow.setAttribute('src','images/scrollarrow_down_pink.png');
		}
	});

//MOBILE READ MORES :: AGENCY
var agencyContinue = document.querySelector('#agencymobile');
var agencyColumnTwo = document.querySelector('#mobile_agency_column2')
var agencyArrow = document.querySelector('#agencyarrow')
	agencyArrow.addEventListener("click",function(){
		if(agencyArrow.getAttribute('src') === "images/scrollarrow_down_pink.png"){
			agencyColumnTwo.style.maxHeight = "330px";
			agencyArrow.setAttribute('src','images/scrollarrow_up_pink.png');
		} else if(agencyArrow.getAttribute('src') === "images/scrollarrow_up_pink.png"){
			agencyColumnTwo.style.maxHeight = "0px";
			agencyArrow.setAttribute('src','images/scrollarrow_down_pink.png');
		}
	});
/* ---------------------------------------------------------------------------------------------
------------------------------------------------END---------------------------------------------
-------------------------------------------MOBILE READ MORES------------------------------------
------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------*/




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

// RAINBOW EASTER EGG -- no popup? yet?
var rainbowIcon = document.querySelector('#rainbow');

// EYE EASTER EGG -- no popup? yet?
var eyeIcon = document.querySelector('#eye');
































