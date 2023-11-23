const btn = Array.from(document.querySelectorAll('[data-src]'));

function getLinkForButton(src) {
	window.location.href = window.location.origin + src;
}

btn.forEach((el) => {
	el.addEventListener('click', getLinkForButton.bind(null, el.dataset.src));
});
