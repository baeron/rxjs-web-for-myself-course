const arr = [
	{ id: 1, name: 'first' },
	{ id: 2, name: 'second' }
];

const set = new Set([1, 2, 3, "4", "5", [6, 7], {id: 8}]);

const map = new Map([[1, 2], [3, 4], [5, 6]]);

// Method FROM can use with Array, Set, Map for iterate object in param
rxjs.from(arr).subscribe(
	v => { console.log(v) },
	e => { console.log(e) },
	() => { console.log("complete" ) }
)