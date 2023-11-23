window.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,

		autoplay: {
			delay: 2000,
		},

		slidesPerView: 3,
		spaceBetween: '20px',
	});
});
