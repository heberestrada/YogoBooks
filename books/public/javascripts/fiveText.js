
resizeViewport();


var u=1;
for(var readPages=1; readPages<24; readPages++){

    if(data.book.pages[readPages]["track"+languageIntern]!==undefined){
        window["audios"+u]=u;
        u++;
    }else{
        window["audios"+readPages]=0;
    }
}

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
					pageWrapper.style.backgroundColor = ("rgba(254, 254, 254, 0)");

					if (window._thumbPreview)
						_thumbPreview.removeClass('show');
					wasSlide=true;
					$('.magazine').turn('page', Math.max(1, $(this).slider('value')*2 - 2))
					stopAllSounds();
				}
			});






