// takes arg: [2,2,1,1] representing the number of books to buy
// returns lowest price in dollars

function hp(arr) {
	var maxDiscount = hpPick(hpEval(hpJuggle(hpExtract(hpSort(hpFilter(arr))))));
	var costWithoutDiscount = hpSum(arr) * unitCost;
	var costWithDiscount = costWithoutDiscount - maxDiscount;
	var costWithoutDiscountInDollars = costWithDiscount / 100;
	console.log(`Welcome to Harry Potter Book Shop! 
	Thank you for your purchase!
	Subtotal:\t$${(costWithoutDiscount / 100).toFixed(2)}
	Savings:\t-$${(maxDiscount / 100).toFixed(2)}
	Total:\t\t$${(costWithDiscount / 100).toFixed(2)}
	Will that be cash or card?`);
	return costWithoutDiscountInDollars;
}
