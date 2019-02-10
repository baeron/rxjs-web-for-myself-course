const hello$ = rxjs.of('Hello');
const world$ = rxjs.of('world');

const concatStream$ = rxjs.Observable.create();

concatStream$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleated') }
);