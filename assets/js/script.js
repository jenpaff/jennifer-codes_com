$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		// play: 5000,
		pagination: true
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Hardware Enthusiast.", "Diversity in Tech Advocate."],
		typeSpeed: 120,
		loop: true,
		startDelay: 1000,
		showCursor: false

	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	       	938:{
	            items:4
	        },
	    }
	})

	$(function() {

		var skillsTopOffset = $("#skills").offset().top;
		var statsTopOffset = $("#stats").offset().top;
		var countUpFinished = false;

        $(window).scroll(function(){

        	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

				$('.chart').easyPieChart({
		            easing: 'easeInOut',
		            barColor: '#fff',
		            trackColor: false,
		            scaleColor: false,
		            lineWidth: 4,
		            size: 152,
		            onStep: function(from, to, percent) {
		            	$(this.el).find('.percent').text(Math.round(percent));
		            }
		        });
			}
			
			if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
				$(".counter").each(function() {
					var element = $(this);
					var endVal = parseInt(element.text());
	
					element.countup(endVal);
				})
	
				countUpFinished = true;
	
			}

        });
	});

	var countUp = new CountUp('target', 2000);
	countUp.start();

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    })
    
	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {

			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");

		} else {

			body.css("padding-top", 0);
			body.removeClass("fixedNav");

		}
	}

});