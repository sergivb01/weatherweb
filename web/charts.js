let configs = {};
/**
 * Config Vent
 *
 * Configuració de la gràfica lineal de la velocitat del vent
 */
configs["vent"] = {
	chart: {
		id: "velocitat-vent",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#546E7A"],
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
 * Config Pressio
 *
 * Configuració de la gràfica lineal de la pressio
 */
configs["pressio"] = {
	chart: {
		id: "pressio",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#E91E63"],
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
 * Config Humitat
 *
 * Configuració de la gràfica lineal de la humitat
 */
configs["humitat"] = {
	chart: {
		id: "humitat",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#FF9800"],
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
 * Config Llum
 *
 * Configuració de la gràfica lineal de llum
 */
configs["llum"] = {
	chart: {
		id: "llum",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#546E7A"],
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
 * Config Pluja
 *
 * Configuració de la gràfica d"arees de la pluja
 */
configs["pluja"] = {
	chart: {
		id: "pluja",
		group: "meteo-general",
		type: "area"
	},
	colors: ["#00E396"],
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
 * Config Heatmap
 *
 * Configuració exemple d"un heatmap
 */
configs["heatmap"] = {
	chart: {
		id: "heatmap",
		group: "meteo-general",
		height: 400,
		type: "heatmap",
	},
	dataLabels: {
		enabled: false
	},
	colors: [
		"#F86624",
		"#FF9800",
		"#EA3546",
		"#FA4443",
		"#D7263D"
	],
	series: generateMetrics(9, 18),
	xaxis: {
		type: "category"
	}
}

function getRandomForDay() {
	let series = []
	let min = rnd(0)
	for (let i = 0; i < 86400000; i += 3600000) {
		series.push([i, rnd(min)])
	}
	return series
}

function rnd(min) {
	return Math.floor(Math.random() * 100) + min;
}


function generateMetrics(nSeries, count) {
	let metrics = []
	for (let i = 1; i <= nSeries; i++) {
		metrics.push({
			name: "Metric" + i,
			data: generateData(count, {
				min: 10,
				max: 90
			})
		});
	}
	return metrics;
}

/**
 * generateData generates a series
 * @param {*} count numer of enties
 * @param {*} yrange min and max for the values
 * @returns an object of {x: "wN", y: rndVal}
 */
function generateData(count, yrange) {
	var series = [];
	for (let i = 0; i < count; i++) {
		var x = "w" + (i + 1).toString();
		var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

		series.push({
			x: x,
			y: y
		});
	}
	return series;
}
