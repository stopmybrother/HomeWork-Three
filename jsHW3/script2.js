//task 6 - ready

let a = 1;
let b = 2;
let c = " белых медведей";

console.log(`${a}${b}${c}`);

//task 7 - ready

let strOne = "every hunter wants to know where the pheasant is sitting";

const capitalizeFirstLetter = (str) => {
	let strNew = "";
	for (i = 0; i < str.length; i++) {
		if (str[i - 1] === " " || i === 0) {
			strNew += str[i].toUpperCase();
		} else {
			strNew += str[i];
		}
	}
	return strNew;
};
capitalizeFirstLetter(strOne);

//task 8 - ready

let arrOne = [1, 2];
let arrTwo = ["valueOne", "valueTwo"];

let concatenateArrays = (arrFirst, arrSecond) => {
	let obj = {};

	arrFirst.forEach((item, index) => {
		obj[item] = arrSecond[index];
	});
	return obj;
};
concatenateArrays(arrOne, arrTwo);

//task 9 - ready

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let elemOne = 3;

const concatenateArays = (arr, elem) => {
	let newArr = [];
	for (let i = 0; i < arr.length / elem; i++) {
		newArr.push(arr.slice(i * elem, i * elem + elem));
	}
	return newArr;
};
concatenateArays(arrOne, elemOne);

//task 10 - ready

let numbers = [10, 25, 100];
const addNumbers = (arr) => {
	let sum = 0;

	arr.forEach((_item, index) => {
		if (typeof arr[index] === "number") {
			sum += arr[index];
		}
	});

	return sum;
};
addNumbers(numbers);

//task 11 - ready

let arrPrev = [
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
const checkAge = (arr) => {
	let arrOne = [];
	let arrTwo = [];
	arr.forEach((item, index) => {
		if (arr[index].age >= 18) {
			arrOne.push(item);
		} else {
			arrTwo.push(item);
		}
	});
	console.log(arrOne);
	console.log(arrTwo);
};
checkAge(arrPrev);

//task 12 - ready

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

//task 13 - ready

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
	for (let i = 0; i < years; i++) {
		overpaymentSum += credit * intRateNow;
		credit -= decreaseBalance;
	}
	return overpaymentSum;
};
getOverpayment(1000, 10, 5);

//task 14 - ready

const getSecondsInWeek = () => {
	const sec = 1;
	const min = sec * 60;
	const hour = min * 60;
	const day = hour * 24;
	const week = day * 7;
	const today = new Date();
	alert(
		`Сегодня, ${today.getDate()}.${
			today.getMonth() + 1
		}.${today.getFullYear()}, я узнал, что количество секунд в одной неделе составляет ${week}`
	);
};
getSecondsInWeek();

//task 15 - ready

let a = 10;
let b = 2;
let c = 5;
let sum = a + b + c;
alert(sum);
console.log(sum);

//task 16 - ready

let age = 23;
alert(`I'm ${age} years old`);

//task 17 - ready

let a = 3;
let b = 10;
let c = -5;
let d = 6;
let e = -12;
let maxValue = Math.max(a, b, c, d, e);
if (a === maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${a}`);
} else if (b === maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${b}`);
} else if (c === maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${c}`);
} else if (d === maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${d}`);
} else if (e === maxValue) {
	alert(`${a}, ${b}, ${c}, ${d}, ${e}. Наибольшее число: ${e}`);
}

//task 18 - ready

const obj = {
	name: "Noah",
	email: "noahagmailcom",
	fruits: "I like fruits",
	IQ: 87,
};
console.log(obj);

//task 19 - ready

for (let i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
		console.log(`${i} это четное`);
	} else {
		console.log(`${i} это нечетное`);
	}
}

//task 20 - ready

let objTest = {
	Vasya: 80,
	Zina: 77,
	Kate: 88,
	Petya: 95,
	Vova: 57,
};
let changePersentToMark = (obj) => {
	let objNew = {};
	for (let key in obj) {
		switch (true) {
			case obj[key] > 90:
				objNew[key] = 5;
				break;
			case obj[key] > 80:
				objNew[key] = 4;
				break;
			case obj[key] > 70:
				objNew[key] = 3;
				break;
			case obj[key] > 60:
				objNew[key] = 2;
				break;
			default:
				objNew[key] = 1;
				break;
		}
	}
	return objNew;
};
changePersentToMark(objTest);

//task 21 - ready

for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`${i} FizzBazz`);
	} else if (i % 3 === 0) {
		console.log(`${i} Fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} Bazz`);
	} else {
		console.log(`${i}`);
	}
}

//task 22 - ready

let arrOne = [1, 2, 3, 4, 5];
let arrTwo = arrOne.slice(0);
console.log(arrTwo);

//task 23

// 1)
let arrOne = [1, 2, 3];
let getOddNumbers = (arr) => {
	let arrNew = [];
	arr.forEach((item, index) => {
		if (arr[index] % 2 !== 0) {
			arrNew.push(item);
		}
	});
	return arrNew;
};
getOddNumbers(arrOne);

// 2)
let arrOne = [1, 2, 3, 4];
let getNumbersSquared = (arr) => {
	let arrNew = [];
	arr.forEach((item, index) => {
		item *= arr[index];
		arrNew.push(item);
	});
	return arrNew;
};
getNumbersSquared(arrOne);

// 3) - ready, BUT habe a question
let arrOne = [1, true, "true"];
let checkTypeString = (arr) => {
	arr.forEach((item) =>
		typeof item === "string" ? console.log("true") : console.log(false)
	);
};
checkTypeString(arrOne); //show, how many alements are "true" and how many "false" 
// НУЖЕН СЧЕТЧИК !!!

//task 24 - ready

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
const getAges = (arr) => {
	let arrTwo = [];
	arr.forEach((_item, index) => {
		arrTwo.push(arr[index].age);
	});
	return arrTwo;
};
getAges(arrOne);

//task 25 - ready

let objOne = {
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

console.log(swapKeysInObj(objOne));

//task 26 - NOT ready

let arrOne = [
	{
		x: 1,
		z: 2,
		y: 3,
	},
	{
		x: 10,
		z: 21,
		y: 4,
	},
	{
		x: 2,
		z: 3,
		y: 4,
	},
	{
		a: 1,
		b: 2,
	},
];

//task 27 - NOT ready

//task 28 - ready

let arrOne = [1, 2, 3, 3, 4, 5, 6, 7, 7, 9, 9];
let removeSameValues = (arr) => {
	let arrNew = arr.filter((item, index) => item !== arr[index - 1]);
	return arrNew;
};
removeSameValues(arrOne);

//task 29 - ready

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6, 7];
const getSumOfElementsInNewArr = (arrFirst, arrSecond) => {
	let arrNew = arrFirst.concat(arrSecond);
	let sum = 0;
	arrNew.forEach((item) => {
		sum += item;
	});
	console.log(arrNew);
	console.log(sum);
};
getSumOfElementsInNewArr(arrOne, arrTwo);

//task 30 - ready

let strOne = "Hello world";
const strNew = strOne
	.split("")
	.map((item) =>
		item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
	)
	.join("");
console.log(strNew);

//task 31 - ready

let arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let result = arr.reduce((sum, item) => {
	return sum + item;
}, 0);

console.log(result);

//task 32 - ready

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getNumbersSquared = (arr) => {
	let arrNew = [];
	arr.forEach((item, index) => {
		item *= arr[index];
		arrNew.push(item);
	});
	return arrNew;
};
getNumbersSquared(arrOne);

//task 33 - ready

let sortNumbers = (x, y) => {
	if (x > y) return 1;
	if (x === y) return 0;
	if (x < y) return -1;
};

let arrOne = [1, 6, 3, 12, 8];

arrOne.sort(sortNumbers);
console.log(arrOne);

//task 34 - NOT ready

//task 35 - ready

let numberOne = 2021;
let sum = 0;
const numberNew = numberOne
	.toString()
	.split("")
	.forEach((item) => (sum += +item));
console.log(sum);

//task 36 - ready

let strOne = "limited liability company";
const strNew = strOne
	.split(" ")
	.map((item) => {
		return item[0].toLocaleUpperCase();
	})
	.join("");
console.log(strNew);
