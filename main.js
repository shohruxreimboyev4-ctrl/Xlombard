// Sample array
const numbers = [1, 2, 3, 4, 5, 6];

// 1) MAP: har bir elementni 2 ga ko'paytirish
const doubled = numbers.map(num => num * 2);
console.log("MAP (doubled):", doubled);
// [2, 4, 6, 8, 10]

// 2) FILTER: faqat 3 dan katta sonlarni olish
const filtered = numbers.filter(num => num > 3);
console.log("FILTER (num > 3):", filtered);
// [4, 5, 6]

// 3) SOME: arrayda 5 dan katta son bormi?
const hasGreaterThanFive = numbers.some(num => num > 5);
console.log("SOME (>5):", hasGreaterThanFive);
// true

// 4) REDUCE: array elementlarini yig'ish
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("REDUCE (sum):", sum);
// 21

// 5) EVERY: barcha elementlar musbatmi?
const allPositive = numbers.every(num => num > 0);
console.log("EVERY (>0):", allPositive);
// true

// 6) FIND: birinchi 4 dan katta sonni topish
const firstGreaterThanFour = numbers.find(num => num > 4);
console.log("FIND (>4):", firstGreaterThanFour);
// 5
