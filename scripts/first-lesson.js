const stream$ = rxjs.Observable.create(observer => {
	console.log('stream was created');
	
	observer.next("one");

	setTimeout(() => {
		observer.next('After 5 seconds');
	}, 5000);

	setTimeout(() => {
		observer.next('After 3 seconds');
	}, 3000);

	setTimeout(() => {
		observer.next('After 2 seconds');
	}, 2000);

	observer.next('two');
});

/*
stream$.subscribe(data => {
	console.log(`Subscribe: ${data}`);
});
*/