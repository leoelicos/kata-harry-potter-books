const hpEvalTests = [
	{ i: [[[1, 1, 1, 1]]], o: [discount4] },
	{
		i: [
			[
				[1, 1, 1, 1],
				[1, 0, 0, 0],
			],
			[
				[1, 1, 1, 0],
				[1, 0, 0, 1],
			],
		],
		o: [discount4 + discount1, discount3 + discount2],
	},
	{
		i: [
			[
				[1, 1, 1, 1],
				[1, 1, 0, 0],
			],
			[
				[1, 1, 1, 0],
				[1, 1, 0, 1],
			],
		],
		o: [discount4 + discount2, discount3 + discount3],
	},
	{
		i: [
			[
				[1, 1, 1, 1],
				[1, 1, 1, 0],
			],
		],
		o: [discount4 + discount3],
	},
	{
		i: [
			[
				[1, 1, 1, 1],
				[1, 1, 1, 1],
			],
		],
		o: [discount4 + discount4],
	},
	{
		i: [
			[
				[1, 1, 1, 1],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
			],
			[
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 0],
			],
			[
				[1, 1, 0, 0],
				[1, 0, 0, 1],
				[1, 0, 1, 0],
			],
		],
		o: [discount4 + discount1 + discount1, discount3 + discount2 + discount1, discount2 + discount2 + discount2],
	},
];

function calculateDiscount(arr) {
	var booksInDiscount = hpSum(arr);
	if (booksInDiscount === 5) {
		return discount5;
	} else if (booksInDiscount === 4) {
		return discount4;
	} else if (booksInDiscount === 3) {
		return discount3;
	} else if (booksInDiscount === 2) {
		return discount2;
	} else if (booksInDiscount === 1) {
		return discount1;
	} else {
		return 0;
	}
}

function hpEval(arrs) {
	var evals = [];
	var eval;
	for (var i = 0; i < arrs.length; i++) {
		eval = 0;
		var p = document.createElement('p');
		p.classList.add('possibleDiscounts');
		msg = `Best discounts: `;
		for (var j = 0; j < arrs[i].length; j++) {
			var discount = calculateDiscount(arrs[i][j]);
			eval += discount;
			if (j === arrs[i].length - 1 && j != 0) {
				msg += ' and';
			} else if (j > 0) {
				msg += `, `;
			}
			msg += ` ${JSON.stringify(arrs[i][j]).split(',').join('')}`;
		}
		msg += `: -$${(eval / 100).toFixed(2)}`;
		p.textContent = msg;
		resultsEl.appendChild(p);
		// console.log(msg);
		evals.push(eval);
	}

	return evals;
}

function testHpEval() {
	for (var test = 0; test < hpEvalTests.length; test++) {
		var testIn = hpEvalTests[test].i;
		var testOut = hpEvalTests[test].o;
		var expected = JSON.stringify(testOut);
		console.log(`Now testing hpEval(${JSON.stringify(testIn)}`);
		var actual = JSON.stringify(hpEval(testIn));
		var testMessage = expected === actual ? 'Passed' : 'Failed';
		testMessage += `: (Expected ${expected}, received ${actual})`;
		console.log(testMessage);
	}
}
