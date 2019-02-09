// base Promise implementation
function delay(ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

/*
delay(3000).then(() => {
  console.log("Promise was resolved");
});
*/

// From v.6 fromPromise is not supported, use operator FROM with Promise 
const promise$ = rxjs.from(delay(4000));

promise$.subscribe(
  v => { console.log(v) },
  e => { console.log(e) },
  () => { console.log("complete") }
);