const hpSortTests = [
	{ i: [1, 2], o: [2, 1] },
	{ i: [1, 3], o: [3, 1] },
	{ i: [1, 2, 1], o: [2, 1, 1] },
	{ i: [1, 3, 1, 3, 1], o: [3, 3, 1, 1, 1] },
];
function hpSort(arr) {
	return arr.sort((a, b) => b - a);
}

function testHpSort() {
	for (var test = 0; test < hpSortTests.length; test++) {
		var testIn = hpSortTests[test].i;
		var testOut = hpSortTests[test].o;
		var expected = JSON.stringify(testOut);
		var actual = JSON.stringify(hpSort(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected hpSort(${JSON.stringify(testIn)} to equal ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
