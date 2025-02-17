(function ($) {
    $(document).ready(function () {
        var windowOn = $(window);
        // Change cursor
        var $cursor = $("#t-cursor");
        function updateCursorTracking() {
            if (window.innerWidth >= 992) {
                $(window).on("mousemove", function (e) {
                    $cursor.css({
                        left: e.clientX + "px",
                        top: e.clientY + "px"
                    });
                });
            } else {
                $(window).off("mousemove"); 
            }
        }
        updateCursorTracking();
        $(window).on("resize", function () {
            updateCursorTracking();
        });

        // header sticky


  
        const $video = $(".video-item");
        if($video.length){
            const $playButton = $(".video-play-icon");
            const $playIcon = $(".play-icon");
            const $pauseIcon = $(".pause-icon");
        
            // Ensure video plays by default
            $video.get(0).play();
            $playIcon.hide();
            $pauseIcon.show();
        
            // Handle play/pause toggle
            $playButton.on("click", function () {
                if ($video.get(0).paused) {
                    $video.get(0).play();
                    $playIcon.hide();
                    $pauseIcon.show();
                } else {
                    $video.get(0).pause();
                    $playIcon.show();
                    $pauseIcon.hide();
                }
            });
        }

        // testimonial slider 
        let testimonialSlider = new Swiper(".testimonial-slider-area", {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: true,
            loop: true,
            allowTouchMove: false,
            breakpoints: {
                320: {
                   autoHeight: true,
                },
                768: {
                    autoHeight: false,
                },
            },

        });
        // testimonial slider 
        let gallerySlider = new Swiper(".gallery-slider-info", {
            slidesPerView: 3,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: true,
            loop: true,
            allowTouchMove: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },

        });
        // brand slider
        let brandSlider2 = new Swiper(".our-team-slider", {
            slidesPerView: "auto",
            direction: "vertical",
            loop:true,
            spaceBetween: 30,
            allowTouchMove:false,
            speed:4000,
            autoplay:{
                delay:1,
                disableOnInteraction:true,
            }
        });
        const $hamburgerMenu = $(".hamburger-menu");
        const $headerPopupArea = $(".header-popup-area");
        const $closeButton = $(".header-close-btn");

        // Click event for hamburger menu
        $hamburgerMenu.on("click", function () {
            $headerPopupArea.toggleClass("active");
        });
        $closeButton.on("click", function () {
            $headerPopupArea.removeClass("active");
        });

        let lastScrollTop = 0;
        $(window).on("scroll", function() {
            let currentScrollTop = $(this).scrollTop();
            if (currentScrollTop > lastScrollTop) {
                console.log("Scrolling down");
            } else {
                console.log("Scrolling up");
            }
            lastScrollTop = currentScrollTop;
        });
        $(window).on('load', function () {
            $('.preloader img').css({ opacity: 1, transform: 'translateY(0)' });
          
            setTimeout(function () {
              $('.preloader').addClass('hidden');
            }, 1000); 
          });

        // Counter up
		var counterUp = window.counterUp["default"];
		var $counters = $(".counter");
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint({
				element: $(this),
				handler: function () {
					counterUp(counter, {
						duration: 2000,
						delay: 16
					});
					this.destroy();
				},
				offset: 'bottom-in-view',
			});
		});

        // Lenis
		const lenis = new Lenis()

		lenis.on('scroll', (e) => {
		})

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0);
        let lastScrollY = 0;
        lenis.on("scroll", ({ scroll }) => {
          const header = $(".header-area");
      
          if (scroll > lastScrollY) {
            header.removeClass("header-scroll-up").addClass("header-scroll-down");
          } else {
            header.removeClass("header-scroll-down").addClass("header-scroll-up");
          }
          lastScrollY = scroll <= 0 ? 0 : scroll;
        });
        function scrollToNextSection() {
            let currentSection = $(".scroll-down").closest("section");
            let nextSection = currentSection.next("section"); 
            if (nextSection.length) {
                lenis.scrollTo(nextSection[0], { duration: 0, easing: "power2.out" });
            }
        }
    
        $(".scroll-down").on("click", function (e) {
            e.preventDefault();
            scrollToNextSection();
        });
    
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);


        // fancybox
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: {
              autoStart: true, // Show thumbnails by default
            },
            Toolbar: {
              display: ['close'],
            },
          });
    });
})(jQuery);