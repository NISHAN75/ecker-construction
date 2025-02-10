(function ($) {
    $(document).ready(function () {
        // header sticky


        var windowOn = $(window);
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

 

        // brand slider 
        let brandSlider = new Swiper(".tp-brand-top", {
            slidesPerView: "auto",
            loop:true,
            spaceBetween: 80,
            allowTouchMove:false,
            // speed:4000,
            // autoplay:{
            //     delay:1,
            //     disableOnInteraction:true,
            // }
        });

        // brand slider 
        let brandSlider2 = new Swiper(".tp-brand-bottom", {
            slidesPerView: "auto",
            loop:true,
            spaceBetween: 80,
            allowTouchMove:false,
            // speed:4000,
            // autoplay:{
            //     delay:1,
            //     disableOnInteraction:true,
            // }
        });
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

        // Assuming lenis is already initialized
        lenis.on("scroll", ({ scroll }) => {
          const header = $(".header-area");
      
          if (scroll > lastScrollY) {
            // Scrolling down
            header.removeClass("header-scroll-up").addClass("header-scroll-down");
          } else {
            // Scrolling up
            header.removeClass("header-scroll-down").addClass("header-scroll-up");
          }
      
          lastScrollY = scroll <= 0 ? 0 : scroll; // Ensure non-negative value
        });
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