// Method DEFAULT_IF_EMPTY initialize emty data from params
rxjs.of().pipe(
    rxjs.operators.defaultIfEmpty(`It's default value`)
).subscribe(
	v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);

// Method EVERY check data and return boolean result for all data in method conditions
rxjs.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).pipe(
	rxjs.operators.every(x => x%2 === 0)
).subscribe(
	v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);



rxjs.range(1, 5).pipe(
	rxjs.operators.tap(x => console.log('Before: ', x)),
	rxjs.operators.map(x => x*x),
	rxjs.operators.tap(x => console.log('After: ', x))
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('compleate')}
);

// Method DELAY stopping stream to @firstParam value
rxjs.range(1, 5).pipe(
	rxjs.operators.map(x => x*x),
	rxjs.operators.delay(2000)
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('compleate')}
);