function setClass () {
	const related = document.querySelector('.post__related');
	const condition = !isBeyondBreakpoint() && (getLayoutClass() === 'split');
	condition
		? related.classList.add('container', 'container_sm')
		: related.classList.remove('container', 'container_sm');
}

function isBeyondBreakpoint () {
	return window.innerWidth > 991;
}

function getLayoutClass () {
	const content = document.querySelector('.post__content');
	const layout = content.className.includes('single') ? 'single' : 'split';
	return layout;
}

window.addEventListener('resize', setClass);

setClass();

/* eslint no-unused-vars: off */
const disqus_config = function () {
	this.page.url = window.location.href;
	this.page.identifier = window.location.href;
	this.language = 'es_MX';
};
(function () {
	const s = document.createElement('script');
	s.src = '//datasketch.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	document.body.appendChild(s);
})();
