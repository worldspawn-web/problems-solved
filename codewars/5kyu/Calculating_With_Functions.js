const zero = (operation) => (operation ? operation(0) : 0);
const one = (operation) => (operation ? operation(1) : 1);
const two = (operation) => (operation ? operation(2) : 2);
const three = (operation) => (operation ? operation(3) : 3);
const four = (operation) => (operation ? operation(4) : 4);
const five = (operation) => (operation ? operation(5) : 5);
const six = (operation) => (operation ? operation(6) : 6);
const seven = (operation) => (operation ? operation(7) : 7);
const eight = (operation) => (operation ? operation(8) : 8);
const nine = (operation) => (operation ? operation(9) : 9);

const plus = (num2) => (num1) => num1 + num2;
const minus = (num2) => (num1) => num1 - num2;
const times = (num2) => (num1) => num1 * num2;
const dividedBy = (num2) => (num1) => Math.floor(num1 / num2);

seven(times(five())); // 35
four(plus(nine())); // 13
eight(minus(three())); // 5
six(dividedBy(two)); // 3
