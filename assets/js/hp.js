// takes arg: [2,2,1,1] representing the number of books to buy
// returns lowest price in dollars

function hp(arr) {
	var maxDiscount = hpPick(hpEval(hpJuggle(hpExtract(hpSort(hpFilter(arr))))));
	var costWithoutDiscount = hpSum(arr) * unitCost;
	return (costWithoutDiscount - maxDiscount) / 100;
}
