const $ = require('jquery');
import iqTest from './bob-iq-test';
import moveZeroes from './move-zeroes';
import comp from './are-they-the-same';

require("./styles.scss");

console.log('The (1-indexed) position of the oddball number is ' + iqTest('2, 5, 4, 8, 16'));

console.log(`The solution for Move Zeroes is ${moveZeroes([8, 0, 'a', true, 0, 7, null, 'q'])}`);

console.log(`The solution for Are They the Same is ${comp([4, 2, 4], [16, 4, 16])}`);
