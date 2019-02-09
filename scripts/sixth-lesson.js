// Base implementation MAP method
rxjs
  .interval(1000)
  .pipe(
    rxjs.operators.map(v => v * v),
    rxjs.operators.take(10)
  )
  .subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
    () => { console.log("complete") }
  );

rxjs.fromEvent(document.querySelector("input"), "keyup").pipe(
	// rxjs.operators.map(x => x.target.value),
	// Method PLUCK geting value by 'KEY' 'VALUE' identical map method upper
	rxjs.operators.pluck('target', 'value'),
  rxjs.operators.map(x => x.toUpperCase()),
  rxjs.operators.map(x => {
      return {
        value: x,
        length: x.length
      }
		})
	).subscribe(
		v => { console.log(v) },
		e => { console.log(e) },
		() => { console.log("complete") }
)
