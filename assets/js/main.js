/*
	Landed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');

	// Scrolly links.
		$('.scrolly').scrolly({
			speed: 2000
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Parallax.
	// Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
		if (browser.name == 'ie'
		||	browser.mobile) {

			$.fn._parallax = function() {

				return $(this);

			};

		}
		else {

			$.fn._parallax = function() {

				$(this).each(function() {

					var $this = $(this),
						on, off;

					on = function() {

						$this
							.css('background-position', 'center 0px');

						$window
							.on('scroll._parallax', function() {

								var pos = parseInt($window.scrollTop()) - parseInt($this.position().top);

								$this.css('background-position', 'center ' + (pos * -0.15) + 'px');

							});

					};

					off = function() {

						$this
							.css('background-position', '');

						$window
							.off('scroll._parallax');

					};

					breakpoints.on('<=medium', off);
					breakpoints.on('>medium', on);

				});

				return $(this);

			};

			$window
				.on('load resize', function() {
					$window.trigger('scroll');
				});

		}

	// Spotlights.
		var $spotlights = $('.spotlight');

		$spotlights
			._parallax()
			.each(function() {

				var $this = $(this),
					on, off;

				on = function() {

					var top, bottom, mode;

					// Use main <img>'s src as this spotlight's background.
						$this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');

					// Side-specific scrollex tweaks.
						if ($this.hasClass('top')) {

							mode = 'top';
							top = '-20%';
							bottom = 0;

						}
						else if ($this.hasClass('bottom')) {

							mode = 'bottom-only';
							top = 0;
							bottom = '20%';

						}
						else {

							mode = 'middle';
							top = 0;
							bottom = 0;

						}

					// Add scrollex.
						$this.scrollex({
							mode:		mode,
							top:		top,
							bottom:		bottom,
							initialize:	function(t) { $this.addClass('inactive'); },
							terminate:	function(t) { $this.removeClass('inactive'); },
							enter:		function(t) { $this.removeClass('inactive'); },

							// Uncomment the line below to "rewind" when this spotlight scrolls out of view.

							//leave:	function(t) { $this.addClass('inactive'); },

						});

				};

				off = function() {

					// Clear spotlight's background.
						$this.css('background-image', '');

					// Remove scrollex.
						$this.unscrollex();

				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

	// Wrappers.
		var $wrappers = $('.wrapper');

		$wrappers
			.each(function() {

				var $this = $(this),
					on, off;

				on = function() {

					$this.scrollex({
						top:		250,
						bottom:		0,
						initialize:	function(t) { $this.addClass('inactive'); },
						terminate:	function(t) { $this.removeClass('inactive'); },
						enter:		function(t) { $this.removeClass('inactive'); },

						// Uncomment the line below to "rewind" when this wrapper scrolls out of view.

						//leave:	function(t) { $this.addClass('inactive'); },

					});

				};

				off = function() {
					$this.unscrollex();
				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

	// Banner.
		var $banner = $('#banner');

		$banner
			._parallax();

})(jQuery);























document.addEventListener("DOMContentLoaded", function () {
    console.log("Slideshow script loaded.");

    // Array of images for the slideshow
    const images = [
        "images/pic03.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
        "images/8.jpg",
        "images/9.jpg",
        "images/10.jpg",
        "images/11.jpg",
        "images/12.jpg",
        "images/13.jpg",
        "images/14.jpg",
        "images/15.jpg",
        "images/16.jpg",
        "images/17.jpg",
        "images/18.jpg",
        "images/19.jpg",
        "images/20.jpg",
        "images/21.jpg",
        "images/22.jpg",
        "images/23.jpg",
        "images/24.jpg",
        "images/25.jpg",
        "images/26.jpg",
        "images/27.jpg",
        "images/28.jpg",
        "images/29.jpg",
        "images/30.jpg",
        "images/31.jpg",
        "images/32.jpg",
        "images/33.jpg",
        "images/34.jpg",
        "images/35.jpg",
        "images/36.jpg"
    ];

    let currentIndex = 0;
    const slideshowImage = document.getElementById("slideshow-image");

    if (!slideshowImage) {
        console.error("Slideshow image element not found!");
        return; // Prevent further execution if element is missing
    }

    // Preload images for smoother transitions
    function preloadImages() {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }

    // Update the slide
    function updateSlide() {
        slideshowImage.src = images[currentIndex];
        console.log(`Current slide: ${images[currentIndex]}`); // Debugging
    }

    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    }

    // Attach event listeners to buttons after the page loads
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    // Initialize the slideshow
    preloadImages(); // Preload images for better performance
    updateSlide(); // Show the first slide
});





document.getElementById("slideshow-image").src = "images/2.jpg";

document.addEventListener("DOMContentLoaded", function () {
    let slideshowImage = document.getElementById("slideshow-image");
    slideshowImage.src = "images/pic1.jpg"; // Set an initial image
});














document.addEventListener("DOMContentLoaded", function () {
    let financeSlideshowImage = document.getElementById("finance-slideshow-image");
    let financePrevButton = document.getElementById("finance-prev");
    let financeNextButton = document.getElementById("finance-next");

    let financeImages = ["images/pic04.jpg", "images/1.jpg"];
    let financeIndex = 0; // Start with pic04.jpg

    // Function to update the slideshow image
    function updateFinanceSlide() {
        financeSlideshowImage.src = financeImages[financeIndex];
    }

    // Function for Next Button
    function nextFinanceSlide() {
        financeIndex++;
        if (financeIndex >= financeImages.length) {
            financeIndex = 0; // Loop back to first image
        }
        updateFinanceSlide();
    }

    // Function for Previous Button
    function prevFinanceSlide() {
        financeIndex--;
        if (financeIndex < 0) {
            financeIndex = financeImages.length - 1; // Loop to last image
        }
        updateFinanceSlide();
    }

    // Auto-slide every 3 seconds
    let financeAutoSlide = setInterval(nextFinanceSlide, 3000);

    // Event Listeners for Buttons
    financePrevButton.addEventListener("click", function () {
        clearInterval(financeAutoSlide); // Stop auto-slideshow on manual change
        prevFinanceSlide();
        financeAutoSlide = setInterval(nextFinanceSlide, 3000); // Restart auto-slide
    });

    financeNextButton.addEventListener("click", function () {
        clearInterval(financeAutoSlide);
        nextFinanceSlide();
        financeAutoSlide = setInterval(nextFinanceSlide, 3000);
    });

    // Set initial image
    updateFinanceSlide();
});
