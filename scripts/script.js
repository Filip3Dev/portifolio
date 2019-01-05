var jack 	= {};
var mq 		= window.matchMedia( "(max-width: 320px)" );

(function() {

	this.init 	= function() {

		// Masonry

		$('div#portfolio').masonry({

			itemSelector : 'a.trigger',
			isFitWidth: true,
			isResizable: true,
			containerWidth: 260,
			containerStyle: { 'max-width' :'1300px'}

		});

		// for iPhones
		if (mq.matches) {

			$('div#portfolio').masonry('destroy');

		}

	},

	this.projectView	= function() {

		// Ajax

		$('.loadproject').click( function (){

			// for iPhones
			if (mq.matches) {
				
				$('div.wrapper').html('');
				$('section#index').hide();

			}
			// for everything else
			else {

				$('div.wrapper').html('');

			}

			// get url
			var url 	= $(this).attr('href');

			// loading the view.html page into the wrapper...
			
			$('div.wrapper').load(url, function() {
				
				// loaded...

				$('div.wrapper').fadeIn(function (){
					// $('section#index').hide();
				});
				$('div#loader').show();


				// close event

				$('a.close').click(function (){

					if (mq.matches) {
						$('section#index').show();
					}

					$('div.wrapper').fadeOut();

					
				});

				// Load slideshow images

				var loader = new PxLoader();

				$('li.slide img').each(function() {

					var imgSrc		= $(this).attr('src');
					log(imgSrc);

					var pxImage 	= new PxLoaderImage(imgSrc);
			
					loader.add(pxImage);

				});

				// Once images have loaded...

				loader.addCompletionListener(function() {

					// ...trigger the slideshow
					$('body img').fadeIn();
					$('div#loader').hide();

					if ($('html').hasClass('touch')){

						window.mySwipe = new Swipe(
						  document.getElementById('wrap')
						);

						$('div.next, div.prev').hide();

					} else {

						$('ul#slideshow').carouFredSel({
							
							width: "100%",
							items : {
								visible: 1
							},
							prev : '.prev',
							next : '.next',
							auto : false,
							wipe : true,
							
	
						});

					}

				});
				loader.start();

			});

			return false;

		});
		
	},

	this.graphics 	= function() {

		// Info drawer

		$('a.info').click(function (){

			if ($('aside').hasClass('open')){

				$('aside').attr('class', 'shut');
				$('a.info').html('contact');
			
			} else {

				$('aside').attr('class', 'open');
				$('a.info').html('close');

			}

			
		});

	}

}).apply(jack); 

// on load



$(window).load(function (){

	jack.init();
	
});