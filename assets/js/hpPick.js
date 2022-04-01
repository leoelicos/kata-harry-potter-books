const hpPickTests = [
	{ i: [discount4], o: [discount4] },
	{
		i: [discount4 + discount1, discount3 + discount2],
		o: [discount4 + discount1],
	},
	{
		i: [discount4 + discount2, discount3 + discount3],
		o: [discount4 + discount2],
	},
	{
		i: [discount4 + discount3],
		o: [discount4 + discount3],
	},
	{
		i: [discount4 + discount4],
		o: [discount4 + discount4],
	},
	{
		i: [discount4 + discount1 + discount1, discount3 + discount2 + discount1, discount2 + discount2 + discount2],
		o: [discount4 + discount1 + discount1],
	},
];

function hpPick() {}
