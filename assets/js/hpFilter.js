const hpFilterTests = [
	{ i: [1], o: [1] },
	{ i: [0], o: [] },
	{ i: [0, 0], o: [] },
	{ i: [1, 0], o: [1] },
];

function hpFilter() {
	/* 
   [1] > [1] */
}

function testHpFilter() {
	for (var test = 0; test < hpFilterTests.length; test++) {
		for (var i = 0; i < hpFilterTests[test].length; i++) {
			hpFilterTests[test][i];
		}
	}
}
