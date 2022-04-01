const hpSumTests = [
	{ i: [2, 2, 2, 1, 1], o: 2 + 2 + 2 + 1 + 1 },
	{ i: [2, 2, 2, 1, 0], o: 2 + 2 + 2 + 1 + 0 },
	{ i: [2, 2, 0, 1, 0], o: 2 + 2 + 0 + 1 + 0 },
	{ i: [2, 2, 2, 1, 0], o: 2 + 2 + 2 + 1 + 0 },
	{ i: [0, 2, 2, 1, 0], o: 0 + 2 + 2 + 1 + 0 },
];
function hpSum(arr) {
	return arr.reduce((a, b) => a + b);
}

function testHpSum() {
	for (var test = 0; test < hpSumTests.length; test++) {
		var testIn = hpSumTests[test].i;
		var testOut = hpSumTests[test].o;
		var expected = JSON.stringify(testOut);
		var actual = JSON.stringify(hpSum(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected hpSum(${JSON.stringify(testIn)} to equal ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
