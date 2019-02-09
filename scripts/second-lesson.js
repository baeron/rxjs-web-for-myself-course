const button = document.querySelector("button");
var btn$ = rxjs.fromEvent(button, 'click');

btn$.subscribe(
  v => { console.log(v) },
  e => { console.log(e) },
  () => { console.log("complete") }
);
