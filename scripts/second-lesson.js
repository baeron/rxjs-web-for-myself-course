// Click button Event
rxjs
  .fromEvent(document.querySelector("button"), "click")
  .subscribe(e => console.log(e));

// Input data Event
rxjs
  .fromEvent(document.querySelector("input"), "keyup")
  .subscribe(e => console.log(e));

// Mouse move event
rxjs
	.fromEvent(document, "mousemove")
	.subscribe(
		e => {document.querySelector("h1").innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;}
	);
