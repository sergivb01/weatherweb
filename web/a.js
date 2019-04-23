res.split(';').forEach(r => {
	el = r.split('=')
	const key = el[0]
	const val = el[1]
	console.log(key, val)
})
