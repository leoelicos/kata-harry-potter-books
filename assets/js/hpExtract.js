const hpExtractTests = [
	{ i: [1, 1, 1, 1], o: [[1, 1, 1, 1]] },
	{
		i: [2, 1, 1, 1],
		o: [
			[1, 1, 1, 1],
			[1, 0, 0, 0],
		],
	},
	{
		i: [2, 2, 1, 1],
		o: [
			[1, 1, 1, 1],
			[1, 1, 0, 0],
		],
	},
	{
		i: [2, 2, 2, 1],
		o: [
			[1, 1, 1, 1],
			[1, 1, 1, 0],
		],
	},
	{
		i: [2, 2, 2, 2],
		o: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		],
	},
	{
		i: [3, 1, 1, 1],
		o: [
			[1, 1, 1, 1],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
		],
	},
];

function isEmpty(arr) {
	return hpSum(arr) === 0;
}

function hpExtract(arr) {
	var clone = JSON.parse(JSON.stringify(arr));
	var stack = [];

	while (!isEmpty(clone)) {
		var discount = [];
		for (var i = 0; i < clone.length; i++) {
			if (clone[i] > 0) {
				discount[i] = 1;
				clone[i]--;
			} else {
				discount[i] = 0;
			}
		}
		stack.push(discount);
	}
	return stack;
}

function testHpExtract() {
	for (var test = 0; test < hpExtractTests.length; test++) {
		var testIn = hpExtractTests[test].i;
		var testOut = hpExtractTests[test].o;
		var expected = JSON.stringify(testOut);
		var actual = JSON.stringify(hpExtract(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected hpExtract(${JSON.stringify(testIn)} to equal ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
