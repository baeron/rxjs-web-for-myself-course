//SUBJECT WARNING!!! code not working
const firstSubject$ = rxjs.Subject.create();

firstSubject$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Comleted');
	}
);

firstSubject$.next(1);
firstSubject$.next(2);

setTimeout( () => {
	firstSubject$.next(3);
	firstSubject$.complete();
}, 2000);

//
const secondSubject$ = rxjs.Subject.create();
const interval$ = rxjs.interval(1000);

interval$.subscribe(secondSubject$);

secondSubject$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => {console.log('Completed 1 SUBJECT') }
);

secondSubject$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => {console.log('Completed 2 SUBJECT') }
);

setTimeout(() => {
	secondSubject$.subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => {console.log('Completed 3 SUBJECT') }
	)}, 2000
);

//BEHAVIOR_SUBJECT WARNING!!! code not working
const behaviorSubject$ = rxjs.BehaviorSubject('Hello');

behaviorSubject$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Complete') },
);

behaviorSubject$.next('world');
behaviorSubject$.complete();

//REPLAY_SUBJECT WARNING!!! code not working
const replaySubject$ = rxjs.ReplaySubject(2);

replaySubject$.next(1);
replaySubject$.next(2);
replaySubject$.next(3);

replaySubject$.comlete();

replaySubject$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleate') }
);

// ASYNC_SUBJECT WARNING!!! code not working
const asyncSubject$ = rxjs.AsyncSubject();

asyncSubject$.next(1);
asyncSubject$.next('return only last value');
asyncSubject$.comlete();

asyncSubject$.subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log('Compleate') }
);