const stream$ = rxjs.Observable.create(observer => {
  observer.next("one");

  setTimeout(() => {
		observer.next('After 5 seconds');
    // observer.error("Somthing went wrong");
  }, 5000);

  setTimeout(() => {
    observer.next('After 3 seconds');
    // observer.complete();
  }, 3000);

  setTimeout(() => {
    observer.next("After 2 seconds");
  }, 2000);

  observer.next("two");
});

stream$.subscribe();

stream$.subscribe(data => {
  console.log(`Subscribe: ${data}`),
    error => {
      console.log(error);
    },
    () => {
      console.log("Compleated from subscriber");
    };
});
