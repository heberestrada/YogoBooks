$( "#slider" ).slider({
				min: 1,
				max: numberOfViews(flipbook),

				start: function(event, ui) {
					if (!window._thumbPreview) {
						_thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');
						//setPreview(ui.value);
						//_thumbPreview.appendTo($(ui.handle));
					} else
					//setPreview(ui.value);

						moveBar(false);

				},

				slide: function(event, ui) {

					//setPreview(ui.value);

				},

				stop: function() {

					if (window._thumbPreview)
						_thumbPreview.removeClass('show');

					$('.magazine').turn('page', Math.max(1, $(this).slider('value')*2 - 2));
					stopAllSounds();
				}
			});
