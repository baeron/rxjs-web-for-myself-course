// Method OF for initialize stream simple data
rxjs.of(1, 2, "3", [4, 5], { six: 6 })
	.subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => { console.log("complete" ) }
	);

// Method INTERVAL for geting data from stream evry @firstParam time interval
rxjs.interval(1000).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete" ) }
)

// Method TIMER for geting data after @firstParam, evry @secondParam 
rxjs.timer(3000, 500).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete" ) }
);

// Method RANGE for geting data from @firstParam, get counte @secondParam
rxjs.range(5, 15).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete" ) }
)