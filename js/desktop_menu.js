var homepage = document.querySelector('#homepage');
var aboutMe = document.querySelector('#aboutme');
var myWork = document.querySelector('#mywork');
var hireMe = document.querySelector('#hireme');
var desktopMenuLink = document.querySelectorAll('#menu a');
var desktopMenuSection = document.querySelector('#desktop_menu_section');
var myWorkMenuAppend = document.querySelector('#mywork_append');
var myWorkMenuItemsDesktop = document.querySelectorAll('.myworksub.des');
var desktopSocialImages = document.querySelectorAll('.social_images');


/* ---------------------------------------------------------------------------------------------
------------------------------------SUB MENU IN 'MY WORK' SECTION-------------------------------
--------------------------------------SIDE-SCROLL FUNCTIONALITY---------------------------------
--------------------------------------------------------------------------------------------- */
function myWorkSubMenu( color, linkClass, photoPosition, agencyMargin, logoImage ){
	myWork.style.backgroundColor = color
	desktopMenuSection.style.backgroundColor = color

	for (var i = 0; i < desktopMenuLink.length; i++) {
		if(desktopMenuLink[i].textContent !== "my work"){
			desktopMenuLink[i].setAttribute("class", linkClass);
		}
	};
	
	myWorkPhoto.style.backgroundPosition = photoPosition
	agency.style.marginLeft = agencyMargin
	upperLeftLogo.setAttribute('src',logoImage);
}

myWorkMenuItemsDesktop[0].addEventListener("click", function(){
	myWorkSubMenu( "#E8DBD2", "menulink_peachy", "0% 55%", "0px", 'images/ar_logo_70px.png' )
});

myWorkMenuItemsDesktop[1].addEventListener("click", function(){
	myWorkSubMenu( "#2230A4", "menulink_blue", "50% 55%", "-80%", 'images/ar_logo_70px_white.png' )
});

myWorkMenuItemsDesktop[2].addEventListener("click", function(){
	myWorkSubMenu( "#E8DBD2", "menulink_peachy", "100% 55%", "-180%", 'images/ar_logo_70px.png' )
});

myWorkMenuItemsDesktop[3].addEventListener("click", function(){
	myWorkSubMenu( "#E8E8E0", "menulink_beige", "100% 55%", "-353%", 'images/ar_logo_70px.png' )
});





/* ---------------------------------------------------------------------------------------------
---------------------------------------LOCATION-SPECIIFIC EVENTS--------------------------------
----------------------------------------------(SCROLLING)---------------------------------------
--------------------------------------------------------------------------------------------- */
// SCROLLING

function scrollChanges( color, sectionClass, currentSection, logoImage, socialColor, myWorkVisible ){
	desktopMenuSection.style.backgroundColor = color;

	for (var i = 0; i < desktopMenuLink.length; i++) {
		desktopMenuLink[i].setAttribute("class", sectionClass)
	};

	if( currentSection >= 0 ){
		desktopMenuLink[currentSection].setAttribute('class','currentsection');
	}

	upperLeftLogo.setAttribute('src', logoImage);

	desktopSocialImages[0].setAttribute('src','images/social/snapchat_' + socialColor + '.png');
	desktopSocialImages[1].setAttribute('src','images/social/pinterest_' + socialColor + '.png');
	desktopSocialImages[2].setAttribute('src','images/social/linkedin_' + socialColor + '.png');
	desktopSocialImages[3].setAttribute('src','images/social/insta_' + socialColor + '.png');
	desktopSocialImages[4].setAttribute('src','images/social/twitter_' + socialColor + '.png');
	desktopSocialImages[5].setAttribute('src','images/social/fb_' + socialColor + '.png');
	desktopSocialImages[6].setAttribute('src','images/social/yt_' + socialColor + '.png');

	// MY WORK EXTRA MENU EXPAND
	if( myWorkVisible === "visible" ) {
		myWorkMenuAppend.style.opacity = "1";
	} else { myWorkMenuAppend.style.opacity = "0"; }
	myWorkMenuAppend.style.visibility = myWorkVisible;
	for (var i = 0; i < myWorkMenuItemsDesktop.length; i++) {
		if (myWorkVisible === "visible"){
			myWorkMenuItemsDesktop[i].style.marginTop = "0px";
		} else {myWorkMenuItemsDesktop[i].style.marginTop = "-50px";}
	};
}

window.addEventListener("scroll", function(){

	console.log( window.scrollY >= aboutMe.offsetTop-65, window.scrollY, aboutMe.offsetTop-65)

	if (window.scrollY >= homepage.offsetTop && window.scrollY < aboutMe.offsetTop-65) {

		scrollChanges( "#E8DBD2", "menulink_peachy", -1, "images/face_logo.png", "black", "hidden" );
	
	} else if(window.scrollY >= aboutMe.offsetTop-65 && window.scrollY < myWork.offsetTop) {

		scrollChanges( "#E8E8E0", "menulink_beige", 0, "images/ar_logo_70px.png", "pink", "hidden" )
	
	} else if(window.scrollY >= myWork.offsetTop && window.scrollY < hireMe.offsetTop){

		scrollChanges( "#E8DBD2", "menulink_peachy", 1, "images/ar_logo_70px.png", "pink", "visible" )

	} else if(window.scrollY >= hireMe.offsetTop){

		scrollChanges( "#E8E8E0", "menulink_beige", 2, "images/ar_logo_70px.png", "pink", "hidden" )

	}
});




/* -------------------------MENU CLICK AUTO SCROLL: not working yet-------------------------- */
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

