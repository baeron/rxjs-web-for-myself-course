// Method THROW_ERROR not brolen all code in app
rxjs
	.throwError(new Error('Somthing went wrong!'))
	.subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => { console.log("Completed") }
	);

rxjs
	.interval(500)
	.pipe(rxjs.operators.take(2))
	.subscribe(
		x => { console.log(x) },
		e => { console.log(e) },
		() => { console.log('Completed') }	
	)


// Method ON_ERROR_RESUME_NEXT miss stream with ERROR
const fistStream$ = rxjs.throwError(new Error('Somthing went wrong!'));
const secondStream$ = rxjs.interval(500).pipe(rxjs.operators.take(2));

fistStream$
	.pipe(rxjs.operators.onErrorResumeNext(secondStream$))
	.subscribe(
		x => { console.log(x) },
		e => { console.log(e) },
		() => { console.log('Completed') }	
	);