const hpFilterTests = [
	{ i: [1, 0], o: [1] },
	{ i: [1], o: [1] },
	{ i: [0, 0], o: [] },
	{ i: [0], o: [] },
];

function hpFilter(arr) {
	return arr.filter((val) => {
		return val != 0;
	});
}

function testHpFilter() {
	for (var test = 0; test < hpFilterTests.length; test++) {
		var testIn = hpFilterTests[test].i;
		var testOut = hpFilterTests[test].o;
		var expected = JSON.stringify(testOut);
		var actual = JSON.stringify(hpFilter(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected hpFilter(${JSON.stringify(testIn)} to equal ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
