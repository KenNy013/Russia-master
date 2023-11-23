ninelines.Preloader.init(5000).then(() => {
	document.querySelector('.preloader').style.display = 'none';
	document.querySelector('body').style.overflowY = 'scroll';
});
