const stream$ = rxjs.Observable.create(observer => {
	
	observer.next("one");

	setTimeout(() => {
		observer.next('After 5 seconds');
	}, 5000);

	setTimeout(() => {
		console.log('stream was compleated');
		observer.complete();
	}, 3000);

	setTimeout(() => {
		observer.next('After 2 seconds');
	}, 2000);

	observer.next('two');
});


stream$.subscribe(data => {
	console.log(`Subscribe: ${data}`);
});