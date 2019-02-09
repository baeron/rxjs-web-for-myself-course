// Method FIRST get first value from data
rxjs.of(1, 2, "next", "lastValue")
  .pipe(rxjs.operators.first())
  .subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
    () => { console.log("complete") }
  );

// Method LAST get last value from data
rxjs.of(1, 2, "next", "lastValue")
	.pipe(rxjs.operators.last())
	.subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => { console.log("complete") }
	);

// Method FIND get finding value in params
rxjs.of(1, 2, "next", "lastValue")
.pipe(rxjs.operators.find( x => x === 2))
.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);

// Method FIND_INDEX get finding value in params
rxjs.of(1, 2, "next", "lastValue")
.pipe(rxjs.operators.findIndex( x => x === 2))
.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);

// Method TAKE take quantity value from data
rxjs.of(1, 2, "next", "lastValue")
.pipe(rxjs.operators.take(3))
.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);

// Method SKIP moisses quantity value from data and return other
rxjs.of(1, 2, "next", "lastValue")
.pipe(rxjs.operators.skip(3))
.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);

// Method SKIP_WHILE skip data until find nested
rxjs.of(1, 2, "next", "lastValue")
.pipe(rxjs.operators.skipWhile(
	x => typeof x === 'number'
)).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);


// Method takeWhile take data until find nested
rxjs.interval(500)
.pipe(
	rxjs.operators.skipWhile( x => x < 5),
	rxjs.operators.takeWhile( x => x < 15)
	).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);

// Method SKIP_UNTIL TAKE_UNTIL take data  skip interval
rxjs.interval(500)
.pipe(
	rxjs.operators.skipUntil( rxjs.interval(3000) ),
	rxjs.operators.takeUntil( rxjs.interval(5000) )
	).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete") }
);