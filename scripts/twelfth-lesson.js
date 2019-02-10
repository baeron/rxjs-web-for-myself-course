// Simple method MERGE_MAP with static data
rxjs.of("Hello").pipe(
	rxjs.operators.mergeMap(data => rxjs.of(data + ' world'))
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => {console.log('Compleated') }
);


// Method MERGE_MAP with asinhronous data with PROMISE
const promise = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data + ' use operator MergeMap and Promise setTimeout delay');
		}, 2000)
	})
};

rxjs.of('Some DATA').pipe(
	rxjs.operators.mergeMap((value) => {
		return promise(value)
	})
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated')}
);

// Method CONCAT_MAP
rxjs.range(1, 10).pipe(
	rxjs.operators.concatMap((x, i) => {
		return rxjs.interval(100).pipe(
			rxjs.operators.take(x),
			rxjs.operators.map(q => i)
		)
	})
).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated') }
);