
// Method MERGE combine simple data. FIRST example
const hello$ = rxjs.of('Hello');
const world$ = rxjs.of('world');

hello$
	.pipe(rxjs.operators.merge(world$))
	.subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => { console.log('Compleated') }
	);

const concatStream$ = rxjs.Observable
	.create()
	.pipe(rxjs.operators.merge(hello$, world$));

concatStream$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated') }
);

// Method MERGE combine simple data 
const firstIntervalStream$ = rxjs.interval(1000).pipe(
	rxjs.operators.map(firstStreamValue => 'Stream 1: ' + firstStreamValue));

const secondIntervalStream$ = rxjs.interval(500).pipe(
	rxjs.operators.map(secondStreamValue => 'Stream 2: ' + secondStreamValue));

rxjs.Observable
	.create()
	.pipe(
		rxjs.operators.merge(firstIntervalStream$, secondIntervalStream$),
		rxjs.operators.take(10)	
	)
	.subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => { console.log('Compleated') }
	);

// Method MERGE_ALL combinees data random chaine
rxjs.range(1, 2).pipe(
	rxjs.operators.map( x => rxjs.range(1, 3)),
	rxjs.operators.mergeAll()
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated') }
);


//Method CONCAT combinees data in the correct chain. TIP: Thes code not work.
const firstArrayStream$ = rxjs.from([1, 2, 3]);
const secondArrayStream$ = rxjs.from([4, 5, 6]);

const concatArrayStream$ = rxjs.Observable
	.create()
	.pipe(rxjs.operators.concat(firstArrayStream$, secondArrayStream$));

concatArrayStream$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated') }
);

//Method CONCAT_ALL difference between MERGE. Concat keeps the correct chaine
rxjs.range(1, 2).pipe(
	rxjs.operators.map( x => rxjs.range(x, 3)),
	rxjs.operators.concatAll()
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated') }
);