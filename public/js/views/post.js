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
