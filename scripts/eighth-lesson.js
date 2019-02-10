// Method FILTER for filter data by conditions
rxjs.range(0, 10).pipe(
	rxjs.operators.filter(x => x > 3)
).subscribe(
  v => { console.log( v) },
  e => { console.log( e ) },
  () => { console.log('complete') }
);

const data = [
	{ name: 'first',	value: 1 },
	{ name: 'second',	value: 2 },
	{ name: 'third',	value: 3 }
];


// Method FILTER small real example
rxjs.fromEvent(document.querySelector('input'), 'keyup').pipe(
	rxjs.operators.map(event => event.target.value),
	rxjs.operators.distinct(),
	rxjs.operators.debounceTime(1500)
).subscribe(dataFromEmevt => {
	rxjs.from(data).pipe(
		rxjs.operators.filter(data => data.name === dataFromEmevt)
	).subscribe(value => {
		document.querySelector('div').innerHTML = `<h2>${value.name.toUpperCase()}</h2>
																								<h4>${value.value}</h4>`
	});
});

// Method DISTINCT_UNTIL_CHANGED pass repeated value
rxjs.from([1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7, 7, 8, 8, 9]).pipe(
	rxjs.operators.distinctUntilChanged()
).subscribe(
	v => { console.log( v) },
	e => { console.log( e ) },
	() => { console.log('complete') }
);