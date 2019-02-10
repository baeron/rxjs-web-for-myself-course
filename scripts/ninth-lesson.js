// Method BUFFER accumulate value by method params
rxjs.interval(500).pipe(
	rxjs.operators.buffer(rxjs.interval(2000)),
	rxjs.operators.take(3)
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('complete') }
);

// Method BUFFER_TIME accumulate value by time in milliseconds in @firstArgument
rxjs.interval(400).pipe(
	rxjs.operators.bufferTime(2000),
	rxjs.operators.take(5)
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('complete') }
);

// Method BUFFER_COUNT accumulate value by @firstArgument in params
rxjs.range(0, 40).pipe(
	rxjs.operators.bufferCount(5)
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('complete') }
);


// Simple example BUFFER method

rxjs.interval(1000).pipe(
	rxjs.operators.buffer(rxjs.fromEvent(document, 'click')),
	rxjs.operators.map(value => value.length)
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('complete') }
);
