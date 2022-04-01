// takes arg: [2,2,1,1] representing the number of books to buy
// returns lowest price in dollars
var subtotal;
var savings;
var total;
const resultsEl = document.querySelector('.results');
const book1El = document.querySelector('#book1');
const book2El = document.querySelector('#book2');
const book3El = document.querySelector('#book3');
const book4El = document.querySelector('#book4');
const book5El = document.querySelector('#book5');

const plusses = document.querySelectorAll('.plus');
const minuses = document.querySelectorAll('.minus');

var msg;

function hp(arr) {
	resultsEl.innerHTML = '';
	// console.log(`arr = ${arr}`);
	var maxDiscount = hpPick(hpEval(hpJuggle(hpExtract(hpSort(hpFilter(arr))))));
	var costWithoutDiscount = hpSum(arr) * unitCost;
	var costWithDiscount = costWithoutDiscount - maxDiscount;
	var costWithoutDiscountInDollars = costWithDiscount / 100;

	subtotal = (costWithoutDiscount / 100).toFixed(2);
	savings = (maxDiscount / 100).toFixed(2);
	total = (costWithDiscount / 100).toFixed(2);

	var msg = `Thank you for your purchase!<br>
	Subtotal: $${subtotal}<br>
	Best of the best discount: -$${savings}<br>
	Total: $${total}<br>
	Will that be cash or card?`;
	// console.log(msg);
	renderHp(msg);
	return costWithoutDiscountInDollars;
}

function renderHp(msg) {
	var p = document.createElement('p');
	p.innerHTML = msg;
	resultsEl.appendChild(p);
}

function runHpFromPage() {
	hp([+book1El.value, +book2El.value, +book3El.value, +book4El.value, +book5El.value]);
}

// call run on change
book1El.addEventListener('change', runHpFromPage);
book2El.addEventListener('change', runHpFromPage);
book3El.addEventListener('change', runHpFromPage);
book4El.addEventListener('change', runHpFromPage);
book5El.addEventListener('change', runHpFromPage);

plusses.forEach((plus) => plus.addEventListener('click', runHpFromPage));
minuses.forEach((minus) => minus.addEventListener('click', runHpFromPage));

// also run on startup
runHpFromPage();
