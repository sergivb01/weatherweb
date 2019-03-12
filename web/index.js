// variable global per configuració default
Apex = {
	chart: {
		height: 160,
	},
	dataLabels: {
		// desactivar/activar mostrar els valors
		enabled: false
	},
	stroke: {
		//curve: 'straight'
		curve: 'smooth'
	},
	toolbar: {
		tools: {
			selection: true
		}
	},
	markers: {
		size: 6,
		hover: {
			size: 10
		}
	},
	tooltip: {
		followCursor: true,
		theme: 'dark',
		x: {
			// ensenyar la data quan es te ratoli sobre valor
			show: false
		},
		marker: {
			// mostrar color en tooltip
			show: false
		},
		y: {
			title: {
				// formatter per el titol del tooltip
				formatter: function () {
					return ''
				}
			}
		}
	},
	grid: {
		clipMarkers: false
	},
	yaxis: {
		// nº de "files" en eix y
		tickAmount: 2
	},
	xaxis: {
		type: 'datetime'
	},
}

/**
 * Config Temperatura
 *
 * Configuració de la gràfica lineal de la temperatura.
 */
let configTemperatura = {
	chart: {
		id: 'temp',
		group: 'meteo-general',
		type: 'line',
	},
	colors: ['#008FFB'],
	series: [{
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
			min: 10,
			max: 60
		})
	}],
	yaxis: {
		labels: {
			minWidth: 40
		}
	}
}

/**
 * Config Vent
 *
 * Configuració de la gràfica lineal de la velocitat del vent
 */
let configVent = {
	chart: {
		id: 'velocitat-vent',
		group: 'meteo-general',
		type: 'line',
	},
	colors: ['#546E7A'],
	series: [{
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
			min: 10,
			max: 30
		})
	}],
	yaxis: {
		labels: {
			minWidth: 40
		}
	}
}

/**
 * Config Pluja
 *
 * Configuració de la gràfica d'arees de la pluja
 */
let configPluja = {
	chart: {
		id: 'pluja',
		group: 'meteo-general',
		type: 'area'
	},
	colors: ['#00E396'],
	series: [{
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
			min: 10,
			max: 60
		})
	}],
	yaxis: {
		labels: {
			minWidth: 40
		}
	}
}

new ApexCharts(
	document.querySelector("#chart-temperatura"),
	configTemperatura
).render();

new ApexCharts(
	document.querySelector("#chart-vent"),
	configVent
).render();

new ApexCharts(
	document.querySelector("#chart-pluja"),
	configPluja
).render();

/*
	this function will generate output in this format
	data = [
			[timestamp, 23],
			[timestamp, 33],
			[timestamp, 12]
			...
	]
*/
function generateDayWiseTimeSeries(baseval, count, yrange) {
	var i = 0;
	var series = [];
	while (i < count) {
		var x = baseval;
		var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

		series.push([x, y]);
		baseval += 86400000;
		i++;
	}
	return series;
}
