function audioSync(subtitles,soundTrack,arraypistas, audioPlayer){

    ( function(win, doc) {

        var subtitles1 = doc.getElementById(subtitles);
        var syncData = arraypistas;
        var textPage = document.querySelector(".textPage");
        var texto1 = document.querySelectorAll("#texto1, #texto2, #texto3, #texto4, #texto5, #texto6");
        var newColor = document.querySelector(".newColor");
        var ownSize = document.querySelector(".own-size");
        var pageWrapper = document.querySelector(".page-wrapper");
        var audioPlayersArray = document.querySelectorAll("audio");

        audioPlayer.addEventListener("loadstart", function(e){
            var highlightedDOM = document.querySelectorAll("newColor");
            highlightedDOM.forEach(function(elem){
                elem.classList.remove("newColor");
                document.querySelectorAll(".blast").forEach(function(elem){
                    elem.style.backgroundColor = "#FFF"
                })
            })
        })
        audioPlayer.addEventListener("timeupdate", function HighLight(e){
            var count = 1
            if (audioPlayer.currentTime == 0) {

                var highlightedDOM = document.querySelectorAll(".newColor");
                highlightedDOM.forEach(function(elem){
                    elem.classList.remove("newColor");
                });
			}
            for (var i = 0; i < syncData.length; i++) {

                if( audioPlayer.currentTime >= syncData[i].start ){
                    var highlightedDOM = document.querySelectorAll("[data-time='" + syncData[i].start + "']");
                    highlightedDOM.forEach(function(elem){
                        elem.classList.add("newColor");
                    })
                    if (count == 1) {
                        var hight = .99 ;
                    }
                    else if(count == 2){
                        var hight = .98 ;
                    }
                    else{
                        var hight = 1 ;
                    }
                    textPage.style.backgroundColor = ("rgba(254, 254, 254, " + String(hight) + ")");
                    texto1.forEach(function(jelem){
                        jelem.style.backgroundColor = ("rgba(254, 254, 254, " + String(hight) + ")");
                    })
                    ownSize.style.backgroundColor = ("rgba(254, 254, 254, " + String(hight) + ")");
                    pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, " + String(hight) + ")");
                    $(".newColor").css({
                        'background-color' : ("rgba(0, 0, 255, " + String(hight) + ")")
                    });
                    count = count + 1;
                    count = count > 3 ? 1 : count;
                }
            }
        });
		audioPlayer.addEventListener("ended", function(e){
			//pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");
		})
        

    }(window, document));
}
