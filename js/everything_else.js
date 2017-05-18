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