// variable global per configuració default
Apex = {
	chart: {
		height: 160,
	},
	dataLabels: {
		enabled: false // desactivar/activar mostrar els valors
	},
	stroke: {
		curve: "smooth" // straight
	},
	markers: { // les boles de cada punt
		size: 6,
		hover: {
			size: 10
		}
	},
	tooltip: {
		followCursor: true,
		theme: "dark",
		x: {
			show: false,
			format: "HH:MM" // TODO: Date time shows 17:01
			// formatter: function (val, opts) { // * How to custom format
			// 	let d = new Date(val)
			// 	return d.getHours() + ":00"
			// }
		},
		marker: {
			show: false // mostrar color en tooltip
		},
		y: {
			title: {
				formatter: function (serie, chartData) { // *formatter per el titol del tooltip
					return ""
				}
			}
		}
	},
	yaxis: {
		tickAmount: 2 // nº de "files" en eix y
	},
	xaxis: {
		type: "datetime",
		labels: {
			format: 'HH:mm',
		}
	}
}

/**
 * Config Temperatura
 *
 * Configuració de la gràfica lineal de la temperatura.
 */
configs["temperatura"] = {
	chart: {
		id: "temp",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#008FFB"],
	series: [{
		data: getRandomForDay()
	}],
	yaxis: {
		labels: {
			minWidth: 40
		}
	}
}
/**
 * Render de tots els gràfics
 */
for (let key in configs) {
	new ApexCharts(
		document.querySelector("#chart-" + key),
		configs[key]
	).render();
}

/*function generateDayWiseTimeSeries(baseval, count, yrange) {
	var series = [];
	for (let i = 0; i < count; i++) {
		var x = baseval;
		var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

		series.push([x, y]);
		baseval += 86400000;
	}
	console.log(series)
	return series;
}*/
