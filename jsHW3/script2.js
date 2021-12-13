//task 6

let a = 1;
let b = 2;
let c = " белых медведей";

console.log(`${a}${b}${c}`);

//task 7

//task 8

let arrOne = [keyOne, keyTwo];
let arrTwo = [valurOne, valueTwo];
let obj = {};

let concatenateArrays = (arrOne, arrTwo) => {};

//task 9

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let elem = 3;

const concatenateArays = () => {
	let newArr = [];
	for (let i = 0; i < arr.length / elem; i++) {
		newArr.push(arr.slice(i * elem, i * elem + elem));
	}
	console.log(newArr); // not perfect
};
concatenateArays(arr, elem);

//task 10

let numbers = [10, 25, 100];
const addNumbers = (arr) => {
	let sum = 0;

	arr.forEach((item, index) => {
		sum += arr[index];
	});

	console.log(sum); //check number
};
addNumbers(numbers);

//task 11

let arr = [
	{
		name: "Ivan",
		age: 18,
	},
	{
		name: "Petr",
		age: 12,
	},
	{
		name: "Sidor",
		age: 25,
	},
];
let minAge = 18;
let arrOne = [];
let arrTwo = [];

for (let i = 0; i < arr.length; i++) {
	if (arr[i].age >= minAge) {
		arrOne.push(arr[i]);
	} else {
		arrTwo.push(arr[i]);
	}
}
console.log(arrOne);
console.log(arrTwo);

//task 12

const str = "Привет!";
const num = 123;
const flag = true;
const txt = "true";
console.log(str);
console.log(typeof str);
console.log(num);
console.log(typeof num);
console.log(flag);
console.log(typeof flag);
console.log(txt);
console.log(typeof txt);

//task 13

const getInterestRate = (rate) => {
	let intRate = rate / 100;
	return intRate;
};
const getSumPerYear = (creditSum, year) => {
	let decreaseSum = creditSum / year;
	return decreaseSum;
};
const getOverpayment = (credit, percent, years) => {
	let intRateNow = getInterestRate(percent);
	let decreaseBalance = getSumPerYear(credit, years);
	let overpaymentSum = 0;
	for (let x = 0; x < years; x++) {
		overpaymentSum += credit * intRateNow;
		credit -= decreaseBalance;
	}
	return overpaymentSum;
};
console.log(getOverpayment(1000, 10, 5));

//task 14

const getSecondsInWeek = () => {
	const sec = 1;
	const min = sec * 60;
	const hour = min * 60;
	const day = hour * 24;
	const week = day * 7;
	const today = new Date();
	alert(`Сегодня, ${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}, я узнал, что количество секунд в одной неделе составляет ${week}`);
};
console.log(getSecondsInWeek());

//task 15

let a = 10;
let b = 2;
let c = 5;
let sum = a + b + c;
// alert(sum);
console.log(sum);

//task 16

let age = 23;
alert(`I'm ${age} years old`);

//task 17

let a = 3;
let b = 10;
let c = -5;
let d = 6;
let e = -12;
let maxValue = Math.max(a, b, c, d, e);
if (a == maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${a}`);
} else if (b == maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${b}`);
} else if (c == maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${c}`);
} else if (d == maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${d}`);
} else if (e == maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${e}`);
}

//task 18

let obj = {
	name: "Noah",
	email: "noahagmailcom",
	fruits: "yes",
	IQ: 87,
};
console.log(obj);

//task 19

for (let i = 0; i <= 15; i++) {
	if (i % 2 == 0) {
		console.log(`${i} это четное`);
	} else {
		console.log(`${i} это нечетное`);
	}
}

//task 20

//task 21

for (let i = 0; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log(`${i} FizzBazz`);
	} else if (i % 3 == 0) {
		console.log(`${i} Fizz`);
	} else if (i % 5 == 0) {
		console.log(`${i} Bazz`);
	} else {
		console.log(`${i}`);
	}
}

//task 22

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = arrOne.slice(0);
console.log(arrTwo);

//task 23

//task 24

let arrOne = [
	{
		name: "Sergey",
		age: 33,
	},
	{
		name: "Daria",
		age: 24,
	},
];
const getAges = () => {
	let arrTwo = [];

	for (let i = 0; i < arrOne.length; i++) {
		arrTwo.push(arr[i].age);
	}
	console.log(arrTwo);
};
getAges(arrOne); //18 and 12 ???

//task 25

let obj = {
	a: "b",
	c: "d",
};

const swapKeysInObj = (obj) => {
	let newObj = {};
	for (let key in obj) {
		newObj[obj[key]] = key;
	}
	return newObj;
};

console.log(swapKeysInObj(obj));

//task 26

//task 27

//task 28

//task 29

//task 30

//task 31

let arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let result = arr.reduce((sum, elem) => {
	return sum + elem;
}, 0);

console.log(result);

//task 32

//task 33

//task 34

//task 35

//task 36
