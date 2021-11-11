/* eslint no-undef: off*/
const moveTo = new MoveTo({ tolerance: 20 });
const chevron = document.getElementById('chevron');

moveTo.registerTrigger(chevron);

// const sheet = 'Lideres sociales asesinados desde la firma del pro';
// const keys = {
// 	leaders: 'https://docs.google.com/spreadsheets/d/1I9NHXhAPSzruE5s94_X5FQpRMksz6MTHgLCgrTviqfM/edit#gid=0',
// 	calendar: 'https://docs.google.com/spreadsheets/d/10Pr1OU9XMq__YpuRCEE0Smza6nbrEmuuNeUTT-XEuEU/edit#gid=338236224',
// };

// Tabletop.init({
// 	key: keys.leaders,
// 	callback: getTotal,
// });

// Tabletop.init({
// 	key: keys.calendar,
// 	callback: getCalendar,
// });

// function getTotal (data, tabletop) {
// 	const total = tabletop.sheets(sheet).all().length;
// 	const container = document.querySelector('.counter__number');
// 	const counter = new CountUp(container, 0, total, 0, 1.5, {});
// 	if (!counter.error) {
// 		counter.start();
// 	} else {
// 		container.innerHTML = total;
// 	}
// }

// function getCalendar (data, tabletop) {
// 	const calendar = tabletop.sheets('eventos-lideres').all().filter(date => date.FECHA.match(/^\d/));
// 	const template = calendar.reduce((str, event) => {
// 		const place = event['LUGAR DE REALIZACIÓN']
// 			? `${event['LUGAR DE REALIZACIÓN'].trim()}, ${event.CIUDAD}`
// 			: event.CIUDAD;
// 		str += `<div class="calendar__event column">
// 			<span>${event.NOMBRE}</span>
// 			<span><small><i class="fa fa-calendar"></i> ${event.FECHA.replace(/\-/g, '/')}</small></span>
// 			<span><small><i class="fa fa-map-marker"></i> ${place}</small></span>
// 		</div>`;
// 		return str;
// 	}, '');
// 	document.querySelector('.calendar__events').innerHTML = template;
// }

iFrameResize({
	checkOrigin: false,
	heightCalculationMethod: 'lowestElement',
	maxHeight: 768,
}, '#iframe');
