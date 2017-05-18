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
