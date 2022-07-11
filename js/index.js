
// main-comments-slider

flashSimpleSlider(".main-comments-slider", {
	dots: false,
	autoplay: true,
	autoplaySpeed: "very-slow",
	speed: "1s",
	draggable: true,
	arrows: false
});

// the-end-of-main-comments-slider



// counter

const counter = () => {

	const counters = document.querySelectorAll('.statistic-number');
	var scrollLimit = window.innerHeight || document.documentElement.clientHeight;
	scrollLimit -= 100;

	const isInView = () => {

		const elementTop = counters[0].getBoundingClientRect().top;

		if (elementTop <= scrollLimit) {

			window.removeEventListener('scroll', isInView);	
			for (let i = 0; i < counters.length; i++) { flashCounter(counters[i], "get-from-target", 0, 3, 1) }

		}

	}

	window.addEventListener('scroll', isInView);
	window.addEventListener('load', isInView);	

}

counter();

// the-end-of-counter



// slider

$('.slider-1').slick({
  dots: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 300,
  arrows: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]  
});

// the-end-of-slider
