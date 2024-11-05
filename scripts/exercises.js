import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// import isWeekend from './utils/weekend.js';

import isSatSun from './utils/weekend.js';

const today = dayjs();

console.log(today.format('MMMM D'));

const monthFromNow = today.add(30, 'day');

console.log(monthFromNow.format('MMMM D'));

const monthAgo = today.subtract(30, 'day');

console.log(monthAgo.format('MMMM D'));

console.log(today.format('dddd'));

console.log(isSatSun(today));
console.log(isSatSun(monthFromNow));
console.log(isSatSun(monthAgo));
console.log(isSatSun(today.add(2, 'day')))

