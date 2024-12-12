import { formatCurrency } from '../../scripts/utils/money.js';

console.log('Test suite: formatCurrency');

console.log('Converts cents into dollars');
if (formatCurrency(2095) === '20.95') {
	console.log('Test passed');
} else {
	console.log('Test failed');
}

console.log('Works with zero');
if (formatCurrency(0) === '0.00') {
	console.log('Test passed');
} else {
	console.log('Test failed');
}

console.log('Rounds up to nearest cent');
if (formatCurrency(2000.5) === '20.01') {
	console.log('Test passed');
} else {
	console.log('Test failed');
}

console.log('Rounds down to nearest cent');
if (formatCurrency(2000.4) === '20.00') {
	console.log('Test passed');
} else {
	console.log('Test failed');
}
