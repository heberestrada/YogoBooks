////GENERAL SCRIPT////
var detectOrigins=false;
var device;
var size;
var stat="";
var timerSec=0;
var timerMin=0;
var timerHour=0;
var newPage=0;
var wasSlide=false;
var playing = false;
var audioReady;
var audioPlayerStart;
var playing = false;
var audioPlayerStart;
var pageWrapper


function audiosNumbers(){

	switch(audioNumber){
		case 1:
			audioReady = 0
			break;
		case 2:
			audioReady = 0
			break;
		case 3:
			audioReady = 0
			break;
		case 4:
			audioReady = 0
			break;
		case 5:
			audioReady = 0
			break;
		case 6:
			audioReady = window["audios1"]
			break;
		case 7:
			audioReady = window["audios1"]
			break;
		case 8:
			audioReady = window["audios2"]
			break;
		case 9:
			audioReady = window["audios2"]
			break;
		case 10:
			audioReady = window["audios3"]
			break;
		case 11:
			audioReady = window["audios3"]
			break;
		case 12:
			audioReady = window["audios4"]
			break;
		case 13:
			audioReady = window["audios4"]
			break;
		case 14:
			audioReady = window["audios5"]
			break;
		case 15:
			audioReady = window["audios5"]
			break;
		case 16:
			audioReady = window["audios6"]
			break;
		case 17:
			audioReady = window["audios6"]
			break;
		case 18:
			audioReady = window["audios7"]
			if(audioReady==null)audioReady=0;
			break;
		case 19:
			audioReady = window["audios7"]
			if(audioReady==null)audioReady=0;
			break;
		case 20:
			audioReady = window["audios8"]
			if(audioReady==null)audioReady=0;
			break;
		case 21:
			audioReady = window["audios8"]
			if(audioReady==null)audioReady=0;
			break;
		case 22:
			audioReady = window["audios9"]
			if(audioReady==null)audioReady=0;
			break;
		case 23:
			audioReady = window["audios9"]
			if(audioReady==null)audioReady=0;
			break;
		case 24:
			audioReady = window["audios10"]
			if(audioReady==null)audioReady=0;
			break;
	}
}



function play(){

	audioPlayerStart.play();
	playing=true
	if(language == "ES"){
		audioSync("texto" + audioReady,"audio" + audioReady,window["wordsES" + audioReady],audioPlayerStart);
	}else if(language == "EN"){
		audioSync("texto" + audioReady,"audio" + audioReady,window["wordsEN" + audioReady],audioPlayerStart);
	}else if(language == "KO"){
		audioSync("texto" + audioReady,"audio" + audioReady,window["wordsKR" + audioReady],audioPlayerStart);
	}else if(language == "ZH"){
		audioSync("texto" + audioReady,"audio" + audioReady,window["wordsCN" + audioReady],audioPlayerStart);
	}else if(language == "JA"){
		audioSync("texto" + audioReady,"audio" + audioReady,window["wordsJP" + audioReady],audioPlayerStart);
	}else if(language == "PT"){
		audioSync("texto" + audioReady,"audio" + audioReady,window["wordsPT" + audioReady],audioPlayerStart);
	}
	audioPlayerStart.addEventListener("ended", function(e){
		playing=false
	});	
}

function AudioPlay(){
    
	audiosNumbers();
	audioPlayerStart = document.getElementById("audio" +  audioReady);
	if(!playing) {
		stopAllSounds();
		play();
	}else{
		if (audioPlayerStart.paused) {
			audioPlayerStart.play();
			$(".buttonSound").css("opacity",1);
		} else {
			audioPlayerStart.pause();
			$(".buttonSound").css("opacity",0.5);
		}
	}
};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".languageButton").css("right","100%");

    
	this.addEventListener("touchend", function(e){
		if(!playing){
			document.querySelectorAll(".blast").forEach(function(elem){
				elem.style.backgroundColor = "#FFF"
			})
		}
		if(!notMove){
			AudioPlay()
		}
	});
}else{

$(this).click(function(){

	if(!notMove){
		if(!playing){
			document.querySelectorAll(".blast").forEach(function(elem){
				elem.style.backgroundColor = "#FFF"
			})
		}
		AudioPlay();
	}
})
}


function stopAllSounds(){
	$("#activeNext").css("display","none");
	$(".buttonSound").css("opacity",1);

	var audioPlayersArray = document.querySelectorAll("audio");
	audioPlayersArray.forEach(function(elem){
		elem.currentTime = 0;
		elem.pause();
	})
	playing = false;
}

//var model=parent.epicModel || epicModel;

//Here I get the language
if(localStorage.language){
	language=localStorage.language;
}
//Here I get the name
if(localStorage.name){
	nombre=localStorage.name;
}else{
	nombre="Yogome";
}

if(localStorage.id && id==0){
	id=localStorage.id;
}

//Here I recognize if it is in app or in web
if(localStorage.app){
	detectOrigins=localStorage.app;
}else{
	detectOrigins="false";
}

var languageIntern

languageIntern=language;

if(language=="ZH"){
	languageIntern="CN";
}
if(language=="JA"){
	languageIntern="JP";
}
if(language=="KO"){
	languageIntern="KR";
}
//Here loads the JSON


if(data){
	size= Object.keys(data.book.pages).length;
	if(size!=0){
		drawBook();
	}
}


function startTime()
{
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
		$(".background").css("background-attachment","fixed");
	}
	// add a zero in front of numbers<10
	timerSec++;
	if(timerSec==60){
		timerMin++;
		timerSec=0;
	}
	if(timerMin==60){
		timerMin=0;
		timerHour++;
	}
	if(timerHour==24){
		timerHour=0;
	}
	t=setTimeout(function(){startTime()},1000);
}



function drawBook(){
	notMove=false;
	window.onload = function(){

		startTime()
		localStorage.book=id;
		jQuery.loadScript = function (url, callback) {
			jQuery.ajax({
				url: url,
				dataType: 'script',
				success: callback,
				async: false
			});
		}
		//AQUI VA PARA SABER EL LENGUAGE
		function getParameterByName(name, url) {
			if (!url) url = window.location.href;
			name = name.replace(/[\[\]]/g, "\\$&");
			var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
			if (!results) return null;
			if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, " "));
		}

		//Version 1.0
		//		var  str =window.location.hash;
		//		var array=str.split("/")
		//		language=array[0].substr(1);
		//		id=array[1].substr(0)
		/*SCRIPT APP or PLAY YOGOME*/

		var languagePages=8;
		var audios1,audios2,audios3,audios4,audios5,audios6,audios7,audios8;

		if(size==20){
			var div1 = document.createElement('div');
			div1.className = 'hard fixed back-side p19';
			var depth=document.createElement("div");
			depth.className="depth";
			document.getElementById('magaz').appendChild(div1);
			$(".p19").append(depth);
			var div2 = document.createElement('div');
			div2.className = 'hard p20';
			document.getElementById('magaz').appendChild(div2);
		}else if(size==22){
			var div1 = document.createElement('div');
			div1.className = 'hard fixed back-side p21';
			var depth=document.createElement("div");
			depth.className="depth";
			document.getElementById('magaz').appendChild(div1);
			$(".p21").append(depth);
			var div2 = document.createElement('div');
			div2.className = 'hard p22';
			document.getElementById('magaz').appendChild(div2);
		}else if(size==24){
			var div1 = document.createElement('div');
			div1.className = 'hard fixed back-side p23';
			var depth=document.createElement("div");
			depth.className="depth";
			document.getElementById('magaz').appendChild(div1);
			var div2 = document.createElement('div');
			$(".p23").append(depth);
			div2.className = 'hard p24';
			document.getElementById('magaz').appendChild(div2);
		}

		languagePages = [
			{
				page:1,
				ES:data.book.pages[6]["text"+languageIntern],
				EN:data.book.pages[6]["text"+languageIntern],
				PT:data.book.pages[6]["text"+languageIntern],
				ZH:data.book.pages[6]["text"+languageIntern],
				JA:data.book.pages[6]["text"+languageIntern],
				KO:data.book.pages[6]["text"+languageIntern]
			},
			{
				page:2,
				ES:data.book.pages[8]["text"+languageIntern],
				EN:data.book.pages[8]["text"+languageIntern],
				PT:data.book.pages[8]["text"+languageIntern],
				ZH:data.book.pages[8]["text"+languageIntern],
				JA:data.book.pages[8]["text"+languageIntern],
				KO:data.book.pages[8]["text"+languageIntern]
			},
			{
				page:3,
				ES:data.book.pages[10]["text"+languageIntern],
				EN:data.book.pages[10]["text"+languageIntern],
				PT:data.book.pages[10]["text"+languageIntern],
				ZH:data.book.pages[10]["text"+languageIntern],
				JA:data.book.pages[10]["text"+languageIntern],
				KO:data.book.pages[10]["text"+languageIntern]
			},
			{
				page:4,
				ES:data.book.pages[12]["text"+languageIntern],
				EN:data.book.pages[12]["text"+languageIntern],
				PT:data.book.pages[12]["text"+languageIntern],
				ZH:data.book.pages[12]["text"+languageIntern],
				JA:data.book.pages[12]["text"+languageIntern],
				KO:data.book.pages[12]["text"+languageIntern]
			},
			{
				page:5,
				ES:data.book.pages[14]["text"+languageIntern],
				EN:data.book.pages[14]["text"+languageIntern],
				PT:data.book.pages[14]["text"+languageIntern],
				ZH:data.book.pages[14]["text"+languageIntern],
				JA:data.book.pages[14]["text"+languageIntern],
				KO:data.book.pages[14]["text"+languageIntern]
			},
			{
				page:6,
				ES:data.book.pages[16]["text"+languageIntern],
				EN:data.book.pages[16]["text"+languageIntern],
				PT:data.book.pages[16]["text"+languageIntern],
				ZH:data.book.pages[16]["text"+languageIntern],
				JA:data.book.pages[16]["text"+languageIntern],
				KO:data.book.pages[16]["text"+languageIntern]
			},
			{
				page:7,
				ES:data.book.pages[18]["text"+languageIntern],
				EN:data.book.pages[18]["text"+languageIntern],
				PT:data.book.pages[18]["text"+languageIntern],
				ZH:data.book.pages[18]["text"+languageIntern],
				JA:data.book.pages[18]["text"+languageIntern],
				KO:data.book.pages[18]["text"+languageIntern]
			},
			{
				page:8,
				ES:data.book.pages[20]["text"+languageIntern],
				EN:data.book.pages[20]["text"+languageIntern],
				PT:data.book.pages[20]["text"+languageIntern],
				ZH:data.book.pages[20]["text"+languageIntern],
				JA:data.book.pages[20]["text"+languageIntern],
				KO:data.book.pages[20]["text"+languageIntern]
			}
		]

		if(size==20){
			$(".p19").css("background-image","url('/books/"+id+"/"+data.book.pages[19].image+"')");
			$(".p20").css("background-image","url('/books/"+id+"/"+data.book.pages[20].image+"')");
		}else if(size==22){
			$(".p21").css("background-image","url('/books/"+id+"/"+data.book.pages[21].image+"')");
			$(".p22").css("background-image","url('/books/"+id+"/"+data.book.pages[22].image+"')");
		}else if(size==24){
			$(".p23").css("background-image","url('/books/"+id+"/"+data.book.pages[23].image+"')");
			$(".p24").css("background-image","url('/books/"+id+"/"+data.book.pages[24].image+"')");
		}



		//Se tiene que actualizar cada vez que se agregue un libro nuevo
		var booksNumber=35
		//    var bookLines = document.createElement('script')
		//    bookLines.setAttribute("type","text/javascript")
		//    bookLines.setAttribute("src", "/books/"+id+"/bookLines.js")


		document.getElementById("homes").style.visibility = "visible";
		document.getElementById("languageBoton").style.visibility = "visible";
		document.getElementById("next").style.visibility = "visible";
		document.getElementById("prev").style.visibility = "visible";

		document.getElementById("ButtonLanEs").style.visibility = "visible";
		document.getElementById("ButtonLanEn").style.visibility = "visible";
		document.getElementById("ButtonLanZh").style.visibility = "visible";
		document.getElementById("ButtonLanJa").style.visibility = "visible";
		document.getElementById("ButtonLanKo").style.visibility = "visible";
		document.getElementById("ButtonLanPt").style.visibility = "visible";

		var meta = document.createElement('meta');
		meta.setAttribute("property","og:description");
		//Here we call the banner


		var titles=new Array(6);
		//if (typeof someObject == 'undefined')


		titles[0]=data.book["title"+languageIntern];
		titles[1]=data.book["title"+languageIntern];
		titles[2]=data.book["title"+languageIntern];
		titles[3]=data.book["title"+languageIntern];
		titles[4]=data.book["title"+languageIntern];
		titles[5]=data.book["title"+languageIntern];

		if(language == "ES"){
			title="Interactive books:"+titles[0];
		}else if(language == "EN"){
			title="Interactive books:"+titles[1];
		}else if(language == "PT"){
			title="Interactive books:"+titles[2];
		}else if(language == "ZH"){
			title="Interactive books:"+titles[3];
		}else if(language == "JA"){
			title="Interactive books:"+titles[3];
		}else if(language == "KO"){
			title="Interactive books:"+titles[3];
		}else{
			title="Interactive books:"+titles[1];
		}



		var languageTitles = [
			{
				ES:titles[0],
				EN:titles[1],
				PT:titles[2],
				ZH:titles[3],
				JA:titles[4],
				KO:titles[5]
			}
		]




		function changeTitle(){
			if(language == "ES"){
				$(".languageTitle").text(languageTitles[0][language])
			}else if(language == "EN"){
				$(".languageTitle").text(languageTitles[0][language])
			}else if(language == "PT"){
				$(".languageTitle").text(languageTitles[0][language])
			}else if(language == "ZH"){
				$(".languageTitle").text(languageTitles[0][language])
			}else if(language == "JA"){
				$(".languageTitle").text(languageTitles[0][language])
			}else if(language == "KO"){
				$(".languageTitle").text(languageTitles[0][language])
			}else{
				$(".languageTitle").text(languageTitles[0].EN)
			}
		}

		changeTitle()


		$(".magazine").find("#p1").css("background-image","url('/books/"+id+"/"+data.book.pages[1]["image"+languageIntern]);

		var numberOfPages=size;
		var datas= data.book.pages;
		var clearTimeOut;
		var audioReady;
		var playing = false;
		//cambio de regex

		function replaceQueryParam(param, newval, search) {
			var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
			var query = search.replace(regex, "$1").replace(/&$/, '');

			return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
		}


		window.onpopstate = function(event) {
			stopAllSounds();
		};

		$("#ButtonLanEs").click(function(){
			localStorage.language="ES";
			location.reload();
		});

		$("#ButtonLanEn").click(function(){
			localStorage.language="EN";
			location.reload();
		});

		$("#ButtonLanZh").click(function(){
			localStorage.language="ZH";
			location.reload();
		});

		$("#ButtonLanJa").click(function(){
			localStorage.language="JA";
			location.reload();
		});

		$("#ButtonLanKo").click(function(){

			localStorage.language="KO";
			location.reload();
		});

		$("#ButtonLanPt").click(function(){

			localStorage.language="PT";
			location.reload();
		});

		$(".languageButton").click(function(){
			var idioma = $(".idiomas");

			if (idioma.css("display") === "block") {
				idioma.css("display","none");
				notMove=false;
				document.getElementById("slider").style.display = "block";
			} else {
				idioma.css("display","block");
				notMove=true;
				document.getElementById("slider").style.display = "none";
			}
		});
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $(".languageButton").css("right","1%");
            $("#hombeButton").css("width","90%");
        }
		//TweenMax.fromTo($("#activeNext"),1,{alpha:0.5},{alpha:1,yoyo:true,repeat:-1});
		var u=1;
		$("#audiosGroup").append('<audio id="audio0" preload="true" src="/books/'+id+"/audios/" + 0 + '.mp3"></audio>')
		for(var i = 1;i<=numberOfPages;i++){
			if(data.book.pages[i]["track"+languageIntern]!==undefined){
				$("#audiosGroup").append('<audio id="audio'+u+'" preload="true" src="/books/'+id+"/"+data.book.pages[i]["track"+languageIntern]+'"></audio>');
				u++;
			}

		}

		var u=1;
		for(var i = 1;i<=size-1;i++){
			if(data.book.pages[i]["track"+languageIntern]!==undefined){
				window["words"+languageIntern+u]=data.book.pages[i]["words"+languageIntern];
				u++;
			}
		}

		function loadApp() {

			$('#canvas').fadeIn(1000);

			var flipbook = $('.magazine');

			// Check if the CSS was already loaded

			if (flipbook.width()==0 || flipbook.height()==0) {
				setTimeout(loadApp, 10);
				return;
			}

			// Create the flipbook
			flipbook.turn({

				// Magazine width

				width: 922,

				// Magazine height

				height: 600,

				// Duration in millisecond

				duration: 1000,

				// Enables gradients

				gradients: true,

				// Auto center this flipbook

				autoCenter: true,

				// Elevation from the edge of the flipbook when turning a page

				elevation: 50,

				// The number of pages

				pages: numberOfPages,


				datas: datas,


				// Events

				when: {



					turning: function(event, page, view) {

						var book = $(this),
							currentPage = book.turn('page'),
							pages = book.turn('pages');
						pageWrapper = document.querySelector(".page-wrapper");	

						if(page<newPage){
							newPage=newPage-2;
						}else{
							newPage=page;
						}
						if(wasSlide){
							updateDepth(book,page,pages);
							wasSlide=false;
						}else{
							updateDepth(book,newPage,pages);
						}


						if (page>=2){
							$('.magazine .p2').addClass('fixed');
						}
						else
						{
							$('.magazine .p2').removeClass('fixed');
						}


						if(size==20){
							if (page<book.turn('pages'))
								$('.magazine .p19').addClass('fixed');
							else
								$('.magazine .p19').removeClass('fixed');
						}else if(size==22){
							if (page<book.turn('pages'))
								$('.magazine .p21').addClass('fixed');
							else
								$('.magazine .p21').removeClass('fixed');
						}else if(size==24){
							if (page<book.turn('pages'))
								$('.magazine .p23').addClass('fixed');
							else
								$('.magazine .p23').removeClass('fixed');
						}


						//Areglo errores de firefox
						if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
							$('.userName').addClass('fireFoxUser');
							$('.fireFoxUser').removeClass('userName');

							$(".p2").css("background-image","url('/books/"+id+"/"+datas[2]["image"+languageIntern]);
							$(".p3").css("background-image","url('/books/"+id+"/"+datas[3]["image"+languageIntern]);
							$(".p5").css("background-image","url('/books/"+id+"/"+datas[5]["image"+languageIntern]);
							$(".magazine").find(".p4").css("background-image","url('/books/"+id+"/"+datas[4].image+"')");
							$(".magazine").find(".p7").css("background-image","url('/books/"+id+"/"+datas[7].image+"')");
							$(".magazine").find(".p9").css("background-image","url('/books/"+id+"/"+datas[9].image+"')");
							$(".magazine").find(".p11").css("background-image","url('/books/"+id+"/"+datas[11].image+"')");
							$(".magazine").find(".p13").css("background-image","url('/books/"+id+"/"+datas[13].image+"')");
							$(".magazine").find(".p15").css("background-image","url('/books/"+id+"/"+datas[15].image+"')");
							$(".magazine").find(".p17").css("background-image","url('/books/"+id+"/"+datas[17].image+"')");


						}else{

							$('.userName').addClass('fireFoxUser');
							$('.fireFoxUser').removeClass('userName');


							$(".p2").css("background-image","url('/books/"+id+"/"+datas[2]["image"+languageIntern]);
							$(".p3").css("background-image","url('/books/"+id+"/"+datas[3]["image"+languageIntern]);
							$(".p5").css("background-image","url('/books/"+id+"/"+datas[5]["image"+languageIntern]);

							$(".magazine").find(".p19").css("background-image","url('/books/"+id+"/"+datas[19].image+"')");

							if(datas[23]){
								$(".magazine").find(".p23").css("background-image","url('/books/"+id+"/"+datas[23].image+"')");
							}
							if(datas[24]){
								$(".magazine").find(".p24").css("background-image","url('/books/"+id+"/"+datas[24].image+"')");
							}
							$(".magazine").find(".p4").css("background-image","url('/books/"+id+"/"+datas[4].image+"')");
							$(".magazine").find(".p7").css("background-image","url('/books/"+id+"/"+datas[7].image+"')");
							$(".magazine").find(".p9").css("background-image","url('/books/"+id+"/"+datas[9].image+"')");
							$(".magazine").find(".p11").css("background-image","url('/books/"+id+"/"+datas[11].image+"')");
							$(".magazine").find(".p13").css("background-image","url('/books/"+id+"/"+datas[13].image+"')");
							$(".magazine").find(".p15").css("background-image","url('/books/"+id+"/"+datas[15].image+"')");
							$(".magazine").find(".p17").css("background-image","url('/books/"+id+"/"+datas[17].image+"')");
						}



						//Hash.go('/#page/'+page).update();

						// Show and hide navigation buttons
						audioNumber = page;
						disableControls(page);

						audioNumber = page;
						disableControls(page);
						mixpanel.track(
							"OnBookPage",
							{
								"user_id": credentials.educationID,
								bookID : id,
								pageID: page,
								"boookName": data.book.titleEN,
								app :device
							}
						);
						if(page==numberOfPages-2){
							mixPanelFinished();
						}

					},

					turned: function(event, page, view) {

						disableControls(page);
						var object = $(this);
						$(this).turn('center');
						$('#slider').slider('value', getViewNumber(object, page));
						audioNumber = page;
						if (page==1) {
							$(this).turn('peel', 'br');
						}


					},

					missing: function (event, pages) {

						// Add pages that aren't in the magazine

						for (var i = 0; i < pages.length; i++)
							addPage(pages[i], $(this));

					}
				}


			});

			// Zoom.js



			$('.magazine-viewport').zoom({
				flipbook: $('.magazine'),

				max: function() {

					return largeMagazineWidth()/$('.magazine').width();

				},

				when: {
					swipeLeft: function() {
						if(!notMove){
							stopAllSounds();
							$(this).zoom('flipbook').turn('next');
							newPage--;
						}
					},

					swipeRight: function() {
						if(!notMove){
							stopAllSounds();
							$(this).zoom('flipbook').turn('previous');
						}
					},

					resize: function(event, scale, page, pageElement) {


					},

					zoomIn: function () {

						$(".userName").addClass("zoomUserName")
						$('#slider-bar').hide();
						$('.made').hide();
						$('.magazine').removeClass('animated').addClass('zoom-in');
						$('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out');

						if (!window.escTip && !$.isTouch) {
							escTip = true;

							$('<div />', {'class': 'exit-message'}).
							html('<div>Press ESC to exit</div>').
							appendTo($('body')).
							delay(2000).
							animate({opacity:0}, 500, function() {
								$(this).remove();
							});
						}
					},

					zoomOut: function () {

						$(".userName").removeClass("zoomUserName")
						$('#slider-bar').fadeIn();
						$('.exit-message').hide();
						$('.made').fadeIn();
						$('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');

						setTimeout(function(){
							$('.magazine').addClass('animated').removeClass('zoom-in');
							resizeViewport();
						}, 0);

					}
				}
			});




			// Using arrow keys to turn the page



			// URIs - Format #/page/1



			Hash.on('^page\/([0-9]*)$', {
				yep: function(path, parts) {
					var page = parts[2];

					if (page!==undefined) {
						if ($('.magazine').turn('is'))
							$('.magazine').turn('page', page);
						audioReady = page;

					}

				},
				nop: function(path) {

					if ($('.magazine').turn('is'))
						$('.magazine').turn('page', 1);
				}
			});


			$(window).resize(function() {
				resizeViewport();
                 $(".languageButton").css("right","1%");
			}).bind('orientationchange', function() {
				resizeViewport();
                 $(".languageButton").css("right","1%");
			});
			// Events for the next button
            
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                
               
                var lastTouchEnd = 0;
                document.addEventListener('touchend', function (event) {
                    var now = (new Date()).getTime();
                    if (now - lastTouchEnd <= 330) {
                        event.preventDefault();
                    }
                    lastTouchEnd = now;
                }, false);
				$('.next-button').bind("touchstart", function(e){
					if(!notMove){
						document.querySelectorAll(".blast").forEach(function(elem){
							elem.style.backgroundColor = "#FFF"
						})
						$('.magazine').turn('next');
						pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
						stopAllSounds();
					}
                    
				});

				$('.previous-button').bind("touchstart", function(e){
					if(!notMove){
						document.querySelectorAll(".blast").forEach(function(elem){
							elem.style.backgroundColor = "#FFF"
						})
						$('.magazine').turn('previous');
						pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
						stopAllSounds();
						newPage--;
					}
				});

			}else{

				$('.next-button').bind($.mouseEvents.over, function() {

					$(this).addClass('next-button-hover');

				}).bind($.mouseEvents.out, function() {

					$(this).removeClass('next-button-hover');

				}).bind($.mouseEvents.down, function() {

					$(this).addClass('next-button-down');

				}).bind($.mouseEvents.up, function() {

					$(this).removeClass('next-button-down');

				}).click(function() {
					if(!notMove){
						document.querySelectorAll(".blast").forEach(function(elem){
							elem.style.backgroundColor = "#FFF"
						})
						$('.magazine').turn('next');
						pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
						stopAllSounds();
					}
				});
				$('.previous-button').bind($.mouseEvents.over, function() {

					$(this).addClass('previous-button-hover');

				}).bind($.mouseEvents.out, function() {

					$(this).removeClass('previous-button-hover');

				}).bind($.mouseEvents.down, function() {

					$(this).addClass('previous-button-down');

				}).bind($.mouseEvents.up, function() {

					$(this).removeClass('previous-button-down');

				}).click(function() {
					if(!notMove){
						document.querySelectorAll(".blast").forEach(function(elem){
							elem.style.backgroundColor = "#FFF"
						})
						$('.magazine').turn('previous');
						pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
						stopAllSounds();
						newPage--;
					}
				});



			}




			$(document).keydown(function(e){

				var previous = 37, next = 39, esc = 27;
				switch (e.keyCode) {
					case previous:
						// left arrow
						if(!notMove){
							document.querySelectorAll(".blast").forEach(function(elem){
								elem.style.backgroundColor = "#FFF";
							})
							$('.magazine').turn('previous');
							pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
							stopAllSounds();
							e.preventDefault();
							newPage--;

							break;
						}
					case next:
						//right arrow
						if(!notMove){

							document.querySelectorAll(".blast").forEach(function(elem){
								elem.style.backgroundColor = "#FFF";
							})
							$('.magazine').turn('next');
							pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
							stopAllSounds();
							e.preventDefault();

							break;
						}
					case esc:
						$('.magazine-viewport').zoom('zoomOut');
						playing=false;
						e.preventDefault();

						break;
				}
			});

			// Slider

			$( "#slider" ).slider({
				min: 1,
				max: numberOfViews(flipbook),

				start: function(event, ui) {
					if (!window._thumbPreview) {
						_thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');

					} else

						moveBar(false);

				},

				slide: function(event, ui) {

					//setPreview(ui.value);


				},

				stop: function() {
					document.querySelectorAll(".blast").forEach(function(elem){
						elem.style.backgroundColor = "#FFF"
					})
					

					if (window._thumbPreview)
						_thumbPreview.removeClass('show');
					$('.magazine').turn('page', Math.max(1, $(this).slider('value')*2 - 2))
					wasSlide=true;
					stopAllSounds();
					pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
				}
			});

			resizeViewport();

			$('.magazine').addClass('animated');

		}

		// Zoom icon

		$('.zoom-icon').bind('mouseover', function() {

			if ($(this).hasClass('zoom-icon-in'))
				$(this).addClass('zoom-icon-in-hover');

			if ($(this).hasClass('zoom-icon-out'))
				$(this).addClass('zoom-icon-out-hover');

		}).bind('mouseout', function() {

			if ($(this).hasClass('zoom-icon-in'))
				$(this).removeClass('zoom-icon-in-hover');

			if ($(this).hasClass('zoom-icon-out'))
				$(this).removeClass('zoom-icon-out-hover');

		}).bind('click', function() {

			if ($(this).hasClass('zoom-icon-in'))
				$('.magazine-viewport').zoom('zoomIn');
			else if ($(this).hasClass('zoom-icon-out'))
				$('.magazine-viewport').zoom('zoomOut');

		});


		$('#canvas').hide();


		yepnope({
			test : Modernizr.csstransforms,
			yep: ['/lib/turn.js'],
			nope: ['/lib/turn.html4.min.js', '/stylesheets/jquery.ui.html4.css'],
			both: ['/lib/zoom.min.js', '/stylesheets/jquery.ui.css', '/javascripts/magazine.js', '/stylesheets/magazine.css','/stylesheets/custom_fonts.css'],
			complete: loadApp
		});



		var credentials = loginModal.getChildData();

		$(document).ready(function () {
			/**
			 * * Metodo implementado en mixpanel.js
			 */

			var credentials1 = loginModal.getChildData();


			if(detectOrigins=="true"){
				device="app";
			}else{
				device="web";
			}
			mixpanel.track(
				"OnBookOpen",
				{
					"user_id": credentials.educationID,
					"app": device,
					"bookID" : id,
					"bookName" : data.book.titleEN
				}
			);
		});


		function mixPanelFinished(){
			mixpanel.track(
				"OnBookFinished",
				{
					"user_id": credentials.educationID,
					"app": device,
					"bookID" : id,
					"bookName" : data.book.titleEN,
					"bookFinishedIn":timerHour+"Hour:"+timerMin+"Minutes:"+timerSec+"Seconds"
					//"lastPage" : audioNumber
				}
			);
		}



		var allPages =  size

		function mixPanelClose(){

			mixpanel.track(
				"OnBookClose",
				{
					"user_id": credentials.educationID,
					"app": device,
					"bookID" : id,
					"bookName" : data.book.titleEN,
					"timeBookClosed": timerHour+"Hour:"+timerMin+"Minutes:"+timerSec+"Seconds"
				}
			);
		}




		var leaving = true;
		var isClose = false;

		function EndChatSession() {
			var request = GetRequest();
			request.open("GET", "Chat.aspx", true);
			request.send();
		}
		//		document.onkeydown = checkKeycode
		//		function checkKeycode(e) {
		//			var keycode;
		//			if (window.event)
		//				keycode = window.event.keyCode;
		//			else if (e)
		//				keycode = e.which;
		//			if (keycode == 116) {
		//				isClose = true;
		//			}
		//		}
		//		function somefunction() {
		//			isClose = true;
		//		}

		window.onbeforeunload = function (e) {
			if (!e) e = event;
			if (leaving) {
				EndChatSession();
				mixPanelClose();
				//e.returnValue = "Are You Sure";

			}


		}
		function GetRequest() {
			var xmlHttp = null;
			try {
				// Firefox, Opera 8.0+, Safari
				xmlHttp = new XMLHttpRequest();
			}
			catch (e) {
				//Internet Explorer
				try {
					xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch (e) {
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
			}
			return xmlHttp;
		}
	}
}
