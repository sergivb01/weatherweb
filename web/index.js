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
		//curve: "straight"
		curve: "smooth"
	},
	toolbar: {
		tools: {
			selection: true
		}
	},
	animations: {
		enabled: true,
		easing: 'easeinout',
		speed: 800,
		animateGradually: {
			enabled: true,
			delay: 150
		},
		dynamicAnimation: {
			enabled: true,
			speed: 350
		}
	}
	, markers: {
		size: 6,
		hover: {
			size: 10
		}
	},
	tooltip: {
		followCursor: true,
		theme: "dark",
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
					return ""
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
		type: "datetime"
	},
}

/**
 * Config Temperatura
 *
 * Configuració de la gràfica lineal de la temperatura.
 */
let configTemperatura = {
	chart: {
		id: "temp",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#008FFB"],
	series: [{
		data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
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
		id: "velocitat-vent",
		group: "meteo-general",
		type: "line",
	},
	colors: ["#546E7A"],
	series: [{
		data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
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
 * Configuració de la gràfica d"arees de la pluja
 */
let configPluja = {
	chart: {
		id: "pluja",
		group: "meteo-general",
		type: "area"
	},
	colors: ["#00E396"],
	series: [{
		data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
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
 * Config Heatmap
 *
 * Configuració exemple d"un heatmap
 */
let configHeatmap = {
	chart: {
		id: "heatmap",
		group: "meteo-general",
		height: 350,
		type: "heatmap",
	},
	dataLabels: {
		enabled: false
	},
	colors: ["#008FFB"],
	series: [{
		name: "Metric1",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric2",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric3",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric4",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric5",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric6",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric7",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric8",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	},
	{
		name: "Metric9",
		data: generateData(18, {
			min: 0,
			max: 90
		})
	}
	],
	xaxis: {
		type: "category"
	},

}

/**
 * Render de tots els gràfics
 */
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

new ApexCharts(
	document.querySelector("#chart-heatmap"),
	configHeatmap
).render();


/**
 * generateDayWiseTimeSeries generates a series of day & value
 * @param {*} baseval first day
 * @param {*} count number of entries
 * @param {*} yrange number of days (lastday-firstday=yrange)
 * @returns an array of arrays in [timestamp, value]
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
	console.log(series)
	return series;
}
