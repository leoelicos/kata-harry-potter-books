const discount5 = 5 * 25;
const discount4 = 4 * 20;
const discount3 = 3 * 10;
const discount2 = 2 * 5;
const discount1 = 1 * 0;

const hpEvalTests = [
	{ i: [[1, 1, 1, 1]], o: [discount4] },
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

function hpEval() {}
