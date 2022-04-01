const hpPickTests = [
	{ i: [discount4], o: [discount4] },
	{
		i: [discount4 + discount1, discount3 + discount2],
		o: discount4 + discount1,
	},
	{
		i: [discount4 + discount2, discount3 + discount3],
		o: discount4 + discount2,
	},
	{
		i: [discount4 + discount3],
		o: discount4 + discount3,
	},
	{
		i: [discount4 + discount4],
		o: discount4 + discount4,
	},
	{
		i: [discount4 + discount1 + discount1, discount3 + discount2 + discount1, discount2 + discount2 + discount2],
		o: discount4 + discount1 + discount1,
	},
];

function hpPick(arr) {
	return Math.max(...arr);
}

function testHpPick() {
	for (var test = 0; test < hpPickTests.length; test++) {
		var testIn = hpPickTests[test].i;
		var testOut = hpPickTests[test].o;
		var expected = JSON.stringify(testOut);
		console.log(`Now testing hpPick(${JSON.stringify(testIn)}`);
		var actual = JSON.stringify(hpPick(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
