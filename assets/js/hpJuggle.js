const hpJuggleTests = [
	{ i: [[1, 1, 1, 1]], o: [[[1, 1, 1, 1]]] },
	{
		i: [
			[1, 1, 1, 1],
			[1, 0, 0, 0],
		],
		o: [
			[
				[1, 1, 1, 1],
				[1, 0, 0, 0],
			],
			[
				[1, 0, 1, 1],
				[1, 1, 0, 0],
			],
		],
	},
	{
		i: [
			[1, 1, 1, 1],
			[1, 1, 0, 0],
		],
		o: [
			[
				[1, 1, 1, 1],
				[1, 1, 0, 0],
			],
			[
				[1, 1, 0, 1],
				[1, 1, 1, 0],
			],
		],
	},
	{
		i: [
			[1, 1, 1, 1],
			[1, 1, 1, 0],
		],
		o: [
			[
				[1, 1, 1, 1],
				[1, 1, 1, 0],
			],
		],
	},
	{
		i: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		],
		o: [
			[
				[1, 1, 1, 1],
				[1, 1, 1, 1],
			],
		],
	},
	{
		i: [
			[1, 1, 1, 1],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
		],
		o: [
			[
				[1, 1, 1, 1],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
			],
			[
				[1, 0, 1, 1],
				[1, 1, 0, 0],
				[1, 0, 0, 0],
			],
			[
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 0, 0],
			],
			[
				[1, 0, 0, 1],
				[1, 0, 1, 0],
				[1, 1, 0, 0],
			],
		],
	},
];

function range(arr) {
	var runningMax = hpSum(arr[0]);
	var runningMin = hpSum(arr[0]);
	for (var i = 0; i < arr.length; i++) {
		var sum = hpSum(arr[i]);
		if (runningMax <= sum) {
			runningMax = sum;
		}
		if (runningMin >= sum) {
			runningMin = sum;
		}
	}
	return runningMax - runningMin;
}

function hpJuggle(set) {
	var last = JSON.parse(JSON.stringify(set));
	var sets = [];
	var curr = [];
	sets.push(last);
	var i = 0;
	while (range(last) > 1) {
		i++;
		if (i === 8) {
			break;
		}
		// balance it by one
		curr = shiftOne(last);
		last = curr;
		sets.push(curr);
	}
	return sets;
}

function shiftOne(set) {
	var shifted = JSON.parse(JSON.stringify(set));
	for (var i = 0; i < set.length - 1; i++) {
		if (hpSum(set[i]) > hpSum(set[i + 1])) {
			// iterate through the 5 digits of each arr
			for (var j = 0; j < set[i].length; j++) {
				console.log(`i = ${i}, j = ${j}`);
				if (set[i][j] === 1 && set[i + 1][j] === 0) {
					shifted[i][j]--;
					shifted[i + 1][j]++;
					return shifted;
				}
			}
		}
	}
	return shifted;
}

function testHpJuggle() {
	for (var test = 0; test < hpJuggleTests.length; test++) {
		var testIn = hpJuggleTests[test].i;
		var testOut = hpJuggleTests[test].o;
		var expected = JSON.stringify(testOut);
		console.log(`Now testing hpJuggle(${JSON.stringify(testIn)}`);
		var actual = JSON.stringify(hpJuggle(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected hpJuggle(${JSON.stringify(testIn)} to equal ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
