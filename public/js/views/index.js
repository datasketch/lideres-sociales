/* eslint no-undef: off*/
const sheet = 'Lideres sociales asesinados desde la firma del pro';
Tabletop.init({
	key: 'https://docs.google.com/spreadsheets/d/1I9NHXhAPSzruE5s94_X5FQpRMksz6MTHgLCgrTviqfM/edit#gid=0',
	callback: getTotal,
});

function getTotal (data, tabletop) {
	const total = tabletop.sheets(sheet).all().length;
	const container = document.querySelector('.counter__number');
	const counter = new CountUp(container, 0, total, 0, 1.5, {});
	if (!counter.error) {
		counter.start();
	} else {
		container.innerHTML = total;
	}
}

const moveTo = new MoveTo({ tolerance: 20 });
const chevron = document.getElementById('chevron');
moveTo.registerTrigger(chevron);
